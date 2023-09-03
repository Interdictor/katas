const { PotterCashier } = require('../src/PotterCashier')
const expect = require('chai').expect

const BASE_BOOK_PRICE = 8
const DISCOUNT_FOR_TWO = 0.95
const DISCOUNT_FOR_THREE = 0.9
const DISCOUNT_FOR_FOUR = 0.8
const DISCOUNT_FOR_FIVE = 0.75

describe('PotterCashier', () => {
  it('calculates the price of an empty cart', () => {
    emptyCashier = new PotterCashier()

    result = emptyCashier.calculatePrice()

    expect(result).to.equal(0)
  })

  it('calculates the price of single book cart', () => {
    cashier = new PotterCashier()
    cashier.add('book_1')

    result = cashier.calculatePrice()

    expect(result).to.equal(8)
  })

  it('calculates the price of two equal books cart', () => {
    cashier = new PotterCashier()
    cashier.add('book_1')
    cashier.add('book_1')

    result = cashier.calculatePrice()

    expect(result).to.equal(16)
  })

  it('calculates the price of two different books cart', () => {
    cashier = new PotterCashier()
    cashier.add('book_1')
    cashier.add('book_2')

    result = cashier.calculatePrice()

    const expectedPrice = 2 * DISCOUNT_FOR_TWO * BASE_BOOK_PRICE
    expect(result).to.equal(expectedPrice)
  })

  it('calculates the price of two equal book groups', () => {
    cashier = new PotterCashier()
    cashier.add('book_1')
    cashier.add('book_2')
    cashier.add('book_1')
    cashier.add('book_2')

    result = cashier.calculatePrice()

    const expectedPrice = 4 * DISCOUNT_FOR_TWO * BASE_BOOK_PRICE
    expect(result).to.equal(expectedPrice)
  })

  it('calculates the price of three different books cart', () => {
    cashier = new PotterCashier()
    cashier.add('book_1')
    cashier.add('book_2')
    cashier.add('book_3')

    result = cashier.calculatePrice()

    const expectedPrice = 3 * DISCOUNT_FOR_THREE * BASE_BOOK_PRICE
    expect(result).to.equal(expectedPrice)
  })

  it('calculates the price of four different books cart', () => {
    cashier = new PotterCashier()
    cashier.add('book_1')
    cashier.add('book_2')
    cashier.add('book_3')
    cashier.add('book_4')

    result = cashier.calculatePrice()

    const expectedPrice = 4 * DISCOUNT_FOR_FOUR * BASE_BOOK_PRICE
    expect(result).to.equal(expectedPrice)
  })

  it('calculates the price of five different books cart', () => {
    cashier = new PotterCashier()
    cashier.add('book_1')
    cashier.add('book_2')
    cashier.add('book_3')
    cashier.add('book_4')
    cashier.add('book_5')

    result = cashier.calculatePrice()

    const expectedPrice = 5 * DISCOUNT_FOR_FIVE * BASE_BOOK_PRICE
    expect(result).to.equal(expectedPrice)
  })

  it('calculates the price of two groups with different books amount', () => {
    cashier = new PotterCashier()
    cashier.add('book_1')
    cashier.add('book_2')
    cashier.add('book_1')

    result = cashier.calculatePrice()

    const expectedPrice = 2 * DISCOUNT_FOR_TWO * BASE_BOOK_PRICE + BASE_BOOK_PRICE
    expect(result).to.equal(expectedPrice)
  })

  it('calculates the price of unordered books', () => {
    cashier = new PotterCashier()
    cashier.add('book_2')
    cashier.add('book_2')
    cashier.add('book_1')
    cashier.add('book_1')

    result = cashier.calculatePrice()

    const expectedPrice = 4 * DISCOUNT_FOR_TWO * BASE_BOOK_PRICE
    expect(result).to.equal(expectedPrice)
  })

  it('calculates optimal price for two groups of four books', () => {
    cashier = new PotterCashier()
    cashier.add('book_1')
    cashier.add('book_2')
    cashier.add('book_3')
    cashier.add('book_4')
    cashier.add('book_5')
    cashier.add('book_1')
    cashier.add('book_2')
    cashier.add('book_3')

    result = cashier.calculatePrice()

    const expectedPrice = 2 * DISCOUNT_FOR_FOUR * 4 * BASE_BOOK_PRICE
    expect(result).to.equal(expectedPrice)
  })
})
