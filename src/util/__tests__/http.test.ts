import axios from 'axios';
import { convertToQueryString, setCredentials } from '../http';

describe('http', () => {
  it('should convert an object to query string params', () => {
    const object = { foo: 'bar', bar: 1 };

    expect(convertToQueryString(object)).toEqual('?foo=bar&bar=1');
  });

  it('set credentials', () => {
    setCredentials('yolo123', 'foobar')

    expect(axios.defaults.headers.get['client_id']).toEqual('yolo123');
    expect(axios.defaults.headers.get['client_secret']).toEqual('foobar');
  });
});
