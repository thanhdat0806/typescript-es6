"use strict";
let calculateSalary = function () {
    return 1000000;
};
let calculateSalaryArrow = (bonus, tax) => 2000000 + bonus - tax;
console.log(calculateSalary());
console.log(calculateSalaryArrow(100000, 50000));
