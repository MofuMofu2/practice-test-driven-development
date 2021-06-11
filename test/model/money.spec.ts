import { Dollar } from '../../src/model/dollar'
import { Franc } from '../../src/model/franc'
import { Money } from '../../src/model/money'

describe('通貨の計算に関するテスト', () => {
  it('掛け算ができること', () => {
    const five: Money = Money.dollar(5)
    expect(Money.dollar(10)).toEqual(five.times(2))
    expect(Money.dollar(15)).toEqual(five.times(3))
  });

  it('別名参照されていないことを確認するテスト', () => {
    expect(Money.dollar(5).equals(new Dollar(5))).toBe(true)
    expect(Money.dollar(5).equals(new Dollar(6))).toBe(false)
    expect(Money.franc(5).equals(new Franc(5))).toBe(true)
    expect(Money.franc(5).equals(new Franc(6))).toBe(false)
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false)
  });

  it('異なる通貨の足し算に関するテスト', () => {
    const five = Money.franc(5)
    expect(Money.franc(10)).toEqual(five.times(2))
    expect(Money.franc(15)).toEqual(five.times(3))
  });

  it('通貨を表現するクラスのテスト', () => {
    expect(Money.dollar(1).currency()).toBe('USD')
    expect(Money.franc(1).currency()).toBe('CHF')
  });
});