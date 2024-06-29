import TableHeaders from '../TableHeaders/TableHeaders';
import TableRow from '../TableRow/TableRow';
import SelectAllDisplay from '../SelectAllDisplay/SelectAllDisplay';
import DownloadButton from '../DownloadButton/DownloadButton';
import { tableData } from '../../data/tableData';
import './Table.css';

const Table = () => {
  // TODO write function to get columns from data set
  const columns = ['name', 'device', 'path', 'status'];

  return (
    <>
      <div>
        <SelectAllDisplay selectedRows={tableData} />
        <DownloadButton />
      </div>
      <table>
        <TableHeaders columns={columns} />
        <tbody>
          {/* TODO Fix key to not be index  */}
          {tableData.map((entry, index) => (
            <TableRow key={index} columns={columns} rowEntry={entry} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
