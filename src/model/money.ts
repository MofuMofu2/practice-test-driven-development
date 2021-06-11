import { Dollar } from "../internal";
import { Franc } from "../internal";

export abstract class Money{
  protected amount: number
  protected currency: String
  constructor(amount: number) {
    this.amount = amount
  }
  abstract times(multiplier: number)
  currencyType() {
    return this.currency
  }
  equals(obj: Money) {
    const money = obj;
    return this.amount === money.amount
      && this.constructor.name === money.constructor.name;
  }
  static dollar(amount: number):Money {
    return new Dollar(amount)
  }
  static franc(amount: number):Money {
    return new Franc(amount)
  }
}