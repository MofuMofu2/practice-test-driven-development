import { Money } from "../internal";

export class Dollar extends Money {
  private currency: String
  constructor(amount: number) {
    super(amount)
    this.currency = 'USD'
  }
  times(multiplier: number):Money {
    return new Dollar(this.amount * multiplier)
  }
}