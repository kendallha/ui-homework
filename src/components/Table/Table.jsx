import { useState } from 'react';
import TableHeaders from '../TableHeaders/TableHeaders';
import TableRow from '../TableRow/TableRow';
import SelectAllDisplay from '../SelectAllDisplay/SelectAllDisplay';
import DownloadButton from '../DownloadButton/DownloadButton';
import { tableData } from '../../data/tableData';
import { filterAvailableDownloads } from '../../utils/filterAvailableDownloads';
import styled from 'styled-components';

const StyledTableSection = styled.section`
  background: #ffffff;
  box-shadow: 2px 4px #e3e3e3;
  border: 1px solid #e3e3e3;
  width: fit-content;
`;

const StyledTableActions = styled.header`
  display: flex;
  padding: 1.5rem 1rem;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
`;

const Table = () => {
  const [selected, setSelected] = useState([]);
  const availableDownloads = filterAvailableDownloads(tableData);
  // TODO write function to get columns from data set
  const columns = ['name', 'device', 'path', 'status'];

  const handleSelectRow = (isSelected, entry) => {
    if (isSelected) {
      setSelected([...selected, entry]);
    } else {
      const newSelected = selected.filter((item) => item.name !== entry.name);
      setSelected(newSelected);
    }
  };

  const handleSelectAll = (isSelected) => {
    if (isSelected) {
      setSelected([...availableDownloads]);
    } else {
      setSelected([]);
    }
  };

  const handleDownloadClick = () => {
    const selectedInfo = selected
      .map((entry) => {
        return `\n\nPath: ${entry.path}\nDevice: ${entry.device} `;
      })
      .join('');

    alert(`Downloaded: ${selectedInfo}`);
  };

  return (
    <>
      <StyledTableSection>
        <StyledTableActions>
          <SelectAllDisplay
            handleSelectAll={handleSelectAll}
            availableDownloads={availableDownloads.length}
            totalSelectedRows={selected.length}
          />
          <DownloadButton handleDownloadClick={handleDownloadClick} selected={selected} />
        </StyledTableActions>
        <StyledTable>
          <TableHeaders columns={columns} />
          <tbody>
            {tableData.map((entry) => (
              <TableRow
                key={entry.name}
                columns={columns}
                handleSelectRow={handleSelectRow}
                rowEntry={entry}
                isChecked={selected.includes(entry)}
              />
            ))}
          </tbody>
        </StyledTable>
      </StyledTableSection>
    </>
  );
};

export default Table;
