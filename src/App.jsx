import Table from './components/Table/Table';
import styled from 'styled-components';

const StyledApp = styled.main`
  display: flex;
  justify-content: center;
`;
function App() {
  return (
    <StyledApp>
      <Table />
    </StyledApp>
  );
}

export default App;
