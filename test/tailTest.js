const assertEqual = require('../assertEqual'); 
const tail = require('../tail')


// TEST CODE
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);