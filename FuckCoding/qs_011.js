var a = 0
var b = async () => {
  a = a + await 10
  console.log('2', a) // -> ？
}
b()
a++
console.log('1', a) // -> ？

// 1  1
// 2  10

// 执行b的时候 ，在 await 之前是同步的代码，所以 a = a + await 10 这里的a 为0， 
// await 之后是异步的会被压入到微任务队列中后面继续执行
// a++ a的值变为1
// 打印出 1 1 
// 执行栈代码清空，从微任务队列中取出来继续执行 此时打印出 2 10
