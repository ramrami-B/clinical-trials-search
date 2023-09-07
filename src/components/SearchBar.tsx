import RelatedSearches from "./RelatedSearches";
import Input from "./Input";
import useFocus from "../hooks/useFocus";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import processKeyboard from "../utils/processKeyboard";

const SearchBar = () => {
  const [isFocus, handlerFocus] = useFocus();
  const [focusIdx, setFocusIdx] = useState(-1);
  const [query, setQuery] = useState("");

  const terms = useDebounce(query, 500);

  const handlerChange = (target: string) => {
    setQuery(target);
  };

  const handlerPressKey = (target: string) => {
    processKeyboard(target, focusIdx, setFocusIdx, setQuery, terms);
  };

  return (
    <div style={{ width: "100%" }}>
      <Input
        handlerFocus={handlerFocus}
        handlerChange={handlerChange}
        handlerPressKey={handlerPressKey}
        value={query}
      />
      {isFocus && (
        <RelatedSearches query={query} terms={terms} focusIdx={focusIdx} />
      )}
    </div>
  );
};

export default SearchBar;
