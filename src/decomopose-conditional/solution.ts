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
   * Returns the amount of discount to our senior disabled fellas
   *
   */
  disabilityAmount(): number {
    if (this.isEligibleForDisability()) {
      return 0;
    }
    return this.seniority * 0.12;
  }

  isEligibleForDisability(): boolean {
    return this.seniority < 2 || this.monthsDisabled > 12 || this.isPartTime;
  }
}
