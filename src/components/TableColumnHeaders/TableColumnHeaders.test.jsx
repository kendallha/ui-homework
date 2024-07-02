import { render } from '@testing-library/react';
import TableColumnHeaders from './TableColumnHeaders';
import { columnNames } from '../../mockData';

describe('TableColumnHeaders', () => {
  it('should render a table header row with the column names as headers', () => {
    const { getByRole } = render(
      // including this <table> wrapper to avoid testing console errors due to strict html structure reqs of table-related elements
      <table>
        <TableColumnHeaders columnNames={columnNames} />
      </table>,
    );
    expect(getByRole('columnheader', { name: /name/i })).toBeInTheDocument();
    expect(getByRole('columnheader', { name: /device/i })).toBeInTheDocument();
    expect(getByRole('columnheader', { name: /path/i })).toBeInTheDocument();
    expect(getByRole('columnheader', { name: /status/i })).toBeInTheDocument();
  });
});
