//7. Following Second - The program has the following requirements:
//Input
//Time as three values: hours, minutes, seconds (validate input)
//Output
//Output the time entered and the time one second later.
//Examples:
//Time input: 14h17m59s
//One second later: 14h18m0s
//Time input: 6h59m59s
//One second later: 7h0m0s
//Time input: 23h59m59s
//One second later: 0h0m0s


//const x = Number(prompt('Enter time:'))

    // The first result (result 0) is the full string,
    // the second is the number of hours, the third is the number of minutes.
    const m = Number(prompt('Enter another number:'))
    for (var i = 0; i <= 10; i++) {
      console.log(`${m} * ${i} =`, m * i)
    }
  
    // returns the time in number of minutes.
    return (hours * 60) + minutes;
  }