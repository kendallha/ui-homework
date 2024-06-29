import { useState } from 'react';
import TableHeaders from '../TableHeaders/TableHeaders';
import TableRow from '../TableRow/TableRow';
import SelectAllDisplay from '../SelectAllDisplay/SelectAllDisplay';
import DownloadButton from '../DownloadButton/DownloadButton';
import { tableData } from '../../data/tableData';
import './Table.css';

const Table = () => {
  const [selected, setSelected] = useState([]);
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
      setSelected([...tableData]);
    } else {
      setSelected([]);
    }
  };

  return (
    <>
      <div className="table-actions">
        <SelectAllDisplay handleSelectAll={handleSelectAll} selectedRows={selected} tableData={tableData} />
        <DownloadButton />
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
              selected={selected}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
