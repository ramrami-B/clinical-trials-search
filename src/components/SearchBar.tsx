import RelatedSearch from "./RelatedSearch";
import Input from "./Input";
import useFocus from "../hooks/useFocus";
import { useState } from "react";

const SearchBar = () => {
  const [isFocus, handlerFocus] = useFocus();
  const [query, setQuery] = useState("");

  const handlerChange = async (target: string) => {
    setQuery(target);
  };

  return (
    <div>
      <Input handlerFocus={handlerFocus} handlerChange={handlerChange} />
      {isFocus && <RelatedSearch query={query} />}
    </div>
  );
};

export default SearchBar;
