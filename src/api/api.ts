import {
  TestCentersResponse,
  TestCenterInformationResponse,
  TestCenterInformation,
} from '../interfaces/test-center';
import { request, convertToQueryString } from '../util/http';

export const getTestCenters = async (): Promise<TestCentersResponse> => {
  return await request<TestCentersResponse>(
    'https://test.api.vgregion.se/e-crm-scheduling-public/api/v1/testCenter',
    {
      headers: {
        client_id: 'c4d279f9b8094dbaafd0162c5a606623',
        client_secret: '39D6cAB5D89c448ea3355aAC61De19e7',
      },
    }
  );
};

export const getTestCenterInformation = async (
  filters?: Partial<TestCenterInformation>
): Promise<TestCenterInformationResponse> => {
  return await request<TestCenterInformationResponse>(
    `https://vgregion.entryscape.net/rowstore/dataset/70241cef-e111-4b07-bb55-99b5981f47de${convertToQueryString(
      filters
    )}`,
    {
      headers: {
        accept: 'application/json',
      },
    }
  );
};
