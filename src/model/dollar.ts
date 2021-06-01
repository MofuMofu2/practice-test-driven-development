import { Money } from "./money";

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount)
  }
  times(multiplier: number) {
    return new Dollar(this.amount * multiplier)
  }
  equals(obj: Dollar) {
    const dollar = obj;
    return this.amount === dollar.amount;
  }
}