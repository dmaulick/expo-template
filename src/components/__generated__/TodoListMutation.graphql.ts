/**
 * @generated SignedSource<<123fd176602843bb875bb5ab98ba2bf4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type NewTodo = {
  text: string;
  userId: string;
};
export type TodoListMutation$variables = {
  input: NewTodo;
};
export type TodoListMutation$data = {
  readonly createTodo: {
    readonly done: boolean;
    readonly id: string;
    readonly text: string;
  };
};
export type TodoListMutation = {
  response: TodoListMutation$data;
  variables: TodoListMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "createTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "done",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ffc552649fd51d48e86c4263ffdff97e",
    "id": null,
    "metadata": {},
    "name": "TodoListMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListMutation(\n  $input: NewTodo!\n) {\n  createTodo(input: $input) {\n    id\n    text\n    done\n  }\n}\n"
  }
};
})();

(node as any).hash = "e608d6e75adcb8b67ee54f2b62f1b262";

export default node;
