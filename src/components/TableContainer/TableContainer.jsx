import Table from '../Table/Table';
import styled from 'styled-components';
import { tableData } from '../../data/tableData';

const StyledMain = styled.main`
  overflow-x: scroll;
`;

const TableContainer = () => (
  <StyledMain>
    <Table tableData={tableData} />
  </StyledMain>
);

export default TableContainer;
