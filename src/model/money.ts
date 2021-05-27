export class Dollar {
  amount: number
  constructor(amount: number) {
    this.amount = amount
  }
  public times(multiplier) {
    this.amount = this.amount * 2
  }
}