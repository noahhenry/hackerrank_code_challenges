/*
You are given two classes, Person and Student, where Person is the base class and Student is the derived class.
Completed code for Person and a declaration for Student are provided for you in the editor.
Observe that Student inherits all the properties of Person.

Complete the Student class by writing the following:
  A Student class constructor, which has '4' parameters:
    A string, 'firstName'.
    A string, 'lastName'.
    An integer, 'id'.
    An integer array (or vector) of test scores, 'scores'.
  A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:
    Grading Scale
    Letter    Average
    O         90 <= a <= 100
    E         80 <= a < 90
    A         70 <= a < 80
    P         55 <= a < 80
    D         40 <= a < 55
    T         a < 40


*/

class Person {
  constructor(firstName, lastName, identification) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.idNumber = identification;
  }
  
  printPerson() {
      console.log(
          "Name: " + this.lastName + ", " + this.firstName 
          + "\nID: " + this.idNumber
      )
  }
}

class Student extends Person {
  /*	
  *   Class Constructor
  *   
  *   @param firstName - A string denoting the Person's first name.
  *   @param lastName - A string denoting the Person's last name.
  *   @param id - An integer denoting the Person's ID number.
  *   @param scores - An array of integers denoting the Person's test scores.
  */
  // Write your constructor here
  constructor(firstName, lastName, id, scores) {
    // initialize supper class --> Person
    super(firstName, lastName, id);
    // map parameters to properties...
    this.scores = scores
  }
  
  /*    
  *   Method Name: calculate
  *   @return A character denoting the grade.
  */
  // Write your method here
  calculate() {
      let averageScore = this.scores.reduce((a,b) => a + b, 0) / this.scores.length
      let gradeValue = ""

      if (averageScore >= 90) {
          return gradeValue = "O"
      } else if (averageScore >= 80) {
          return gradeValue = "E"
      } else if (averageScore >= 70) {
          return gradeValue = "A"
      } else if (averageScore >= 55) {
          return gradeValue = "P"
      } else if (averageScore >= 40) {
          return gradeValue = "D"
      } else {
          return gradeValue = "T"
      }
  }
      
}

function main() {
  let firstName = "Heraldo"
  let lastName = "Memelli"
  let id = "8135627"
  let testScores = [100, 80]

  let s = new Student(firstName, lastName, id, testScores)
  s.printPerson()
  s.calculate()
  console.log('Grade: ' + s.calculate())
}
main()