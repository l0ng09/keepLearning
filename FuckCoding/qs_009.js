;(function b() {
  b = 123
  console.log(b)
})()

// 输出 function：b

function b() {
  b = 123
  console.log(b)
}
b()
b()

// 输出 123
// b is not a function 

// 本质上这两段代码应该是等同的，但是输出结果却不一样
// 这个是因为自执行函数会创建一个封闭的作用域，其中函数名称应该是一个静态量无法被赋值