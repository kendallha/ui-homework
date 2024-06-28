import PropTypes from 'prop-types';

const TableHeaders = ({ columns }) => {
  return (
    <thead>
      {columns.map((column) => (
        <th key={column.value}>{column.header}</th>
      ))}
    </thead>
  );
};

export default TableHeaders;

TableHeaders.propTypes = {
  columns: PropTypes.array,
};
