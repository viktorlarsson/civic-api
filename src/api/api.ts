import axios from 'axios';
import {
  TestCentersResponse,
  TestCenterInformationResponse,
  TestCenterInformation,
} from '../interfaces/test-center';
import { getRequest, convertToQueryString, server, servers } from '../util/http';

/**
 * Fetches test centers with vaccine slots
 * 
 * @param numberOfWeeks Number of weeks to fetch
 * @param server The server to use
 * 
 * @returns A list of test centers
 */
export const getTestCenters = async (numberOfWeeks: number = 2, server: server = 'production'): Promise<TestCentersResponse> => {

  if(!axios.defaults.headers.get['client_id']  && axios.defaults.headers.get['client_secret']) {
    throw new Error('No client id or secret set, run setCredentials first')
  }

  return await getRequest<TestCentersResponse>(
    `${servers[server]}/testCenter?numberOfWeeks=${numberOfWeeks}`
  );
};

/**
 * Fetches more information regarding test center
 * 
 * @param filters Filter out the test centers. Available filters:
 * 
 * postnummer, foretag, ykoord, id, namn, xkoord, adress, hsaid, postort
 * 
 * You can find more information here: https://vgregion.entryscape.net/rowstore/dataset/70241cef-e111-4b07-bb55-99b5981f47de/html
 * 
 * @param corsAnywhere  Fetches the server through a cors anywhere service
 * 
 * @returns A curated list of test center information
 */
export const getTestCenterInformation = async (
  filters?: Partial<TestCenterInformation>
): Promise<TestCenterInformationResponse> => {
  return await getRequest<TestCenterInformationResponse>(
    `https://vgregion.entryscape.net/rowstore/dataset/70241cef-e111-4b07-bb55-99b5981f47de${convertToQueryString(
      filters
    )}`,
    {
      headers: {
        accept: 'application/json',
      },
    },
  );
};
