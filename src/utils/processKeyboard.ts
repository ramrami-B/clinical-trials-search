import { DataType } from "../constants/@type/data";

const processKeyboard = (
  target: string,
  focusIdx: number,
  setFocusIdx: any,
  setValue: any,
  terms: DataType[]
) => {
  if (target === "ArrowDown") {
    setFocusIdx(focusIdx + 1);
  }
  if (target === "ArrowUp") {
    setFocusIdx(focusIdx - 1);
  }
  if (target === "Enter") {
    setValue(terms[focusIdx].sickNm);
  }
};

export default processKeyboard;
