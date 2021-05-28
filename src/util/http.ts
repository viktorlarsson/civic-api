import axios, { AxiosRequestConfig } from 'axios';

export const convertToQueryString = (params: any): string => {
  if (!params) {
    return '';
  }
  return `?${Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')}`;
};

export const request = async <T>(
  url: string,
  options: AxiosRequestConfig,
  corsAnywhere: boolean = true
): Promise<T> => {
  const response = await axios.get<T>(
    `${corsAnywhere && 'https://cors-anywhere.rost.me/'}${url}`,
    options
  );

  return response.data;
};
