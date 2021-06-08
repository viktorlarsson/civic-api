import { TestCentersResponse, TestCenterInformationResponse, TestCenterInformation } from '../interfaces/test-center';
import { server } from '../util/http';
/**
 * Fetches test centers with vaccine slots
 *
 * @param numberOfWeeks Number of weeks to fetch
 * @param server The server to use
 * @param corsAnywhere Fetches the server through a cors anywhere service
 *
 * @returns A list of test centers
 */
export declare const getTestCenters: (numberOfWeeks?: number, server?: server, corsAnywhere?: boolean) => Promise<TestCentersResponse>;
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
export declare const getTestCenterInformation: (filters?: Partial<TestCenterInformation> | undefined, corsAnywhere?: boolean) => Promise<TestCenterInformationResponse>;
