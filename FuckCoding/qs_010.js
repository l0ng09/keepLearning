let length = 10

function fn() {
  console.log(this.length);
}

let obj = {
  length: 5,
  method(fn) {
    // 两次调用各输出什么
    fn()
    arguments[0](0)
  }
}

fn()

obj.method(fn, 1)

// window 中输出 0  2
// node 中输出 undefined 2

// 第一个 fn 的调用是函数调用，所以直接指向 window ，所以输出 this.length  === window.length === 0 
// window.length 指的是当前窗口中框架的数量（iframe,frame）可以参考 mdn ，这个不查一下还真不知道
// 第二个是 2 ，因为调用者是 arguments， arguments.length === 2,所以输出2