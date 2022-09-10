// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Caml_option from "../node_modules/rescript/lib/es6/caml_option.js";
import * as ApolloClient from "../node_modules/rescript-apollo-client/src/ApolloClient.mjs";
import * as ApolloClient__Link_Ws from "../node_modules/rescript-apollo-client/src/@apollo/client/link/ws/ApolloClient__Link_Ws.mjs";
import * as ApolloClient__Utilities from "../node_modules/rescript-apollo-client/src/@apollo/client/utilities/ApolloClient__Utilities.mjs";
import * as ApolloClient__Core_ApolloClient from "../node_modules/rescript-apollo-client/src/@apollo/client/core/ApolloClient__Core_ApolloClient.mjs";
import * as ReasonMLCommunity__ApolloClient from "../node_modules/rescript-apollo-client/src/ReasonMLCommunity__ApolloClient.mjs";
import * as ApolloClient__Link_Http_HttpLink from "../node_modules/rescript-apollo-client/src/@apollo/client/link/http/ApolloClient__Link_Http_HttpLink.mjs";
import * as ApolloClient__SubscriptionsTransportWs from "../node_modules/rescript-apollo-client/src/subscriptions-transport-ws/ApolloClient__SubscriptionsTransportWs.mjs";
import * as ApolloClient__Cache_InMemory_InMemoryCache from "../node_modules/rescript-apollo-client/src/@apollo/client/cache/inmemory/ApolloClient__Cache_InMemory_InMemoryCache.mjs";

var graphqlEndpoint = "localhost:7000/v1/graphql";

var headers = {
  "x-hasura-admin-secret": "7eGbw04tevM2XHLsYNd7LEl2fnB3mp/BViBe+7dWV7w"
};

var httpLink = ApolloClient__Link_Http_HttpLink.make((function (param) {
        return "http://" + graphqlEndpoint;
      }), undefined, undefined, Caml_option.some(headers), undefined, undefined, undefined, undefined);

var wsLink = ApolloClient__Link_Ws.WebSocketLink.make("ws://" + graphqlEndpoint, ApolloClient__SubscriptionsTransportWs.ClientOptions.make({
          TAG: /* ConnectionParams */0,
          _0: {
            headers: headers
          }
        }, undefined, true, undefined, undefined, undefined, undefined, undefined), undefined, undefined);

var terminatingLink = ReasonMLCommunity__ApolloClient.Link.split((function (param) {
        var definition = ApolloClient__Utilities.getOperationDefinition(param.query);
        if (definition !== undefined && definition.kind === "OperationDefinition") {
          return definition.operation === "subscription";
        } else {
          return false;
        }
      }), wsLink, httpLink);

var client = ApolloClient.make(undefined, undefined, undefined, Caml_option.some(terminatingLink), ApolloClient__Cache_InMemory_InMemoryCache.make(undefined, undefined, undefined, undefined, undefined, undefined), undefined, true, false, undefined, ApolloClient__Core_ApolloClient.DefaultOptions.make(ApolloClient__Core_ApolloClient.DefaultMutateOptions.make(undefined, undefined, true, undefined, undefined, undefined), undefined, undefined, undefined), undefined, undefined, undefined, undefined, undefined, undefined, undefined);

export {
  graphqlEndpoint ,
  headers ,
  httpLink ,
  wsLink ,
  terminatingLink ,
  client ,
}
/* httpLink Not a pure module */