/*
Given a Book class and a Solution class, write a MyBook class that does the following:
  Inherits from Book
  Has a parameterized constructor taking these '3' parameters:
    1. string 'title'
    2. string 'authro'
    3. int 'price'
  Implements the Book class' abstract display() method so it prints these '3' lines:
    1. 'Title:', a space, and then the current instance's 'title'.
    2. 'Author:', a space, and then the current instance's 'author'.
    3. 'Price:', a space, and then the current instance's 'price'.

Note: Because these classes are being written in the same file, you must not use an access modifier (e.g.: `public`) when declaring MyBook or your code will not execute.
*/

class Book {
  constructor(title, author) {
      if (this.constructor === Book) {
          throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
      }
      else {
          this.title = title;
          this.author = author;
      }
  }
  
  display() {
      console.log('Implement the \'display\' method!')
  }
}

// Declare your class here.
class MyBook extends Book {
  /**   
  *   Class Constructor
  *   
  *   @param title The book's title.
  *   @param author The book's author.
  *   @param price The book's price.
  **/
  // Write your constructor here
  constructor(title, author, price) {
      super(title, author)
      this.price = price
  }

  /**   
  *   Method Name: display
  *   
  *   Print the title, author, and price in the specified format.
  **/
  // Write your method here
  display() {
      console.log(`Title: ${this.title}`)
      console.log(`Author: ${this.author}`)
      console.log(`Price: ${this.price}`)
  }
}
// End class

function main() {
  let title = "The Alchemist"
  let author = "Paulo Coelho"
  let price = 248

  let book = new MyBook(title, author, price)
  book.display()
}
main()