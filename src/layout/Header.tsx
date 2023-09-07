import { styled } from "styled-components";
import { colors } from "../constants/colors";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} style={{margin: '0 0.5rem 0 1.2rem'}}/>
      <h2>한국임상정보</h2>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4.3rem;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
`;
