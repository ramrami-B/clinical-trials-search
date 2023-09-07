import { styled } from "styled-components";
import { colors } from "../constants/colors";
import Header from "./Header";
import Image1 from "../assets/image1.svg";
import Image2 from "../assets/image2.svg";
import Image3 from "../assets/image3.svg";

const PageLayout = ({ children }: any) => {
  return (
    <Layout>
      <Header></Header>
      {children}
    </Layout>
  );
};

export default PageLayout;

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};
`;
