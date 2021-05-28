import { getTestCenterInformation, getTestCenters } from "../api"

describe('api', () => {
    it('should fetch vaccine slots', async () => {
        const testCenter = await getTestCenters();
        expect(testCenter.testcenters.length).toBeGreaterThan(1);
    })
})

describe('api', () => {
    it('should fetch test centers', async () => {
        const testCenterInformation = await getTestCenterInformation();
        expect(testCenterInformation.results.length).toBeGreaterThan(1);
    })

    it('should fetch test information when providing hsaid', async () => {
        const testCenterInformation = await getTestCenterInformation({ hsaid: 'SE2321000131-E000000002615'});
        expect(testCenterInformation.resultCount).toEqual(1)
    })
})