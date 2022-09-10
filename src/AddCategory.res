
module AddCategory = %graphql(`
    mutation AddCategory($name: String!) {
      insert_hagrid_category(objects: [{
        name: $name
      }]) {
        returning {
          id
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
  let initialState = "";
  let (addCategory, _addResult) = AddCategory.use()
  let (name, setName) = React.useState(_ => initialState);

  let onChange = evt => {
    ReactEvent.Form.preventDefault(evt)
    let value = ReactEvent.Form.target(evt)["value"]
    setName(_prev => value);
  }

    
  <form
    onSubmit=(event => {
      ReactEvent.Form.preventDefault(event);
      switch (name) {
        | "" => {
          Window.alert("empty name");
        }
        | _ => {
          addCategory({
            name: name
          })->ignore;
          setName(_prev => initialState);
        }
      }
  })>
    <h4>{"Add new Category"->React.string}</h4>
    <input onChange value=name />
    <button>{"Add"->React.string}</button>
  </form>
}

