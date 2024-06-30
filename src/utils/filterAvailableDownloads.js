import { AVAILABLE_STATUS } from '../constants';

export const filterAvailableDownloads = (array) => array.filter((item) => item.status === AVAILABLE_STATUS);
