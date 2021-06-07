import { Dollar } from "../internal";
import { Franc } from "../internal";

export abstract class Money{
  amount: number
  constructor(amount: number) {
    this.amount = amount
  }
  abstract times(multiplier: number)
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