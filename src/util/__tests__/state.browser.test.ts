 import { isBrowser } from '../state';

 describe('state', () => {
   it('should return true if the enviroment is browser', () => {
     
     const browser = isBrowser()
 
     expect(browser).toBe(true)
   });
 });
 