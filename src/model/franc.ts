import { Money } from "../internal";

export class Franc extends Money {
  constructor(amount: number) {
    super(amount) 
  }
  currency() {
    return 'CHF'
  }
  times(multiplier: number):Money {
    return new Franc(this.amount * multiplier)
  }
}