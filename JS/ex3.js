//3.
const DayEntered = prompt('Enter day of the week:')

switch (true) {
  case (DayEntered === 'sun'):
    console.log(`You entered: ${DayEntered} \n The following day is mon.`)
    break
  case (DayEntered === 'mon'):
    console.log(`You entered: ${DayEntered} \n The following day is tue.`)
    break
  case (DayEntered === 'tue'):
    console.log(`You entered: ${DayEntered} \n The following day is wed`)
    break
  case (DayEntered === 'wed'):
    console.log(`You entered: ${DayEntered} \n The following day is thu`)
    break
  case (DayEntered === 'thu'):
    console.log(`You entered: ${DayEntered} \n The following day is fri`)
    break
  case (DayEntered === 'fri'):
    console.log(`You entered: ${DayEntered} \n The following day is sat`)
    break
  case (DayEntered === 'sat'):
    console.log(`You entered: ${DayEntered} \n The following day is sun`)
    break
}