#!/usr/bin/node

// console.log(parseInt('school'));
// console.log(`${process.argv[2]} is ${process.argv[3]}`);

if (isNaN(process.argv[2])) {
  console.log('Not a number');
} else {
  console.log(parseInt(process.argv[2]));
}
