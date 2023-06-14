const { analyzeText, findSimilarity } = require("../functions");
const chai = require("chai");
var expect = chai.expect;

describe("Test /analyzeText", () => {
  describe("Check for empty input", () => {
    it("should give Invalid Input if input empty", () => {
      expect(() => analyzeText("")).to.throw("Invalid input.");
    });
  });
  describe("Check for empty input", () => {
    it("should give Error: Empty string if input is all whitespaces", () => {
      expect(() => analyzeText("  ")).to.throw("Empty string.");
    });
  });
});

describe("Test /similarity", () => {
  describe("Check for empty input", () => {
    it("should give Invalid Input if input empty", () => {
      expect(() => findSimilarity("", "Text 2.")).to.throw("Invalid input.");
    });
  });
  describe("Check for empty input", () => {
    it("should give Error: Empty string if input is all whitespaces", () => {
      expect(() => findSimilarity("Valid string input here", "   ")).to.throw(
        "Invalid input."
      );
    });
  });
});
