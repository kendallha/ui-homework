import Table from './components/Table/Table';
import GlobalStyle from './GlobalStyles';
import styled from 'styled-components';
// import './App.css';

const StyledMain = styled.main`
  overflow-x: scroll;
`;

const App = () => (
  <>
    <GlobalStyle />
    <StyledMain>
      <Table />
    </StyledMain>
  </>
);

export default App;
