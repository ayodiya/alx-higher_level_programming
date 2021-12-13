#!/usr/bin/node
exports.callMeMoby = (max, func) => {
  for (let i = 0; i < max; i++) {
    func();
  }
};
