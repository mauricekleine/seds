import styled, { ThemeProvider } from "styled-components";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import theme from "../theme";

import "./styles.css";

const PageContainer = styled.main`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = ({ Component }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Navigation />

      <PageContainer>
        <Component />
      </PageContainer>

      <Footer />
    </Wrapper>
  </ThemeProvider>
);

export default App;
