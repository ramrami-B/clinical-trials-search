import { styled } from "styled-components";
import { colors } from "../constants/colors";
import { AiOutlineSearch } from "react-icons/ai";

const RelatedSearch = () => {
  // TODO: localstorage에서 캐싱되어 있는 검색어들 불러오기

  // TODO: 검색중일때 검색중인 단어 표시, 밑에 추천 검색어 나오기
  return (
    <RelatedSearchWrap>
      <p>최근 검색어</p>
      {["코로나", "호흡기"].map((ele, idx) => {
        return (
          <SearchItemBox key={idx}>
            <AiOutlineSearch color={colors.gray} size={20}/>
            <p>{ele}</p>
          </SearchItemBox>
        );
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
  }
`;

const SearchItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
