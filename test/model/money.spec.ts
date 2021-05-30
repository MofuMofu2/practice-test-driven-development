import { Dollar } from '../../src/model/money'

describe('通貨の計算に関するテスト', () => {
  it('掛け算ができること', () => {
    const five = new Dollar(5)
    let product = five.times(2)
    expect(new Dollar(10)).toEqual(product)
    product = five.times(3)
    expect(new Dollar(15)).toEqual(product)
  });

  it('別名参照されていないことを確認するテスト', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
  });
});