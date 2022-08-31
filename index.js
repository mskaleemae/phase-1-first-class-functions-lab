// Code your solution in this file
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//1
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

//2
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

//3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//4
const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };
  
  //5
  const fareDoubler = createFareMultiplier(2);
  
  //6
  const fareTripler = createFareMultiplier(3);
  
  //7
  const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };