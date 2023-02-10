//2.

const name1 = prompt('What is your name?')
const units = Number(prompt('How many units have you completed?'))
switch (true) {
  case units >= 0 && units <= 30:
    console.log(`Hello ${name1}, your grade standing is Freshman.`)
    break
  case units >= 31 && units <= 60:
    console.log(`Hello ${name1}, your grade standing is Sophmore.`)
    break
  case units >= 61 && units <= 90:
    console.log(`Hello ${name1}, your grade standing is Junior.`)
    break
  case units > 90:
    console.log(`Hello ${name1}, your grade standing is Senior.`)
    break
}