import { styled } from "styled-components";
import { colors } from "../constants/colors";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
        <Logo />
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 8%;
  background-color: ${colors.white};
`;