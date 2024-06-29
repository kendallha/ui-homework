import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.tr`
  border-top: 1px solid #ededed;
`;

const StyledColumnHeader = styled.th`
  padding: 1em;
  padding-left: ${(props) => (props.isStatus ? '3em' : '1em')};
  text-align: left;
  text-transform: capitalize;
`;

const TableHeaders = ({ columns }) => {
  const STATUS = 'status';
  return (
    <thead>
      <StyledRow>
        <StyledColumnHeader colSpan="1"></StyledColumnHeader>
        {columns.map((column) => (
          <StyledColumnHeader isStatus={column === STATUS} scope="col" key={column}>
            {column}
          </StyledColumnHeader>
        ))}
      </StyledRow>
    </thead>
  );
};

export default TableHeaders;

TableHeaders.propTypes = {
  columns: PropTypes.array,
};
