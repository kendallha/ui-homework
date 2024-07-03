import GlobalStyle from './GlobalStyles';
import Table from './components/Table/Table';
import { useTableData } from './useTableData';
import styled from 'styled-components';

const StyledMain = styled.main`
  overflow-x: scroll;
`;

const App = () => {
  const { availableDownloads, columnNames, data } = useTableData();

  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <Table availableDownloads={availableDownloads} columnNames={columnNames} tableData={data} />
      </StyledMain>
    </>
  );
};

export default App;
