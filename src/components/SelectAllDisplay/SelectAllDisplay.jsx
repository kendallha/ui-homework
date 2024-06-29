import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
    <>
      <input id="select-all" checked={isSelected} type="checkbox" onChange={handleChange} />
      <p>{totalSelectedRows} selected</p>
    </>
  );
};

export default SelectAllDisplay;

SelectAllDisplay.propTypes = {
  handleSelectAll: PropTypes.func,
  totalSelectedRows: PropTypes.number,
  availableDownloads: PropTypes.number,
};
