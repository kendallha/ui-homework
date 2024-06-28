import TableHeaders from '../TableHeaders/TableHeaders';
import TableRow from '../TableRow/TableRow';
import { tableData } from '../../data/tableData';
import styled from 'styled-components';

const StyledTable = styled.table`
  border: solid 2px #dfdfdf;
  width: 90%;
  padding: 5px;
`;
const Table = () => {
  // TODO write function to get columns from data set
  const columns = [
    { header: 'Name', value: 'name' },
    { header: 'Device', value: 'device' },
    { header: 'Path', value: 'path' },
    { header: 'Status', value: 'status' },
  ];

  return (
    <StyledTable>
      <TableHeaders columns={columns} />
      <tbody>
        {/* TODO Fix key to not be index  */}
        {tableData.map((entry, index) => (
          <TableRow key={index} columns={columns} rowEntry={entry} />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
