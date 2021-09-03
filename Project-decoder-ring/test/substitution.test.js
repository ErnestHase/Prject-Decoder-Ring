// Write your tests here!
const {substitution} = require("../src/substitution")
const expect = require("chai").expect;

describe("substitution()", () => {
	const alpha = "xoyqmcgrukswaflnthdjpzibev";
	it("should encode correctly", () => {
		expect(substitution("thinkful", alpha)).to.equal("jrufscpw");
	});

	it("should decode correctly", () => {
		expect(substitution("jrufscpw", alpha, false)).to.equal("thinkful");
	});
	
	it("should maintain spaces throughout", () => {
		expect(substitution("you are an excellent spy", alpha)).to
			.equal("elp xhm xf mbymwwmfj dne");
	});

	it("should ignore capital letters", () => {
		expect(substitution("ThInKfUl", alpha)).to.equal("jrufscpw");
	});

	it("should be able to use symbols within the alphabet", () => {
		expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to
			.equal("y&ii$r&");
	});

	it("should return false if alphabet does not have 26 characters", () => {
		expect(substitution("thinkful", "short")).to.equal(false);
	});

	it("should return false if alphabet contains non-unique characters", () => {
		expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to
			.equal(false);
	});
});