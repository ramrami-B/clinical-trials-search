const PageLayout = ({ children }: any) => {
  return (
    <Layout>
      <Header></Header>
      {children}
    </Layout>
  );
};

export default PageLayout;
