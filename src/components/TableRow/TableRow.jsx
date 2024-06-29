import PropTypes from 'prop-types';
import './TableRow.css';

const TableRow = ({ columns, rowEntry }) => {
  return (
    <tr>
      <input type="checkbox" />
      {columns.map((column) => (
        <td key={rowEntry.name}>{rowEntry[column]}</td>
      ))}
    </tr>
  );
};

export default TableRow;

TableRow.propTypes = {
  columns: PropTypes.array,
  rowEntry: PropTypes.object,
};
