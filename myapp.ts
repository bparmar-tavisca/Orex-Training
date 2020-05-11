import {SortHelper} from './Utility/sort-helper';
import {TestHelper} from './Utility/text-helper';

// let obj = new SortHelper();
// let input = new Array<string>();
// input.push("a");
// input.push("ab");
// input.push("abcd");
// input.push("abc");
// input.push("pqrst");
// console.log("Array after sorting");
// console.log(obj.sort(input));
// console.log("Array after revers sorting");
// console.log(obj.revers(input));


console.log("--------------------------");

let obj1 = new TestHelper();
let text = "i am bhavin parmar. i work for tavisca soluion private limited. i work in flights team. we have a great atmospere at office.";

console.log(obj1.countSentences(text));
let searchResult = obj1.findOccurance(text,"a",0);
console.log(searchResult);
console.log(`Number of occurance of A is ${searchResult.length}`);

console.log(obj1.formatText(text));