export const getColumnNamesFromData = (data) => {
  const columnNames = [...new Set(data.flatMap(Object.keys))];
  return columnNames;
};
