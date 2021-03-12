
/**
 * 请使用原生代码实现一个Events模块，可以实现自定义事件的订阅、触发、移除功能
 */

class Events {
  constructor() {
    this.eventMap = {};
  }
  // 订阅
  on(type, fn, ...args) {
    fn.args = args;
    if (this.eventMap[type]) {
      this.eventMap[type].push(fn);
    } else {
      this.eventMap[type] = [];
      this.eventMap[type].push(fn);
    }
  }

  once(type, fn, args) {
    fn.once = true;
    this.on(type, fn, args);
  }

  // 触发
  fire(type, ...args) {
    if (this.eventMap[type]) {
      this.eventMap[type].forEach((item) => {
        item(...item.args, ...args);
        if (item.once) {
          this.off(type, item);
        }
      });
    }
  }

  // 移除
  off(type, fn) {
    if (this.eventMap[type]) {
      const index = this.eventMap[type].findIndex((item) => item === fn);
      index !== -1 ? this.eventMap[type].splice(index, 1) : null;
    }
  }
}

// 请使用原生代码实现一个Events模块，可以实现自定义事件的订阅、触发、移除功能
const fn1 = (...args) => console.log("I want sleep1", ...args);
const fn2 = (...args) => console.log("I want sleep2", ...args);
const event = new Events();
event.on("sleep", fn1, 1, 2, 3);
event.on("sleep", fn2, 1, 2, 3);
event.fire("sleep", 4, 5, 6);
// I want sleep1 1 2 3 4 5 6
// I want sleep2 1 2 3 4 5 6
event.off("sleep", fn1);
event.once("sleep", () => console.log("I want sleep"));
event.fire("sleep");
// I want sleep2 1 2 3
// I want sleep
event.fire("sleep");
// I want sleep2 1 2 3
