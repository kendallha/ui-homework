import { STATUS } from '../../constants';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.tr`
  border-top: 1px solid #ededed;
  font-size: 14px;
`;

const StyledColumnHeader = styled.th`
  font-weight: normal;
  padding: 1rem 3rem;
  padding-left: ${(props) => (props.$isStatus ? '3rem' : '1rem')};
  text-align: left;
  text-transform: capitalize;
`;

const TableColumnHeaders = ({ columnNames }) => {
  return (
    <thead>
      <StyledRow>
        <StyledColumnHeader aria-hidden="true" colSpan="1"></StyledColumnHeader>
        {columnNames.map((column) => (
          <StyledColumnHeader $isStatus={column === STATUS} scope="col" key={column}>
            {column}
          </StyledColumnHeader>
        ))}
      </StyledRow>
    </thead>
  );
};

export default TableColumnHeaders;

TableColumnHeaders.propTypes = {
  columnNames: PropTypes.array,
};
