#!/usr/bin/node
exports.addMeMaybe = (num, func) => {
  num++;
  func(num);
};
