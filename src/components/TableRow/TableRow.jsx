import PropTypes from 'prop-types';
import './TableRow.css';

const TableRow = ({ columns, handleSelectRow, rowEntry, selected }) => {
  const handleChange = (e) => {
    handleSelectRow(e.target.checked, rowEntry);
  };

  return (
    <tr>
      <input type="checkbox" checked={selected.includes(rowEntry)} onChange={handleChange} />
      {columns.map((column) => (
        <td key={rowEntry.name}>{rowEntry[column]}</td>
      ))}
    </tr>
  );
};

export default TableRow;

TableRow.propTypes = {
  columns: PropTypes.array,
  handleSelectRow: PropTypes.func,
  rowEntry: PropTypes.object,
  selected: PropTypes.array,
};
