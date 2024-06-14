import { DeadInsuranceCalculator, InsuranceCalculator, NormalInsuranceCalculator, RetiredInsuranceCalculator, SeparatedInsuranceCalculator } from "./solution";

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

      insurance = new DeadInsuranceCalculator(
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

    it("should return retired amount", () => {
      isSeparated = true;

      insurance = new RetiredInsuranceCalculator(
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

    it("should return separated amount", () => {
      isRetired = true;

      insurance = new SeparatedInsuranceCalculator(
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

    it("should return normal money yo", () => {
      insurance = new NormalInsuranceCalculator(
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
