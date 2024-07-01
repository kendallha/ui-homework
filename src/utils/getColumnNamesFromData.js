export const getColumnNamesFromData = (data) => {
  console.log('colFuncCall');
  const columnNames = [...new Set(data.flatMap(Object.keys))];
  return columnNames;
};
