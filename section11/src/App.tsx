import { useEffect, useReducer, useRef, useState } from "react";
import Editor from "./components/Editor";
import "./App.css";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";

function App() {
  // interface Todo {
  //   id : number;
  //   content : string;
  // }

  const idRef = useRef(0);

  type Action = {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      }
  } | {
      type : "DELETE";
      id : number;
  }

  function reducer(state : Todo[], action : Action) {
    switch(action.type){
      case  "CREATE" : {
        return [...state, action.data]
      }
      case "DELETE" : {
        return state.filter((it)=> it.id !== action.id)
      }
    }
  }

  // const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(reducer, []);

  const onClickAdd = (text: string) => {
    // setTodos([
    //   ...todos,
    //   {
    //     id: idRef.current++,
    //     content: text,
    //   },
    // ]);

    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    // setTodos(
    //   [...todos].filter((todo) => todo.id !== id),
    //   // todos.filter((todo)=> todo.id !== id)
    // );

    dispatch({
      type : "DELETE",
      id : id,
    });

  };

  // setText(123);

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>

      <Editor onClickAdd={onClickAdd} />
      <div>
        {todos.map((todo) => {
          return (
            <TodoItem key={todo.id} onClickDelete={onClickDelete} {...todo} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
