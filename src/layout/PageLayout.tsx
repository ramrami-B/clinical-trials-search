import { styled } from "styled-components";
import { colors } from "../constants/colors";
import Header from "./Header";

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
