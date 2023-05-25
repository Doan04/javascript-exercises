
//3.99 4.237
const convertToCelsius = function(temp) {
  let cels = ((temp - 32) * 5/9);
  cels = Math.round(cels*10)/10;
  return cels;

};

const convertToFahrenheit = function(temp) {
  let cels = (temp * 9/5 + 32);
  cels = Math.round(cels*10)/10;
  return cels;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
