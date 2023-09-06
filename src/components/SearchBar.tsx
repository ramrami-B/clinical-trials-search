import { axiosClient } from "../api/axios";
import RelatedSearch from "./RelatedSearch";
import Input from "./Input";
import useFocus from "../hooks/useFocus";

const SearchBar = () => {
  const [isFocus, handlerFocus] = useFocus();

  //TODO: 검색 입력 할 때 api 호출
  const handlerChangeSearchTerms = (e: any) => {
    console.log(e.target.value);
    axiosClient.getTerms(e.target.value);
  };

  return (
    <div>
      <Input handlerFocus={handlerFocus} />
      {isFocus && <RelatedSearch />}
    </div>
  );
};

export default SearchBar;
