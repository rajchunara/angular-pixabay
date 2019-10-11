import { compute } from "./compute";

describe('Compute', ()=>{
    it('should return 0 if we pass a -ve number',
    () =>{
      const result = compute(-1);
      expect(result).toBe(0);
    })
  })