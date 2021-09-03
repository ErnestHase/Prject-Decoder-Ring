// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius()", () => {
	it("should encode correctly", () => {
    expect(polybius("thinkful")).to.equal("4432423352125413");
  });

  it("should decode correctly", () => {
    expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
  });

	it("should return false if number of characters (non-space) is odd", () => {
		expect(polybius("123", false)).to.equal(false);
	});

	it("should ignore non-alphabetic characters", () => {
		expect(polybius("hello?!?")).to.equal("3251131343");
	})

	it("should maintain spaces", () => {
    expect(polybius("hello world")).to.equal("3251131343 2543241341");
	});
	
	it("should ignore capital letters", () => {
		expect(polybius("sEcReT")).to.equal("345131245144");
	});

	it("should convert i or j to 42", () => {
		expect(polybius("Nick Scott")).to.equal("33423152 3431434444");
	});

	it("should convert 42 to (i/j)", () => {
		expect(polybius("33423152 3431434444", false)).to.equal("n(i/j)ck scott");
	});
});