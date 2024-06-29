import { useState } from 'react';
import TableHeaders from '../TableHeaders/TableHeaders';
import TableRow from '../TableRow/TableRow';
import SelectAllDisplay from '../SelectAllDisplay/SelectAllDisplay';
import DownloadButton from '../DownloadButton/DownloadButton';
import { tableData } from '../../data/tableData';
import { filterAvailableDownloads } from '../../utils/filterAvailableDownloads';
import './Table.css';

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
    const selectedInfo = selected.map((entry) => {
      return `Path: ${entry.path} Device: ${entry.device}`;
    });
    // TODO Add custom Alert component
    alert(selectedInfo);
  };

  return (
    <>
      <div className="table-actions">
        <SelectAllDisplay
          handleSelectAll={handleSelectAll}
          availableDownloads={availableDownloads.length}
          totalSelectedRows={selected.length}
        />
        <DownloadButton handleDownloadClick={handleDownloadClick} selected={selected} />
      </div>
      <table>
        <TableHeaders columns={columns} />
        <tbody>
          {/* TODO Fix key to not be index  */}
          {tableData.map((entry, index) => (
            <TableRow
              key={index}
              columns={columns}
              handleSelectRow={handleSelectRow}
              rowEntry={entry}
              isChecked={selected.includes(entry)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
