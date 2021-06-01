export class Money{
  amount: number
  constructor(amount: number) {
    this.amount = amount
  }
  equals(obj: Money) {
    const dollar = obj;
    return this.amount === dollar.amount;
  }
}