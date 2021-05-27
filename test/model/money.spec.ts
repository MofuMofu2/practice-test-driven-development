import { Dollar } from '../../src/model/money'

describe('通貨の計算に関するテスト', () => {
  it('掛け算ができること', () => {
    const five = new Dollar(5)
    five.times(2)
    expect(five.amount).toBe(10)
  });
});