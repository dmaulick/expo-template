import * as React from "react";

import { graphql } from 'relay-runtime';
import { useLazyLoadQuery, useMutation } from "react-relay";
import type {TodoListQuery as TodoListQueryType} from './__generated__/TodoListQuery.graphql';

import { Text } from './Themed';
import { TodoListMutation as TodoListMutationType } from "./__generated__/TodoListMutation.graphql";
import { useCallback, useMemo } from "react";


const TodoListQuery = graphql`
query TodoListQuery {
  todos {
    id
    text
    done
  }
}
`;

const TodoListMutation = graphql`
mutation TodoListMutation($input: NewTodo!) {
  createTodo(input: $input) {
    id
    text
    done
  }
}`;

export default function TodoList() {

  const data = useLazyLoadQuery<TodoListQueryType>(
    TodoListQuery,
    {},
  );

  const [commitMutation, isMutationInFlight] = useMutation<TodoListMutationType>(
    TodoListMutation
  );

  const onClick = useCallback(() => {
    commitMutation({
      variables: {
        input: {
          text: "text from the frontend",
          userId: "userId from the frontend"
        },
      },
    })
  }, [commitMutation]);

  console.log('data', data)

  return (
    <div className="TodoList">
        <Text>Test - Todo list</Text>
        <button
          onClick={onClick}
          disabled={isMutationInFlight}
        >
          Like
        </button>
        {isMutationInFlight && <Text>Loading...</Text>}
        {
          data.todos.map((todo) => {
            return (
              <div key={todo.id}>
                <Text>Todo text: {todo.text}</Text>
                <Text>{todo.done ? 'Done' : 'Not done'}</Text>
              </div>
            )
          })
        }
    </div>
  );
}
