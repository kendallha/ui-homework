import { tableData } from './data/tableData';
import { filterAvailableDownloads } from './utils/filterAvailableDownloads';
import { getColumnNamesFromData } from './utils/getColumnNamesFromData';

export const useTableData = () => {
  const availableDownloads = filterAvailableDownloads(tableData);
  const columnNames = getColumnNamesFromData(tableData);
  return { availableDownloads, columnNames, data: tableData };
};
