import RelatedSearch from "./RelatedSearch";
import Input from "./Input";
import useFocus from "../hooks/useFocus";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchBar = () => {
  const [isFocus, handlerFocus] = useFocus();
  const [focusIdx, setFocusIdx] = useState(-1);
  const [query, setQuery] = useState("");

  const terms = useDebounce(query, 500);

  const handlerChange = (target: string) => {
    setQuery(target);
  };

  const handlerKeyPress = (target: string) => {
    if (target === "ArrowDown") {
      setFocusIdx(focusIdx + 1);
    }
    if (target === "ArrowUp") {
      setFocusIdx(focusIdx - 1);
    }
    if (target === "Enter") {
      setQuery(terms[focusIdx].sickNm);
    }
  };

  return (
    <div>
      <Input
        handlerFocus={handlerFocus}
        handlerChange={handlerChange}
        handlerKeyPress={handlerKeyPress}
        value={query}
      />
      {isFocus && (
        <RelatedSearch query={query} terms={terms} focusIdx={focusIdx} />
      )}
    </div>
  );
};

export default SearchBar;
