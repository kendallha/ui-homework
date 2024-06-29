import { useEffect } from 'react';
import PropTypes from 'prop-types';

const SelectAllDisplay = ({ handleSelectAll, selectedRows, tableData }) => {
  useEffect(() => {
    const checkbox = document.getElementById('select-all');
    if (selectedRows.length === 0) {
      checkbox.checked = false;
      checkbox.indeterminate = false;
    } else if (selectedRows.length === tableData.length) {
      checkbox.checked = true;
      checkbox.indeterminate = false;
    } else {
      checkbox.indeterminate = true;
    }
  }, [selectedRows, tableData]);

  const handleChange = (e) => {
    if (e.target.checked) {
      handleSelectAll(true);
    } else {
      handleSelectAll(false);
    }
  };
  return (
    <>
      <input id="select-all" type="checkbox" onChange={handleChange} />
      <p>{selectedRows.length} selected</p>
    </>
  );
};

export default SelectAllDisplay;

SelectAllDisplay.propTypes = {
  handleSelectAll: PropTypes.func,
  selectedRows: PropTypes.array,
  tableData: PropTypes.array,
};
