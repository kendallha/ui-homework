export const filterAvailableDownloads = (array) => {
  const AVAILABLE_STATUS = 'available';
  return array.filter((item) => item.status === AVAILABLE_STATUS);
};
