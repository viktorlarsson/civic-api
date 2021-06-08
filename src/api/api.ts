import axios from 'axios';
import {
  TestCentersResponse,
  TestCenterInformationResponse,
  TestCenterInformation,
} from '../interfaces/test-center';
import { getRequest, convertToQueryString, server, servers } from '../util/http';

export const getTestCenters = async (numberOfWeeks: number = 2, server: server = 'production', corsAnywhere = true): Promise<TestCentersResponse> => {

  if(!axios.defaults.headers.get['client_id']  && axios.defaults.headers.get['client_secret']) {
    throw new Error('No client id or secret set, run setCredentials first')
  }
  return await getRequest<TestCentersResponse>(
    `${servers[server]}/testCenter?numberOfWeeks=${numberOfWeeks}`,
    corsAnywhere
  );
};

export const getTestCenterInformation = async (
  filters?: Partial<TestCenterInformation>,
  corsAnywhere = true,
): Promise<TestCenterInformationResponse> => {
  return await getRequest<TestCenterInformationResponse>(
    `https://vgregion.entryscape.net/rowstore/dataset/70241cef-e111-4b07-bb55-99b5981f47de${convertToQueryString(
      filters
    )}`,
    corsAnywhere,
    {
      headers: {
        accept: 'application/json',
      },
    },
  );
};
