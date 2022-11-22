const assertEqual = require('./assertEqual');


const words = ["Yo Yo", "Lighthouse", "Labs"];
const tail = function(arr) {
  arr.shift();
  return arr;

};

module.exports = tail;
