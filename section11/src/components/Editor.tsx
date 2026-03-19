import { useContext, useState } from "react";
import { TodoDispatchContxt, useTodoDispatch } from "../App";

interface Props {
  // onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
  // const dispatch = useContext(TodoDispatchContxt);
  const [text, setText] = useState("");
  const dispatch = useTodoDispatch();

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    // props.onClickAdd(text);
    dispatch.onClickAdd(text);

    setText("");
  };

  

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
