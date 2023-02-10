//5.

let attempt = 0;
for (; attempt < 3; attempt++) {
  let password = prompt('Enter a password:')
  if (password === 'secret') {
    console.log('This is the correct password!')
    break;
  } else {
    console.log('That password is incorrect!')
  } console.log('')
}