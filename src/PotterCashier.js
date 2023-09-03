class PotterCashier {
  BOOK_PRICE = 8
  DISCOUNTS = {
    0: 0,
    1: 1,
    2: 0.95,
    3: 0.9,
    4: 0.8,
    5: 0.75,
  }

  constructor() {
    this.books = []
  }

  add(book) {
    this.books.push(book)
  }

  calculatePrice() {
    const maxSetSizes = [4, 5]
    const results = []

    for (let size of maxSetSizes) {
      let total = 0
      const sets = this._calculateSetsOfBooks(size)

      sets.forEach((set) => {
        total += this._calculateSetPrice(set)
      })

      results.push(total)
    }

    return Math.min(...results)
  }

  _calculateSetPrice(set) {
    return this.BOOK_PRICE * set.size * this.DISCOUNTS[set.size]
  }

  _calculateSetsOfBooks(maxSetSize) {
    const sets_of_books = [new Set()]

    for (let book of this.books) {
      for (let set of sets_of_books) {
        if (!set.has(book) && set.size < maxSetSize) {
          set.add(book)
          break
        } else if (set === sets_of_books[sets_of_books.length - 1]) {
          const newSet = new Set()
          sets_of_books.push(newSet)
        }
      }
    }

    return sets_of_books
  }
}

module.exports = { PotterCashier };
