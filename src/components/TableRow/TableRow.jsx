import { AVAILABLE_STATUS, STATUS } from '../../constants';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.tr`
  border-top: 1px solid #e6e6e6;
  background: ${(props) => (props.$isChecked ? '#EEEEEE' : 'inherit')};
  font-size: 12px;
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;
const StyledCell = styled.td`
  padding: 0.7rem 3rem;
  padding-left: ${(props) => (props.$isStatus ? '3rem' : '1rem')};
  text-transform: ${(props) => (props.$isStatus ? 'capitalize' : 'none')};
`;

const StyledAvailableCell = styled(StyledCell)`
  display: flex;
  text-transform: capitalize;
`;

const AvailableIcon = styled.div`
  background: #7dd335;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  align-self: center;
  margin-right: 1rem;
`;

const StyledInput = styled.input`
  cursor: pointer;
  height: 1rem;
  width: 1rem;
`;

const TableRow = ({ columnNames, handleSelectRow, rowEntry, isChecked }) => {
  const handleRowClick = () => {
    if (rowEntry.status === AVAILABLE_STATUS) {
      handleSelectRow(!isChecked, rowEntry);
    }
  };

  return (
    <StyledRow $isChecked={isChecked} onClick={handleRowClick}>
      <StyledCell>
        <StyledInput
          aria-label={`${rowEntry.name} Checkbox`}
          checked={isChecked}
          disabled={rowEntry.status !== AVAILABLE_STATUS}
          id={`${rowEntry.name}Checkbox`}
          onChange={handleRowClick}
          type="checkbox"
        />
      </StyledCell>
      {columnNames.map((column) =>
        rowEntry[column] === AVAILABLE_STATUS ? (
          <StyledAvailableCell key={rowEntry[column]}>
            <AvailableIcon aria-hidden="true" />
            {rowEntry[column]}
          </StyledAvailableCell>
        ) : (
          <StyledCell $isStatus={column === STATUS} key={rowEntry[column]}>
            {rowEntry[column]}
          </StyledCell>
        ),
      )}
    </StyledRow>
  );
};

export default TableRow;

TableRow.propTypes = {
  columnNames: PropTypes.array,
  handleSelectRow: PropTypes.func,
  rowEntry: PropTypes.object,
  isChecked: PropTypes.bool,
};
