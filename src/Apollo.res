let graphqlEndpoint = "localhost:7000/v1/graphql"

let headers = {"x-hasura-admin-secret": "7eGbw04tevM2XHLsYNd7LEl2fnB3mp/BViBe+7dWV7w"}

let client = {
  open ApolloClient
  make(
    ~uri=_ => "http://" ++ graphqlEndpoint,
    ~headers=Obj.magic(headers),
    ~cache=Cache.InMemoryCache.make(),
    ~connectToDevTools=false,
    ~defaultOptions=DefaultOptions.make(
      ~mutate=DefaultMutateOptions.make(~awaitRefetchQueries=true, ()),
      (),
    ),
    (),
  )
}

