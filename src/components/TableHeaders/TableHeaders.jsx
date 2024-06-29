import PropTypes from 'prop-types';
import './TableHeaders.css';

const TableHeaders = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th scope="col" key={index}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeaders;

TableHeaders.propTypes = {
  columns: PropTypes.array,
};
