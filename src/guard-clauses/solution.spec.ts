import { InsuranceCalculator } from "./solution";

describe("InsuranceCalculator", () => {
  describe("getPayAmount", () => {
    let insurance: InsuranceCalculator;
    let deadMoney: number;
    let isDead: boolean;
    let separatedMoney: number;
    let isSeparated: boolean;
    let retiredMoney: number;
    let isRetired: boolean;
    let normalPayMoney: number;
    beforeEach(() => {
      normalPayMoney = 5;
      deadMoney = 10;
      isDead = false;
      separatedMoney = 20;
      isSeparated = false;
      retiredMoney = 30;
      isRetired = false;
    });

    it("should return dead amount", () => {
      isDead = true;

      insurance = new InsuranceCalculator(
        deadMoney,
        isDead,
        separatedMoney,
        isSeparated,
        retiredMoney,
        isRetired,
        normalPayMoney,
      );

      expect(insurance.getPayAmount()).toBe(deadMoney);
    });

    it("should return separated amount", () => {
      isSeparated = true;

      insurance = new InsuranceCalculator(
        deadMoney,
        isDead,
        separatedMoney,
        isSeparated,
        retiredMoney,
        isRetired,
        normalPayMoney,
      );

      expect(insurance.getPayAmount()).toBe(separatedMoney);
    });

    it("should return separated amount", () => {
      isRetired = true;

      insurance = new InsuranceCalculator(
        deadMoney,
        isDead,
        separatedMoney,
        isSeparated,
        retiredMoney,
        isRetired,
        normalPayMoney,
      );

      expect(insurance.getPayAmount()).toBe(retiredMoney);
    });

    it("should return normal money yo", () => {
      insurance = new InsuranceCalculator(
        deadMoney,
        isDead,
        separatedMoney,
        isSeparated,
        retiredMoney,
        isRetired,
        normalPayMoney,
      );

      expect(insurance.getPayAmount()).toBe(normalPayMoney);
    });
  });
});
