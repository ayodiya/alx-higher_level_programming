#!/usr/bin/node

if (isNaN(process.argv[2])) {
  console.log('Missing size');
}
const num = process.argv[2];
for (let i = 0; i < num; i++) {
  console.log('X'.repeat(num));
}
