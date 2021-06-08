import axios, { AxiosRequestConfig } from 'axios';

export type server = 'mockingService' | 'qa' | 'production' | 'test';

export const servers = {
  mockingService: 'https://eu1.anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/7022b556-013d-4fc9-966c-298db3fc6a46/e-crm-scheduling-public/1.0.2/m',
  qa: 'https://qa.api.vgregion.se/e-crm-scheduling-public/api/v1',
  production: 'https://api.vgregion.se/e-crm-scheduling-public/api/v1',
  test: 'https://test.api.vgregion.se/e-crm-scheduling-public/api/v1  '
}

export const convertToQueryString = (params: any): string => {
  if (!params) {
    return '';
  }
  return `?${Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')}`;
};

export const getRequest = async <T>(
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
