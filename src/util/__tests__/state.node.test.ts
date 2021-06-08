/**
 * @jest-environment node
 */
import { isBrowser } from '../state';

describe('state', () => {
  it('should return false if the enviroment is node', () => {
    const browser = isBrowser();

    expect(browser).toBe(false);
  });
});
