import { axiosClient } from "../api/axios";
import { useState } from "react";
import RelatedSearch from "./RelatedSearch";
import Input from "./Input";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //TODO: 검색 입력 할 때 api 호출
  const handlerChangeSearchTerms = (e: any) => {
    console.log(e.target.value);
    axiosClient.getTerms(e.target.value);
  };

  return (
    <div>
      <Input />
      {isOpen && <RelatedSearch />}
    </div>
  );
};

export default SearchBar;