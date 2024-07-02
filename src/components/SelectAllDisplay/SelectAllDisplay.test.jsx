import { fireEvent, render, screen } from '@testing-library/react';
import SelectAllDisplay from './SelectAllDisplay';
import { vi } from 'vitest';

describe('SelectAllDisplay', () => {
  const handleSelectAll = vi.fn();

  it('renders an unchecked checkbox input and the correct message when no items are selected', () => {
    render(<SelectAllDisplay numberAvailableDownloads={2} numberSelectedRows={0} />);
    const checkbox = screen.getByLabelText(/select all checkbox/i);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(screen.getByText(/none selected/i)).toBeInTheDocument();
  });

  it('renders an indeterminate checkbox input and the correct message when some items are selected', () => {
    render(<SelectAllDisplay numberAvailableDownloads={2} numberSelectedRows={1} />);
    const indeterminateCheckbox = screen.getByRole('checkbox', { indeterminate: true });
    expect(indeterminateCheckbox).toBeInTheDocument();
    expect(screen.getByText(/selected 1/i)).toBeInTheDocument();
  });

  it('renders a checked checkbox input and the correct message when all items are selected', () => {
    render(<SelectAllDisplay numberAvailableDownloads={2} numberSelectedRows={2} />);
    const checkbox = screen.getByLabelText(/select all checkbox/i);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  it('selects all items when clicked when no items were previously selected', () => {
    render(<SelectAllDisplay numberAvailableDownloads={2} numberSelectedRows={0} handleSelectAll={handleSelectAll} />);
    const checkbox = screen.getByLabelText(/select all checkbox/i);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(handleSelectAll).toHaveBeenCalledWith(true);
  });

  it('deselects all items when clicked when all items were previously selected', () => {
    render(<SelectAllDisplay numberAvailableDownloads={2} numberSelectedRows={2} handleSelectAll={handleSelectAll} />);
    const checkbox = screen.getByLabelText(/select all checkbox/i);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(handleSelectAll).toHaveBeenCalledWith(false);
  });

  it('selects all items when clicked when some items were previously selected', () => {
    render(<SelectAllDisplay numberAvailableDownloads={2} numberSelectedRows={1} handleSelectAll={handleSelectAll} />);
    const indeterminateCheckbox = screen.getByRole('checkbox', { indeterminate: true });
    expect(indeterminateCheckbox).toBeInTheDocument();
    fireEvent.click(indeterminateCheckbox);
    expect(handleSelectAll).toHaveBeenCalledWith(true);
  });
});
