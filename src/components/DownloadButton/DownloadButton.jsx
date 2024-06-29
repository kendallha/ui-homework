import icon from '../../assets/download.svg';
import PropTypes from 'prop-types';

const DownloadButton = ({ handleDownloadClick, selected }) => {
  return (
    <>
      <button disabled={!selected.length} type="button" onClick={handleDownloadClick}>
        <img src={icon} alt="download-icon" />
      </button>
      <label>Download Selected</label>
    </>
  );
};

export default DownloadButton;

DownloadButton.propTypes = {
  handleDownloadClick: PropTypes.func,
  selected: PropTypes.array,
};
