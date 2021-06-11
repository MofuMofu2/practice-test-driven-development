import { Money } from "../internal";

export class Franc extends Money {
  private currency: String
  constructor(amount: number) {
    super(amount)
    this.currency = 'CHF'
  }
  times(multiplier: number):Money {
    return new Franc(this.amount * multiplier)
  }
}