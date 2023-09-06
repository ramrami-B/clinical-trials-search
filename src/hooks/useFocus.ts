import { useState } from "react";

const useFocus = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handlerFocus = () => {
    setIsFocus(!isFocus);
  };

  return [isFocus, handlerFocus] as const;
};

export default useFocus;
