import { Axios } from "../api/axios";
import RelatedSearch from "./RelatedSearch";
import Input from "./Input";
import useFocus from "../hooks/useFocus";
import { useEffect, useState } from "react";
import { localCache } from "../utils/localCaching";

const SearchBar = () => {
  const [isFocus, handlerFocus] = useFocus();
  const [terms, setTerms] = useState([]);
  const [query, setQuery] = useState("");

  const handlerChange = async (target: string) => {
    setQuery(target);
    let data = localCache.get(target);

    if (!data) {
      data = await Axios.search(target);
      localCache.set(target, data);
    }

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
