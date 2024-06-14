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
    let result: number;

    if (this.isDead) {
      result = this.deadAmount();
    } else {
      if (this.isSeparated) {
        result = this.separatedAmount();
      } else {
        if (this.isRetired) {
          result = this.retiredAmount();
        } else {
          result = this.normalPayAmount();
        }
      }
    }

    return result;
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
