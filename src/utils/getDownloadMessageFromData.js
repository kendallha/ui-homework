export const getDownloadMessageFromData = (data) => {
  return data
    .map((entry) => {
      return `\n\nPath: ${entry.path}\nDevice: ${entry.device} `;
    })
    .join('');
};
