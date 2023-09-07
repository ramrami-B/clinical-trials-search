import { styled } from "styled-components";
import { colors } from "../constants/colors";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchItemProps {
  string: string;
  isFocusing: boolean;
}

const SearchItem = ({ string, isFocusing }: SearchItemProps) => {
  return (
    <SearchItemBox
      style={{
        backgroundColor: isFocusing ? colors.lightgray : "transparent",
      }}
    >
      <AiOutlineSearch color={colors.gray} size={20} />
      <p>{string}</p>
    </SearchItemBox>
  );
};

export default SearchItem;

const SearchItemBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  & > p {
    margin: 0.5rem;
  }
`;
