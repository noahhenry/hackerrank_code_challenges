/*
Read a string, 'S', and print its integer value; if 'S' cannot be converted to an integer, print "Bad String".

Note: You must use the String-to-Integer and exception handling constructs built into your submission language. If you attempt to use loops/conditional statements, you will get a '0' score.
*/

/*
 * You can use the following pseudocode:
 *
 * `S` = read string from stdin.
 * try {
 *     `N` = numeric value of `S`.
 *     
 *     If `N` is `NaN` or `undefined`, then some exception must be thrown,
 *     you can write the following withtout using conditional statement:
 *     <condition to return true when `N` is `NaN` or `undefined`> && an_undefined_function_call()
 *
 *     print `N`
 * } catch (err) {
 *     print `Bad String`.
 * }
 */

function main(s) {
  const S = s

  try {
    const N = parseInt(S)

    S != parseInt(S) && an_undefined_function_call()
    console.log(N)
  } catch (err) {
    console.log("Bad String")
  }
}

main("3")
main("za")
main("3134")
main("abc")

console.log("-----------------------")

// alt. refactored/solution...
function main2(string) {

  try {
    const number = parseInt(string)
    
    if (!number) throw new Error("Bad String")
    console.log(number)
  } catch (error) {
    console.log(error.message)
  }
  
}

main2("3")
main2("za")
main2("3134")
main2("abc")
