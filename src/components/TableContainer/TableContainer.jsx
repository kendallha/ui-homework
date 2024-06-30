import Table from '../Table/Table';
import { tableData } from '../../data/tableData';
import styled from 'styled-components';

const StyledMain = styled.main`
  overflow-x: scroll;
`;

const TableContainer = () => (
  <StyledMain>
    <Table tableData={tableData} />
  </StyledMain>
);

export default TableContainer;
