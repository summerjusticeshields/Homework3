//1.

const num1 = Number(prompt('Enter a number between 1-100:'))
if (Number.isInteger(num1)) {
  console.log(`Thank you! You entered ${num1}, a valid number`)
  if (num1 > 100) {
    console.log(`Sorry, ${num1} is not a valid number.`)
  }
  if (num1 < 1) {
    console.log(`Sorry, ${num1} is not a valid number.`)
  }
}












   



