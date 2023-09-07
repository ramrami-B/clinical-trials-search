import { styled } from "styled-components";
import { IoSearchCircle } from "react-icons/io5";
import { colors } from "../constants/colors";

interface InputProps {
  handlerFocus: () => void;
  handlerChange: (target: string) => any;
  handlerPressKey: (target: string) => any;
  value: string;
}

const Input = ({
  handlerFocus,
  handlerChange,
  handlerPressKey,
  value,
}: InputProps) => {
  return (
    <InputWrap>
      <StyledInput
        placeholder="질환명을 입력해 주세요"
        onFocus={() => handlerFocus()}
        onBlur={() => handlerFocus()}
        onChange={(e) => handlerChange(e.target.value)}
        onKeyDown={(e) => handlerPressKey(e.key)}
        value={value}
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
  padding: 0 1rem;
  margin: 0.6rem 0;

  &:focus-within {
    border: 2px solid ${colors.primary};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 3.125rem;
  padding: 1rem 0.5rem 0.8em 0.5rem;
  border: none;
  font-size: 1.2rem;

  &:focus {
    outline: none;
    background-image: none;
  }

  &::placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: 6%;
    background-position: 0 center;
    background-repeat: no-repeat;
    text-indent: 6%;
  }
`;
