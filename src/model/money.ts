export class Dollar {
  private amount: number
  constructor(amount: number) {
    this.amount = amount
  }
  times(multiplier: number) {
    return new Dollar(this.amount * multiplier)
  }
  equals(obj: Dollar) {
    const dollar = obj;
    return this.amount === dollar.amount;
  }
}