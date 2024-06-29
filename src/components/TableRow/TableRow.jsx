import PropTypes from 'prop-types';
import './TableRow.css';

const TableRow = ({ columns, handleSelectRow, rowEntry, isChecked }) => {
  const AVAILABLE_STATUS = 'available';

  const handleChange = (e) => {
    handleSelectRow(e.target.checked, rowEntry);
  };

  return (
    <tr>
      <input
        disabled={rowEntry.status !== AVAILABLE_STATUS}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
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
  isChecked: PropTypes.bool,
};
