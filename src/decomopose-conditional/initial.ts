const SUMMER_START: Date = new Date();
SUMMER_START.setDate(4);
const SUMMER_END: Date = new Date();
SUMMER_END.setDate(6);

export class Discount {
  constructor(
    private readonly seniority: number,
    private readonly monthsDisabled: number,
    private readonly isPartTime: boolean,
  ) {}

  /**
   * Returns the amount of discount to our senior fellas
   *
   */
  disabilityAmount(): number {
    if (this.seniority < 2) {
      return 0;
    }
    if (this.monthsDisabled > 12) {
      return 0;
    }
    if (this.isPartTime) {
      return 0;
    }

    return this.seniority * 0.12;
  }
}
