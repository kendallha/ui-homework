import icon from '../../assets/download.svg';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDownloadButtonSection = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: ${(props) => (props.disabled ? 'inherit' : 'pointer')};
  display: flex;
  align-items: center;
  font-size: inherit;
  color: inherit;
  font-family: inherit;
  margin-right: 5px;
`;

const StyledButtonLabel = styled.span`
  align-content: center;
  height: 100%;
`;

const StyledIcon = styled.img`
  filter: ${(props) => (props.$disabled ? 'brightness(0.05) contrast(0.05);' : 'none')};
  margin-right: 5px;
`;

const DownloadButton = ({ handleDownloadClick, isDisabled }) => {
  return (
    <StyledDownloadButtonSection>
      <StyledButton aria-label="download" disabled={isDisabled} type="button" onClick={handleDownloadClick}>
        <StyledIcon $disabled={isDisabled} src={icon} alt="Download Icon" width="24" height="24" />
        <StyledButtonLabel>Download Selected</StyledButtonLabel>
      </StyledButton>
    </StyledDownloadButtonSection>
  );
};

export default DownloadButton;

DownloadButton.propTypes = {
  handleDownloadClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
