import { Dollar } from '../../src/model/money'
import { Franc } from '../../src/model/franc'

describe('通貨の計算に関するテスト', () => {
  it('掛け算ができること', () => {
    const five = new Dollar(5)
    expect(new Dollar(10)).toEqual(five.times(2))
    expect(new Dollar(15)).toEqual(five.times(3))
  });

  it('別名参照されていないことを確認するテスト', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
  });

  it('異なる通貨の足し算に関するテスト', () => {
    const five = new Franc(5)
    expect(new Franc(10)).toEqual(five.times(2))
    expect(new Franc(15)).toEqual(five.times(3))
  });
});