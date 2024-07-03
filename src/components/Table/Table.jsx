import { useState } from 'react';
import DownloadButton from '../DownloadButton/DownloadButton';
import SelectAllDisplay from '../SelectAllDisplay/SelectAllDisplay';
import TableColumnHeaders from '../TableColumnHeaders/TableColumnHeaders';
import TableRow from '../TableRow/TableRow';
import { getDownloadMessageFromData } from '../../utils/getDownloadMessageFromData';
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

const StyledErrorMessage = styled.p`
  margin: 0.5rem;
  color: red;
`;

const Table = ({ availableDownloads, columnNames, tableData }) => {
  const [selected, setSelected] = useState([]);

  const handleDownloadClick = () => {
    const downloadMessage = getDownloadMessageFromData(selected);
    alert(`Confirm to download these files: ${downloadMessage}`);
    // after the "download" is complete, we want to deselect all selected items
    setSelected([]);
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
        {tableData.length ? (
          <StyledTableActions>
            <SelectAllDisplay
              handleSelectAll={handleSelectAll}
              numberAvailableDownloads={availableDownloads.length}
              numberSelectedRows={selected.length}
            />
            <DownloadButton handleDownloadClick={handleDownloadClick} isDisabled={!selected.length} />
          </StyledTableActions>
        ) : (
          <StyledErrorMessage>Oh no! We couldn&apos;t find any data to display.</StyledErrorMessage>
        )}
        <StyledTable>
          <TableColumnHeaders columnNames={columnNames} />
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
