import { Discount } from "./initial";

describe("Payment", () => {
  describe("calculatePaymentCost", () => {
    let discount: Discount;
    let seniority: number;
    let monthsDisabled: number;
    let isPartTime: boolean;

    it("Should not give discount if citizen is not senior", () => {
      seniority = 1;
      monthsDisabled = 0;
      isPartTime = false;

      discount = new Discount(seniority, monthsDisabled, isPartTime);

      const seniorDiscount = discount.disabilityAmount();

      expect(seniorDiscount).toBe(0);
    });

    it("Should not give discount if citizen has been disabled for over a year", () => {
      seniority = 10;
      monthsDisabled = 20;
      isPartTime = false;

      discount = new Discount(seniority, monthsDisabled, isPartTime);

      const seniorDiscount = discount.disabilityAmount();

      expect(seniorDiscount).toBe(0);
    });

    it("Should not give discount if citizen only works part time", () => {
      seniority = 10;
      monthsDisabled = 0;
      isPartTime = true;

      discount = new Discount(seniority, monthsDisabled, isPartTime);

      const seniorDiscount = discount.disabilityAmount();

      expect(seniorDiscount).toBe(0);
    });

    it("Should give discount if eligible", () => {
      seniority = 10;
      monthsDisabled = 0;
      isPartTime = false;

      discount = new Discount(seniority, monthsDisabled, isPartTime);

      const seniorDiscount = discount.disabilityAmount();

      expect(seniorDiscount).toBe(0.12 * seniority);
    });
  });
});
