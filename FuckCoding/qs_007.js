// 请实现一个大数相加函数，比如说 1111111111111111111 + 1，直接数字相加答案是错误的。

// 另请说明为什么在 JS 会存在这样的问题？

/*

原因：如果是整数的范围的话，JavaScript 能够准确表示的整数范围在-2^53 到 2^53 之间（不含两个端点）， 超过这个范围，无法精确表示这个整数
*/

const a = "81111111111111111119";
const b = "61111111111111111119";

const bigIntAdd = (a, b) => {
  const arrA = a.split("").map((i) => parseInt(i));
  const arrB = b.split("").map((i) => parseInt(i));
  const result = [];
  let overNum = 0;

  while (arrA.length > 0 || arrB.length > 0) {
    const a = arrA.pop() || 0;
    const b = arrB.pop() || 0;
    let sum = a + b;
    if (overNum) {
      sum += 1;
      overNum = 0;
    }
    if (sum > 9) {
      result.unshift(sum - 10);
      overNum = 1;
    } else {
      result.unshift(sum);
    }
  }

  if (overNum) result.unshift(overNum);
  return result.join().replace(/,/g, "");
};

console.log(bigIntAdd(a, b));

// function bigNumberSum(a, b) {
//   return (BigInt(a) + BigInt(b)).toString()
// }

// console.log('bigNumberSum: ', bigNumberSum(a,b));