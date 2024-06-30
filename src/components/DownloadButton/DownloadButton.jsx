import icon from '../../assets/download.svg';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDownloadButtonSection = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  margin-right: 5px;
`;

const StyledIcon = styled.img`
  cursor: ${(props) => (props.disabled ? 'inherit' : 'pointer')};
  filter: ${(props) => (props.disabled ? 'brightness(0.05) contrast(0.05);' : 'none')};
`;

const DownloadButton = ({ handleDownloadClick, selected }) => {
  return (
    <StyledDownloadButtonSection>
      <StyledButton disabled={!selected.length} type="button" onClick={handleDownloadClick}>
        <StyledIcon disabled={!selected.length} src={icon} alt="download-icon" />
      </StyledButton>
      <label>Download Selected</label>
    </StyledDownloadButtonSection>
  );
};

export default DownloadButton;

DownloadButton.propTypes = {
  handleDownloadClick: PropTypes.func,
  selected: PropTypes.array,
};
