import { useEffect, useRef, useState } from 'react';
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

const SelectAllDisplay = ({ handleSelectAll, numberAvailableDownloads, numberSelectedRows }) => {
  const [isSelected, setIsSelected] = useState(numberAvailableDownloads === numberSelectedRows);
  const checkboxRef = useRef();

  useEffect(() => {
    if (numberSelectedRows === 0) {
      checkboxRef.current.indeterminate = false;
      setIsSelected(false);
    } else if (numberSelectedRows === numberAvailableDownloads) {
      checkboxRef.current.indeterminate = false;
      setIsSelected(true);
    } else {
      checkboxRef.current.indeterminate = true;
      setIsSelected(false);
    }
  }, [numberAvailableDownloads, numberSelectedRows]);

  const handleChange = (e) => {
    if (e.target.checked) {
      handleSelectAll(true);
    } else {
      handleSelectAll(false);
    }
  };

  return (
    <StyledSelectAllSection>
      <StyledInput
        aria-label="Select All Checkbox"
        checked={isSelected}
        id="selectAllCheckbox"
        onChange={handleChange}
        ref={checkboxRef}
        type="checkbox"
      />
      {numberSelectedRows ? <p>Selected {numberSelectedRows}</p> : <p>None Selected</p>}
    </StyledSelectAllSection>
  );
};

export default SelectAllDisplay;

SelectAllDisplay.propTypes = {
  handleSelectAll: PropTypes.func,
  numberAvailableDownloads: PropTypes.number,
  numberSelectedRows: PropTypes.number,
};
