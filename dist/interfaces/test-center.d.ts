export interface TestCenter {
    title: string;
    hsaid: string;
    municipality: number;
    urlBooking: string;
    urlContactCard: string;
    urlContactCardText: string;
    testtype: string;
    timeslots: number;
    updated: Date;
}
export interface TestCenterInformation {
    postnummer: string;
    foretag: string;
    ykoord: string;
    namn: string;
    id: string;
    xkoord: string;
    adress: string;
    hsaid: string;
    postort: string;
}
export interface TestCenterInformationResponse {
    resultCount: number;
    offset: number;
    limit: number;
    queryTime: number;
    results: TestCenterInformation[];
}
export interface TestCentersResponse {
    testcenters: TestCenter[];
    numberOfWeeks: number;
}
