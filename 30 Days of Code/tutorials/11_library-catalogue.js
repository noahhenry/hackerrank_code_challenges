// HackerRank Tutorial Link: https://www.hackerrank.com/challenges/30-2d-arrays/tutorial
// ^ Done in Java

// Library Catalogue
// Base Class
class LibraryCatalogue {
  // Constructor
  constructor(collection = new Map(), lengthOfCheckoutPeriod, initialLateFee, feePerLateDay) {
    this._bookCollection = collection
    this._currentDay = 0
    this._lengthOfCheckoutPeriod = lengthOfCheckoutPeriod ? lengthOfCheckoutPeriod : 7
    this._initialLateFee = initialLateFee ? initialLateFee : 0.50
    this._feePerLateDay = feePerLateDay ? feePerLateDay : 1.00
  }

  // Getters
  getCurrentDay() {
    return this._currentDay
  }
  getBookCollection() {
    return this._bookCollection
  }
  getBook(bookTitle) {
    return this.getBookCollection().get(bookTitle)
  }
  getLengthOfCheckoutPeriod() {
    return this._lengthOfCheckoutPeriod
  }
  getInitialLateFee() {
    return this._initialLateFee
  }
  getFeePerLateDay() {
    return this._feePerLateDay
  }

  // Setters
  setNextDay() {
    this._currentDay++
  }
  setDay(day) {
    this._currentDay = day
  }

  // other INSTANCE METHODS -> note: static methods are class methods... in Java
  checkOutBook(bookTitle) {
    let book = this.getBook(bookTitle)
    if (book.getIsCheckedOut()) {
      this.sorryBookAlreadyCheckedOut(book)
    } else {
      book.setIsCheckedOut(true)
      book.setDayCheckedOut(this._currentDay)
      console.log(`You just checked out ${bookTitle}. It is due on day ${this.getCurrentDay() + this.getLengthOfCheckoutPeriod()}.`)
    }
  }

  returnBook(bookTitle) {
    let book = this.getBook(bookTitle)
    let daysLate = this._currentDay - (book.getDayCheckedOut() + this.getLengthOfCheckoutPeriod())
    if (daysLate > 0) {
      console.log(`You owe the Library \$${this.getInitialLateFee() + daysLate * this.getFeePerLateDay()} because your book is ${daysLate} days overdue.`)
    } else {
      console.log("Book Returned. Thank you.")
    }
    // no matter what book is returned to the system
    book.setIsCheckedOut(false)
    book.setDayCheckedOut(-1)
  }

  sorryBookAlreadyCheckedOut(book) {
    console.log(`Sorry, ${book.getTitle()} is already checked out. It should be back on day ${book.getDayCheckedOut() + this.getLengthOfCheckoutPeriod()}.`)
  }
}

// Extenshion Class
class Book extends LibraryCatalogue {
  // Constructor
  constructor(bookTitle, bookPageCount, bookISBN) {
    super()
    this._title = bookTitle
    this._pageCount = bookPageCount
    this._ISBN = bookISBN
    this._isCheckedOut = false
    this._dayCheckedOut = -1
  }

  // Getters -> INSTANCE METHODS
  getTitle() {
    return this._title
  }
  getPageCount() {
    return this._pageCount
  }
  getISBN() {
    return this._ISBN
  }
  getIsCheckedOut() {
    return this._isCheckedOut
  }
  getDayCheckedOut() {
    return this._dayCheckedOut
  }

  // Setters
  setIsCheckedOut(newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut
  }
  // 'static' makes private?
  setDayCheckedOut(day) {
    this._dayCheckedOut = day
  }
}

// main function IIFE
(function main() {
  // application logic here...
  bookCollection =  new Map()
  harry = new Book("Harry Potter", 1500, 99999)
  bookCollection.set("Harry Potter", harry)
  lib = new LibraryCatalogue(bookCollection)
  lib.checkOutBook("Harry Potter")
  lib.setNextDay()
  lib.setNextDay()
  lib.checkOutBook("Harry Potter")
  lib.setDay(17)
  lib.returnBook("Harry Potter")
  lib.checkOutBook("Harry Potter")
})()

console.log("-----------------------")
console.log(bookCollection)
console.log(LibraryCatalogue)
console.log(Book)