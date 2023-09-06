import { styled } from "styled-components";
import { colors } from "../constants/colors";
import SearchItem from "./SearchItem";
import useDebounce from "../hooks/useDebounce";

interface RelatedSearchProps {
  query: string;
}

const RelatedSearch = ({ query }: RelatedSearchProps) => {
  const terms = useDebounce(query, 500);

  // TODO: localstorage에서 캐싱되어 있는 검색어들 불러오기
  return (
    <RelatedSearchWrap>
      {query && <SearchItem string={query} />}
      <p>추천 검색어</p>
      {terms &&
        terms.map((term, idx) => {
          return <SearchItem string={term.sickNm} key={idx} />;
        })}
    </RelatedSearchWrap>
  );
};
export default RelatedSearch;

const RelatedSearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.2rem;
  border-radius: 1.875rem;
  background: ${colors.white};
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);

  & > p {
    color: ${colors.gray};
    margin: 0;
  }
`;
