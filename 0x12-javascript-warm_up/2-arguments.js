#!/usr/bin/node
const argsNum = process.argv.length - 2;

if (!argsNum) {
  console.log('No argument');
} else if (argsNum === 1) {
  console.log('Argument found');
} else {
  console.log('Arugments found');
}
