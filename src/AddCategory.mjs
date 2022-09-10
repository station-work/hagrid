// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "../node_modules/rescript/lib/es6/curry.js";
import * as React from "react";
import * as Js_array from "../node_modules/rescript/lib/es6/js_array.js";
import * as Client from "@apollo/client";
import * as ApolloClient__React_Hooks_UseMutation from "../node_modules/rescript-apollo-client/src/@apollo/client/react/hooks/ApolloClient__React_Hooks_UseMutation.mjs";

var Raw = {};

var query = Client.gql(["mutation AddCategory($name: String!)  {\ninsert_hagrid_category(objects: [{name: $name}])  {\n__typename  \nreturning  {\n__typename  \nid  \nname  \n}\n\n}\n\n}\n"]);

function parse(value) {
  var value$1 = value.insert_hagrid_category;
  var tmp;
  if (value$1 == null) {
    tmp = undefined;
  } else {
    var value$2 = value$1.returning;
    tmp = {
      __typename: value$1.__typename,
      returning: Js_array.map((function (value) {
              return {
                      __typename: value.__typename,
                      id: value.id,
                      name: value.name
                    };
            }), value$2)
    };
  }
  return {
          insert_hagrid_category: tmp
        };
}

function serialize(value) {
  var value$1 = value.insert_hagrid_category;
  var insert_hagrid_category;
  if (value$1 !== undefined) {
    var value$2 = value$1.returning;
    var returning = Js_array.map((function (value) {
            var value$1 = value.name;
            var value$2 = value.id;
            var value$3 = value.__typename;
            return {
                    __typename: value$3,
                    id: value$2,
                    name: value$1
                  };
          }), value$2);
    var value$3 = value$1.__typename;
    insert_hagrid_category = {
      __typename: value$3,
      returning: returning
    };
  } else {
    insert_hagrid_category = null;
  }
  return {
          insert_hagrid_category: insert_hagrid_category
        };
}

function serializeVariables(inp) {
  return {
          name: inp.name
        };
}

function makeVariables(name, param) {
  return {
          name: name
        };
}

var AddCategory_inner = {
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables
};

var include = ApolloClient__React_Hooks_UseMutation.Extend({
      query: query,
      Raw: Raw,
      parse: parse,
      serialize: serialize,
      serializeVariables: serializeVariables
    });

var use = include.use;

var AddCategory_useWithVariables = include.useWithVariables;

var AddCategory = {
  AddCategory_inner: AddCategory_inner,
  Raw: Raw,
  query: query,
  parse: parse,
  serialize: serialize,
  serializeVariables: serializeVariables,
  makeVariables: makeVariables,
  use: use,
  useWithVariables: AddCategory_useWithVariables
};

var $$Window = {};

function AddCategory$1(Props) {
  var initialState = "";
  var match = Curry.app(use, [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      ]);
  var addCategory = match[0];
  var match$1 = React.useState(function () {
        return initialState;
      });
  var setName = match$1[1];
  var name = match$1[0];
  var onChange = function (evt) {
    evt.preventDefault();
    var value = evt.target.value;
    Curry._1(setName, (function (_prev) {
            return value;
          }));
  };
  return React.createElement("form", {
              onSubmit: (function ($$event) {
                  $$event.preventDefault();
                  if (name === "") {
                    window.alert("empty name");
                    return ;
                  }
                  Curry._8(addCategory, undefined, undefined, undefined, undefined, undefined, undefined, undefined, {
                        name: name
                      });
                  Curry._1(setName, (function (_prev) {
                          return initialState;
                        }));
                })
            }, React.createElement("h4", undefined, "Add new Category"), React.createElement("input", {
                  value: name,
                  onChange: onChange
                }), React.createElement("button", undefined, "Add"));
}

var make = AddCategory$1;

export {
  AddCategory ,
  $$Window ,
  make ,
}
/* query Not a pure module */
