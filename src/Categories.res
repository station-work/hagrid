
module ItemsQuery = %graphql(`
  query ItemsQuery {
    hagrid_category(limit: 10) {
      id
      name
    }
  }
`)

module RemoveCategory = %graphql(`
    mutation RemoveCategory($id: uuid!) {
      category: delete_hagrid_category(where: {id: {_eq: $id }}) {
        returning {
          name
        }
      }
    }
`)

module Window = {
  @scope("window") @val
  external alert: string => unit = "alert"
}



@react.component
let make = () => {
  let (removeCategory, _removeResult) = RemoveCategory.use()

  switch ItemsQuery.use() {
  | {loading: true} => "Loading..."->React.string
  | {error: Some(_error)} => "Error loading data"->React.string
  | {data: None} => "Not to render"->React.string
  | {data: Some({hagrid_category})} => {
      <div>
        {hagrid_category
          ->Belt.Array.map(category => {
            <div
              key={category.id->Js.String.make}>
                <h3>{category.name->React.string}</h3>
                <button
                  onClick={(_ => {
                    removeCategory({ id: category.id })->ignore;
                  })}>
                    {"Deletar"->React.string}
                </button>
            </div>
          })->React.array}
        </div>
    }
  }
}

