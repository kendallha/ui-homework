import { useState } from 'react';
import DownloadButton from '../DownloadButton/DownloadButton';
import SelectAllDisplay from '../SelectAllDisplay/SelectAllDisplay';
import TableHeaders from '../TableHeaders/TableHeaders';
import TableRow from '../TableRow/TableRow';
import PropTypes from 'prop-types';
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

const Table = ({ availableDownloads, columnNames, tableData }) => {
  const [selected, setSelected] = useState([]);

  const handleDownloadClick = () => {
    const selectedInfo = selected
      .map((entry) => {
        return `\n\nPath: ${entry.path}\nDevice: ${entry.device} `;
      })
      .join('');

    alert(`Confirm to download these files: ${selectedInfo}`);
  };

  const handleSelectAll = (isSelected) => {
    if (isSelected) {
      setSelected([...availableDownloads]);
    } else {
      setSelected([]);
    }
  };

  const handleSelectRow = (isSelected, entry) => {
    if (isSelected) {
      setSelected([...selected, entry]);
    } else {
      const newSelected = selected.filter((item) => item.name !== entry.name);
      setSelected(newSelected);
    }
  };

  return (
    <>
      <StyledTableSection>
        <StyledTableActions>
          <SelectAllDisplay
            handleSelectAll={handleSelectAll}
            numberAvailableDownloads={availableDownloads.length}
            numberSelectedRows={selected.length}
          />
          <DownloadButton handleDownloadClick={handleDownloadClick} isDisabled={!selected.length} />
        </StyledTableActions>
        <StyledTable>
          <TableHeaders columnNames={columnNames} />
          <tbody>
            {tableData.map((entry) => (
              <TableRow
                key={entry.name}
                columnNames={columnNames}
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

Table.propTypes = {
  availableDownloads: PropTypes.array,
  columnNames: PropTypes.array,
  tableData: PropTypes.array,
};
