export abstract class InsuranceCalculator {
  constructor(
    protected readonly deadMoney: number,
    protected readonly isDead: boolean,
    protected readonly separatedMoney: number,
    protected readonly isSeparated: boolean,

    protected readonly retiredMoney: number,
    protected readonly isRetired: boolean,
    protected readonly normalPayMoney: number,
  ) {}

  abstract getPayAmount(): number;

}


export class DeadInsuranceCalculator extends InsuranceCalculator {

  getPayAmount(): number {
    return this.deadAmount();
  }


  deadAmount() {
    // assume we have more logic over here because this is only an example lol
    return this.deadMoney;
  }

}

export class RetiredInsuranceCalculator extends InsuranceCalculator {

  getPayAmount(): number {
    return this.retiredAmount();
  }


  retiredAmount() {
    return this.retiredMoney;
  }

}


export class SeparatedInsuranceCalculator extends InsuranceCalculator {

  getPayAmount(): number {
    return this.separatedAmount();
  }

  separatedAmount() {
    return this.separatedMoney;
  }

}


export class NormalInsuranceCalculator extends InsuranceCalculator {

  getPayAmount(): number {
    return this.normalPayAmount();
  }

  normalPayAmount() {
    return this.normalPayMoney;
  }

}