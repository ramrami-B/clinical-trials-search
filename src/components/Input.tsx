import { styled } from "styled-components";
import { IoSearchCircle } from "react-icons/io5";
import { colors } from "../constants/colors";

interface InputProps {
  handlerFocus: () => void;
  handlerChange: (target: string) => any;
}

const Input = ({ handlerFocus, handlerChange }: InputProps) => {
  return (
    <InputWrap>
      <StyledInput
        placeholder="질환명을 입력해 주세요"
        onFocus={() => handlerFocus()}
        onBlur={() => handlerFocus()}
        onChange={(e) => handlerChange(e.target.value)}
      ></StyledInput>
      <IoSearchCircle color={colors.primary} size={80} />
    </InputWrap>
  );
};

export default Input;

const InputWrap = styled.label`
  display: flex;
  border-radius: 3.125rem;
  background: ${colors.white};
  padding: 0 1.2rem;
  margin: 0.6rem 0;

  &:focus-within {
    border: 2px solid ${colors.primary};
  }
`;

const StyledInput = styled.input`
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
    background-size: 8%;
    background-position: 0 center;
    background-repeat: no-repeat;
    text-indent: 8%;
  }
`;
