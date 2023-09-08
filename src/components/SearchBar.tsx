import RelatedSearches from "./relatedsearch/RelatedSearches";
import Input from "./Input";
import useFocus from "../hooks/useFocus";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import processKeyboard from "../utils/processKeyboard";

const SearchBar = () => {
  const [isFocus, handlerFocus] = useFocus();
  const [focusIdx, setFocusIdx] = useState(-1);
  const [query, setQuery] = useState("");

  const { dataList, isLoading } = useDebounce(query, 500);

  const handlerChange = (target: string) => {
    setQuery(target);
  };

  const handlerPressKey = (target: string) => {
    processKeyboard(target, focusIdx, setFocusIdx, setQuery, dataList);
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
        <RelatedSearches
          query={query}
          dataList={dataList}
          focusIdx={focusIdx}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default SearchBar;
