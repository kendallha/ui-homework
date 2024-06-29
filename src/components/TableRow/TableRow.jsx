import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.tr`
  border-top: 1px solid #ededed;
`;
const StyledCell = styled.td`
  padding: 1em;
  padding-left: ${(props) => (props.isStatus ? '3em' : '1em')};
  text-transform: ${(props) => (props.isStatus ? 'capitalize' : 'none')};
`;

const StyledAvailableCell = styled(StyledCell)`
  display: flex;
  padding: 1em;
  text-transform: capitalize;
`;

const AvailableIcon = styled.div`
  background: #7dd335;
  height: 1em;
  width: 1em;
  border-radius: 50%;
  align-self: center;
  margin-right: 1em;
`;
const TableRow = ({ columns, handleSelectRow, rowEntry, isChecked }) => {
  const AVAILABLE_STATUS = 'available';
  const STATUS = 'status';

  const handleChange = (e) => {
    handleSelectRow(e.target.checked, rowEntry);
  };

  return (
    <StyledRow>
      <StyledCell>
        <input
          disabled={rowEntry.status !== AVAILABLE_STATUS}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
      </StyledCell>
      {columns.map((column) =>
        rowEntry[column] === AVAILABLE_STATUS ? (
          <StyledAvailableCell key={rowEntry[column]}>
            <AvailableIcon />
            {rowEntry[column]}
          </StyledAvailableCell>
        ) : (
          <StyledCell isStatus={column === STATUS} key={rowEntry[column]}>
            {rowEntry[column]}
          </StyledCell>
        ),
      )}
    </StyledRow>
  );
};

export default TableRow;

TableRow.propTypes = {
  columns: PropTypes.array,
  handleSelectRow: PropTypes.func,
  rowEntry: PropTypes.object,
  isChecked: PropTypes.bool,
};
