import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';
import TableRow from './TableRow';
import { columnNames, tableData } from '../../mockData';

describe('TableRow', () => {
  it('should render data cells for a checkbox and each column', () => {
    const { getByRole } = render(
      // including these <table> and <tbody> wrappers to avoid testing console errors due to strict html structure reqs of table-related elements
      <table>
        <tbody>
          <TableRow columnNames={columnNames} rowEntry={tableData[0]} />
        </tbody>
      </table>,
    );
    expect(getByRole('cell', { name: /checkbox/i })).toBeInTheDocument();
    expect(getByRole('cell', { name: 'smss.exe' })).toBeInTheDocument();
    expect(getByRole('cell', { name: /mario/i })).toBeInTheDocument();
    expect(getByRole('cell', { name: /\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe/i })).toBeInTheDocument();
    expect(getByRole('cell', { name: /scheduled/i })).toBeInTheDocument();
  });

  it('should render a checkbox that is disabled if the status is not "available"', () => {
    const { getByRole } = render(
      <table>
        <tbody>
          <TableRow columnNames={columnNames} rowEntry={tableData[0]} />
        </tbody>
      </table>,
    );
    expect(getByRole('checkbox')).not.toBeEnabled();
  });

  it('should render a checkbox that is enabled if the status is "available"', () => {
    const { getByRole } = render(
      <table>
        <tbody>
          <TableRow columnNames={columnNames} rowEntry={tableData[1]} />
        </tbody>
      </table>,
    );
    expect(getByRole('checkbox')).toBeEnabled();
  });

  it('should call a click handler function if the checkbox is enabled and is clicked', () => {
    const handleSelectRow = vi.fn();
    const { getByRole } = render(
      <table>
        <tbody>
          <TableRow
            columnNames={columnNames}
            rowEntry={tableData[1]}
            handleSelectRow={handleSelectRow}
            isChecked={false}
          />
        </tbody>
      </table>,
    );
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeEnabled();
    fireEvent.click(checkbox);
    expect(handleSelectRow).toHaveBeenCalledWith(true, tableData[1]);
  });

  it('should call the click handler function if the checkbox is enabled and anywhere in the row is clicked', () => {
    const handleSelectRow = vi.fn();
    const { getByRole } = render(
      <table>
        <tbody>
          <TableRow
            columnNames={columnNames}
            rowEntry={tableData[1]}
            handleSelectRow={handleSelectRow}
            isChecked={false}
          />
        </tbody>
      </table>,
    );
    expect(getByRole('checkbox')).toBeEnabled();
    const row = getByRole('row');
    fireEvent.click(row);
    expect(handleSelectRow).toHaveBeenCalledWith(true, tableData[1]);
  });

  it('should not call the click handler function if the checkbox is disabled and anywhere in the row is clicked', () => {
    const handleSelectRow = vi.fn();
    const { getByRole } = render(
      <table>
        <tbody>
          <TableRow
            columnNames={columnNames}
            rowEntry={tableData[0]}
            handleSelectRow={handleSelectRow}
            isChecked={false}
          />
        </tbody>
      </table>,
    );
    expect(getByRole('checkbox')).not.toBeEnabled();
    const row = getByRole('row');
    fireEvent.click(row);
    expect(handleSelectRow).not.toHaveBeenCalled();
  });

  it('should render the checkbox as "checked" if the prop isChecked is true', () => {
    const { getByRole } = render(
      <table>
        <tbody>
          <TableRow columnNames={columnNames} rowEntry={tableData[0]} isChecked={true} />
        </tbody>
      </table>,
    );
    expect(getByRole('checkbox')).toBeChecked();
  });

  it('should not render the checkbox as "checked" if the prop isChecked is false', () => {
    const { getByRole } = render(
      <table>
        <tbody>
          <TableRow columnNames={columnNames} rowEntry={tableData[0]} isChecked={false} />
        </tbody>
      </table>,
    );
    expect(getByRole('checkbox')).not.toBeChecked();
  });
});
