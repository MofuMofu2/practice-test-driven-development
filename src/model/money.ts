export class Money{
  amount: number
  constructor(amount: number) {
    this.amount = amount
  }
  equals(obj: Money) {
    const money = obj;
    return this.amount === money.amount
      && this.constructor.name === money.constructor.name;
  }
}