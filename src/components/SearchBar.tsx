import { useState } from "react";
import useFocus from "../hooks/useFocus";
import useDebounce from "../hooks/useDebounce";
import processKeyboard from "../utils/processKeyboard";
import RelatedSearches from "./relatedsearch/RelatedSearches";
import Input from "./Input";
import { DEBOUNCE_TIME } from "../constants/number";

const SearchBar = () => {
  const [isFocus, handlerFocus] = useFocus();
  const [focusIdx, setFocusIdx] = useState<number>(-1);
  const [query, setQuery] = useState<string>("");

  const { dataList, isLoading } = useDebounce(query, DEBOUNCE_TIME);

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
