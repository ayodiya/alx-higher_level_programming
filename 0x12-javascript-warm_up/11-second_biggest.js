#!/usr/bin/node
const argsLength = process.argv.length - 2;
const argArray = [];

for (let i = 0; i < argsLength; i++) {
  argArray.push(parseInt(process.argv[2 + i]));
}

argArray.sort();

if (argsLength === 0 || argsLength === 1) {
  console.log(0);
} else {
  console.log(argArray[argArray.length - 2]);
}
