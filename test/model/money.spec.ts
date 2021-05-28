import { Dollar } from '../../src/model/money'

describe('通貨の計算に関するテスト', () => {
  it('掛け算ができること', () => {
    const five = new Dollar(5)
    let product = five.times(2)
    expect(product.amount).toBe(10)
    product = five.times(3)
    expect(product.amount).toBe(15)
  });
});