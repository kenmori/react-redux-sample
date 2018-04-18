import { hello } from './hello';

//@flow

describe("hello", () => {

    it('hell("jest") to be "Hello Jest"', () => {
        expect(hello("jest")).toBe("Hello jest!!")
    })
    it('hell("jest") not to be "Hello Jest"', ()=>{
        expect(hello("jest")).not.toBe("Hello jest !!")
    });
})
