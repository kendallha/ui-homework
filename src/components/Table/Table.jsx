import { useState } from 'react';
import DownloadButton from '../DownloadButton/DownloadButton';
import SelectAllDisplay from '../SelectAllDisplay/SelectAllDisplay';
import TableHeaders from '../TableHeaders/TableHeaders';
import TableRow from '../TableRow/TableRow';
import { filterAvailableDownloads } from '../../utils/filterAvailableDownloads';
import { getColumnsFromData } from '../../utils/getColumnsFromData';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Table = ({ tableData }) => {
  const [selected, setSelected] = useState([]);
  // TODO should I wrap these in useMemo? I would also need to memoize tableData for this to do anything
  const availableDownloads = filterAvailableDownloads(tableData);
  const columns = getColumnsFromData(tableData);

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
            numberAvailableDownloads={availableDownloads.length}
            numberSelectedRows={selected.length}
          />
          <DownloadButton handleDownloadClick={handleDownloadClick} isDisabled={!selected.length} />
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

Table.propTypes = {
  tableData: PropTypes.array,
};
