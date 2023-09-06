import { styled } from "styled-components";
import { colors } from "../constants/colors";
import { IoSearchCircle } from "react-icons/io5";

const SearchBar = () => {
  const handlerClickSearch = () => {
    console.log("검색하기!");
  };

  //TODO: 검색 입력 할 때 api 호출
  return (
    <SearchBarWrap className="search-bar">
      <SearchBarInput placeholder="질환명을 입력해 주세요"></SearchBarInput>
      <IoSearchCircle
        color={colors.primary}
        size={80}
        onClick={handlerClickSearch}
      />
    </SearchBarWrap>
  );
};

export default SearchBar;

const SearchBarWrap = styled.label`
  width: 100%;
  display: flex;
  border-radius: 3.125rem;
  background: ${colors.white};
  padding: 0 1.2rem;
  margin: 0.6rem 0;

  &:focus-within {
    border: 2px solid ${colors.primary};
  }
`;

const SearchBarInput = styled.input`
  width: 100%;
  border-radius: 3.125rem;
  padding: 1.5rem 1.2rem 1.3rem 1.2rem;
  border: none;
  font-size: 1.5rem;

  &:focus {
    outline: none;
    background-image: none;
  }

  &::placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: 5%;
    background-position: 0 center;
    background-repeat: no-repeat;
    text-indent: 5%;
  }
`;
