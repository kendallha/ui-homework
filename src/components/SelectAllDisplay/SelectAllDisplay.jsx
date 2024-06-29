import PropTypes from 'prop-types';

const SelectAllDisplay = ({ selectedRows }) => {
  <>
    <input type="checkbox" />
    <p>{selectedRows.length} selected</p>
  </>;
};

export default SelectAllDisplay;

SelectAllDisplay.propTypes = {
  selectedRows: PropTypes.array,
};
