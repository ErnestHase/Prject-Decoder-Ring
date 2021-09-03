// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar()", () => {
	it("should encode correctly", () => {
		expect(caesar("thinkful", 3)).to.equal("wklqnixo");
	});
  
	it("should decode correctly", () => {
		expect(caesar("wklqnixo", 3, false)).to.equal("thinkful");
	});
  
	it("should return false if shift is an invalid number", () => {
		expect(caesar("secret", undefined)).to.equal(false);
	});
  
	it("should ignore capital letters", () => {
		expect(caesar("SeCrEt", 5)).to.equal("xjhwjy");
	});
  
	it("should wrap around the alphabet", () => {
		expect(caesar("z", 3)).to.equal("c");
	});

	it("maintains spaces and other symbols", () => {
		expect(caesar("Hello World!", -14)).to.equal("tqxxa iadxp!");
	});
});