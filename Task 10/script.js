/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
import {one, two, three, four, five} from "../Task 10/modules/numbers/numbers.js";

import composition from "../Task 10/modules/math/composition.js";
import division from "../Task 10/modules/math/division.js";
import substraction from "../Task 10/modules/math/subtraction.js";
import multiplication from "../Task 10/modules/math/multiplication.js";




let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
