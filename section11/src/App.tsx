import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import Editor from "./components/Editor";
import "./App.css";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";
import _ from "lodash";

type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

export const TodoStateContext = createContext<Todo[] | null>(null);
export const TodoDispatchContxt = createContext<{
  onClickAdd : (text:string) => void;
  onClickDelete : (id:number) => void;
}| null>(null);

export function useTodoDispatch(){
   const dispatch = useContext(TodoDispatchContxt);
   if(!dispatch) throw new Error("TodoDispatchContxt 에 뭄제가 있다.");
  return dispatch;
}

function App() {
  const idRef = useRef(0);
  const [todos, dispatch] = useReducer(reducer, []);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>

      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContxt.Provider value={{onClickAdd, onClickDelete}}>

        <Editor />
        <div>
          {todos.map((todo) => {
            return (
              <TodoItem key={todo.id} {...todo} />
            );
          })}
        </div>
          </TodoDispatchContxt.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
