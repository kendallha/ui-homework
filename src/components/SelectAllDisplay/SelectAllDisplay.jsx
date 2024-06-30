import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSelectAllSection = styled.div`
  display: flex;
  align-items: center;
  min-width: 20%;
`;

const StyledInput = styled.input`
  margin-right: 1rem;
  height: 1rem;
  width: 1rem;
  cursor: pointer;
  &:indeterminate + &:before {
    background: #0075ff;
  }
`;

const SelectAllDisplay = ({ handleSelectAll, availableDownloads, totalSelectedRows }) => {
  const [isSelected, setIsSelected] = useState(availableDownloads === totalSelectedRows);

  useEffect(() => {
    const checkbox = document.getElementById('select-all');
    if (totalSelectedRows === 0) {
      checkbox.indeterminate = false;
      setIsSelected(false);
    } else if (totalSelectedRows === availableDownloads) {
      checkbox.indeterminate = false;
      setIsSelected(true);
    } else {
      checkbox.indeterminate = true;
      setIsSelected(false);
    }
  }, [availableDownloads, totalSelectedRows]);

  const handleChange = (e) => {
    if (e.target.checked) {
      handleSelectAll(true);
    } else {
      handleSelectAll(false);
    }
  };
  return (
    <StyledSelectAllSection>
      <StyledInput id="select-all" checked={isSelected} type="checkbox" onChange={handleChange} />
      {totalSelectedRows ? <p>Selected {totalSelectedRows}</p> : <p>None Selected</p>}
    </StyledSelectAllSection>
  );
};

export default SelectAllDisplay;

SelectAllDisplay.propTypes = {
  handleSelectAll: PropTypes.func,
  totalSelectedRows: PropTypes.number,
  availableDownloads: PropTypes.number,
};
