import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import DownloadButton from './DownloadButton';
import { availableDownloads } from '../../mockData';

describe('DownloadButton', () => {
  it('should not be able to be clicked when disabled', () => {
    render(<DownloadButton isDisabled={true} />);
    const button = screen.getByRole('button');
    expect(button).not.toBeEnabled();
  });

  it('should trigger an alert when enabled and clicked', () => {
    const handleDownloadClick = vi.fn();
    render(<DownloadButton selectedData={availableDownloads} handleDownloadClick={handleDownloadClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleDownloadClick).toHaveBeenCalled();
  });
});
