import { Axios } from "../api/axios";
import RelatedSearch from "./RelatedSearch";
import Input from "./Input";
import useFocus from "../hooks/useFocus";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [isFocus, handlerFocus] = useFocus();
  const [terms, setTerms] = useState([]);
  const [query, setQuery] = useState("");

  const handlerChange = async (target: string) => {
    const data = await Axios.search(target);
    setQuery(target);
    setTerms(data);
  };

  return (
    <div>
      <Input handlerFocus={handlerFocus} handlerChange={handlerChange} />
      {isFocus && <RelatedSearch query={query} terms={terms} />}
    </div>
  );
};

export default SearchBar;
