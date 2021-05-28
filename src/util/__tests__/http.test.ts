import { convertToQueryString } from "../http"

describe('http', () => {
    it('should convert an object to query string params', () => {

        const object = { foo: 'bar', bar: 1 }

        expect(convertToQueryString(object)).toEqual('?foo=bar&bar=1')
    })
})