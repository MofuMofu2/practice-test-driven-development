import { Dollar } from "./dollar";

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
  static dollar(amount: number) {
    return new Dollar(amount)
  }
}