import { hello } from './hello';

//@flow
describe("hello", () => {
    it('hell("jest") to be "Hello Jest"', () => {
        expect(hello("jest")).toBe("Hello jest!!")
    })
    it('hell() not to be "Hello Jest"', ()=>{
        expect(hello()).not.toBe("Hello!!")
    });
})
