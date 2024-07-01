import { useState } from 'react';
import { tableData } from './data/tableData';
import { filterAvailableDownloads } from './utils/filterAvailableDownloads';
import { getColumnNamesFromData } from './utils/getColumnNamesFromData';

export const useTableData = () => {
  // Although in this case tableData won't change and therefore doesn't need to be stored in state
  // I am opting for this architecture to demonstrate what would make sense were the data to be returned from an api call in this hook
  // which is the more likely way this data would be provided
  const [data] = useState(tableData);

  const availableDownloads = filterAvailableDownloads(data);
  const columnNames = getColumnNamesFromData(data);
  return { availableDownloads, columnNames, data };
};
