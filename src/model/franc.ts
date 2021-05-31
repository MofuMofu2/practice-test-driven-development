export class Franc {
  private amount: number
  constructor(amount: number) {
    this.amount = amount
  }
  times(multiplier: number) {
    return new Franc(this.amount * multiplier)
  }
  equals(obj: Franc) {
    const Franc = obj;
    return this.amount === Franc.amount;
  }
}