import { DataType } from "../constants/@type/data";

const processKeyboard = (
  target: string,
  focusIdx: number,
  setFocusIdx: any,
  setValue: any,
  terms: DataType[]
) => {
  if (target && target === "ArrowDown") {
    setFocusIdx(focusIdx + 1);
  }
  if (target && target === "ArrowUp") {
    setFocusIdx(focusIdx - 1);
  }
  if (target && target === "Enter") {
    focusIdx > 0 && terms && setValue(terms[focusIdx].sickNm);
    setFocusIdx(-1);
  }
};

export default processKeyboard;
