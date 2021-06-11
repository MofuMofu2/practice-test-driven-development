import { Money } from "../internal";

export class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount)
    this.currency = 'CHF'
  }
  times(multiplier: number):Money {
    return new Franc(this.amount * multiplier, '')
  }
}