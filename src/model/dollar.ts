import { Money } from "../internal";

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount)
  }
  currency() {
    return 'USD'
  }
  times(multiplier: number):Money {
    return new Dollar(this.amount * multiplier)
  }
}