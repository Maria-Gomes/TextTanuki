const { analyzeText, findSimilarity } = require("../functions");
const chai = require("chai");
var expect = chai.expect;

describe("Test /analyzeText", () => {
  describe("Check for empty input", () => {
    it("should give Invalid Input if input empty", () => {
      const actualResult = analyzeText("");

      expect(actualResult).to.equal("Invalid Input");
    });
  });
  describe("Check for empty input", () => {
    it("should give Error: Empty string if input is all whitespaces", () => {
      const actualResult = analyzeText("   ");

      expect(actualResult).to.equal("Error: Empty string");
    });
  });
});
