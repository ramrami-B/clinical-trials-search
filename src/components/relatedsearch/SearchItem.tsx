import { styled } from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { colors } from "../../constants/colors";

interface SearchItemProps {
  string: string;
  isFocusing: boolean;
}

const SearchItem: React.FC<SearchItemProps> = ({ string, isFocusing }) => {
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
