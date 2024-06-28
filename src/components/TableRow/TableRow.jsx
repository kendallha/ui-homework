import PropTypes from 'prop-types';

const TableRow = ({ columns, rowEntry }) => {
  return (
    <tr>
      {columns.map((column) => (
        <td key={rowEntry.name}>{rowEntry[column.value]}</td>
      ))}
    </tr>
  );
};

export default TableRow;

TableRow.propTypes = {
  columns: PropTypes.array,
  rowEntry: PropTypes.object,
};
