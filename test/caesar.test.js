const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("Caesar Shift", () => {

    it("should return false if shift equal to 0", () => {
        const expected = false;
        const actual = caesar("random text", 0);
        expect(actual).to.equal(expected);
    });

    it("should return false if shift value is not given", () => {
        const expected = false;
        const actual = caesar("random text");
        expect(actual).to.equal(expected);
    });

    it("should return false if shift value is less than -25", () => {
        const expected = false;
        const actual = caesar("random text", -26);
        expect(actual).to.equal(expected);
    });

    it("should return false if shift value is greater than 25", () => {
        const expected = false;
        const actual = caesar("random text", 26);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and special symbols when encoding", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces and special symbols when decoding", () => {
        const expected = "this is a secret message!";
        const actual = caesar("bpqa qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    });

    it("should treat capital letters as lower case letters", () => {
        const upperCase = caesar("THINKFUL", 0);
        const lowerCase = caesar("thinkful", 0);
        expect(upperCase).to.equal(lowerCase);
    }); 

    it("should handle shifts that go past the end of the alphabet when encoding", () => {
        const expected = "mdcc";
        const actual = caesar("jazz", 3);
        expect(actual).to.equal(expected);
    });
 });