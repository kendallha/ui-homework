import { fireEvent, render, screen } from '@testing-library/react';
import Table from './Table';
import { tableData, availableDownloads, columnNames } from '../../mockData';

describe('Table', () => {
  beforeEach(() =>
    render(<Table availableDownloads={availableDownloads} columnNames={columnNames} tableData={tableData} />),
  );

  it('renders the Table component', () => {
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });

  it('should select all available rows when the checkbox is selected', () => {
    expect(screen.getByText(/none selected/i)).toBeInTheDocument();
    const selectAllCheckbox = screen.getByRole('checkbox', { name: /Select All Checkbox/i });
    fireEvent.click(selectAllCheckbox);
    expect(screen.getByText(/selected 2/i)).toBeInTheDocument();
  });

  it("should select an individual row when the row's checkbox is selected", () => {
    const checkbox = screen.getByRole('checkbox', { name: /netsh.exe/i });
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should select the "SelectAll" checkbox when all available rows are clicked individually', () => {
    const checkbox1 = screen.getByRole('checkbox', { name: /uxtheme.dll/i });
    const checkbox2 = screen.getByRole('checkbox', { name: /netsh.exe/i });
    const selectAllCheckbox = screen.getByRole('checkbox', { name: /Select All Checkbox/i });
    fireEvent.click(checkbox1);
    fireEvent.click(checkbox2);
    expect(selectAllCheckbox).toBeChecked();
  });

  it('should make the "SelectAll" checkbox indeterminate when an available row is deselected after all are selected', () => {
    const checkbox1 = screen.getByRole('checkbox', { name: /uxtheme.dll/i });
    const checkbox2 = screen.getByRole('checkbox', { name: /netsh.exe/i });
    const selectAllCheckbox = screen.getByRole('checkbox', { name: /Select All Checkbox/i });
    fireEvent.click(checkbox1);
    fireEvent.click(checkbox2);
    expect(selectAllCheckbox).toBeChecked();
    fireEvent.click(checkbox1);
    expect(selectAllCheckbox).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: /Select All Checkbox/i, indeterminate: true })).toBeInTheDocument();
  });

  it('should make the "SelectAll" checkbox unchecked when all available rows are individually unchecked', () => {
    const checkbox1 = screen.getByRole('checkbox', { name: /uxtheme.dll/i });
    const checkbox2 = screen.getByRole('checkbox', { name: /netsh.exe/i });
    const selectAllCheckbox = screen.getByRole('checkbox', { name: /Select All Checkbox/i });
    fireEvent.click(checkbox1);
    fireEvent.click(checkbox2);
    expect(selectAllCheckbox).toBeChecked();
    fireEvent.click(checkbox1);
    fireEvent.click(checkbox2);
    expect(selectAllCheckbox).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: /Select All Checkbox/i, indeterminate: false })).toBeInTheDocument();
  });
});
