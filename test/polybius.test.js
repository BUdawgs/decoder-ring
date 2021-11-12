const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("Polybius Square", () => {

    it("should still output a string when encoding", () => {
        const expected = "string";
        const actual = typeof polybius("thinkful");
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("HELLO WORLD");
        expect(actual).to.equal(expected);
    });

    it("should translate the letters i and j to 42 when encoding", () => {
        const expected = "424222";
        const actual = polybius("jig");
        expect(actual).to.equal(expected);
    });

    it("should translate 42 to (i/j) when decoding", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when encoding", () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("hello world");
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when decoding", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    });
 });
