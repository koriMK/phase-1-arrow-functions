const add = (parameter1, parameter2) => parameter1 + parameter2;
add(2,3); //=> 5
const square = (parameter) => parameter * parameter;
square(2); //=> 4
const divide = function(parameter1, parameter2) {   
    return parameter1 / parameter2;
    }   
divide(2000, 100); //=> 20
module.exports = {
  add,
  square,
  divide
};