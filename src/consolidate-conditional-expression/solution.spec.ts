import { Payment } from "./solution";

describe("Payment", () => {
  describe("calculatePaymentCost", () => {
    let payment: Payment;

    it("Should provide a summer rate", () => {
      const summerDate = new Date();

      summerDate.setDate(5);

      const summerRate = 1;
      const winterRate = 2;

      const winterServiceCharge = 1.5;

      payment = new Payment(
        summerDate,
        summerRate,
        winterRate,
        winterServiceCharge,
      );

      const cost = payment.calculatePaymentCost(1);

      // at a 1 summer rate, result should be 1;

      expect(cost).toBe(1)
    });

    it("Should provide a winter rate in non summer time", () => {
      const summerDate = new Date();

      summerDate.setDate(12); // december

      const summerRate = 1;
      const winterRate = 2;

      const winterServiceCharge = 1.5;

      payment = new Payment(
        summerDate,
        summerRate,
        winterRate,
        winterServiceCharge,
      );

      const cost = payment.calculatePaymentCost(1);

      // at a 2 * 1.5 

      expect(cost).toBe(3)
    });
  });
});
