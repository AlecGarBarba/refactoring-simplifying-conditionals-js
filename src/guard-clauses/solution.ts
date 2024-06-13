export class InsuranceCalculator {
  constructor(
    private readonly deadMoney: number,
    private readonly isDead: boolean,
    private readonly separatedMoney: number,
    private readonly isSeparated: boolean,

    private readonly retiredMoney: number,
    private readonly isRetired: boolean,
    private readonly normalPayMoney: number,
  ) {}

  getPayAmount(): number {
    if (this.isDead) {
      return this.deadAmount();
    }
    if (this.isSeparated) {
      return this.separatedAmount();
    }
    if (this.isRetired) {
      return this.retiredAmount();
    }

    return this.normalPayAmount();
  }

  deadAmount() {
    // assume we have more logic over here because this is only an example lol
    return this.deadMoney;
  }

  separatedAmount() {
    return this.separatedMoney;
  }

  retiredAmount() {
    return this.retiredMoney;
  }

  normalPayAmount() {
    return this.normalPayMoney;
  }
}
