import { styled } from "styled-components";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
  return (
    <Container>
      <h1 style={{ width: "100%" }}>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h1>
      <SearchBar />
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  width: 50%;
  height: 100%;
  margin: auto;
  margin-top: 4.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
