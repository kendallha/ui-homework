export const getColumnsFromData = (data) => {
  const columns = [...new Set(data.flatMap(Object.keys))];
  return columns;
};
