// 有一个嵌套层次很深的对象，key 都是 a_b 形式 ，需要改成 ab 的形式，注意不能用递归。
const a = {
  a_y: {
    a_z: {
      y_x: 6,
    },
    b_c: 1,
  },
};
// {
//   ay: {
//     az: {
//       yx: 6
//     },
//     bc: 1
//   }
// }

// 简单快捷，但是 不是很可靠的方法

// function remove_(obj) {
//   const string = JSON.stringify(obj).replace(/_/g,"")
//   const json = JSON.parse(string)
//   console.log(json);
//   return string;
// }

remove_(a)

const obj: any = {
  a_y: {
    a_z: {
      y_x: 6
    },
    b_c: 1
  }
}

// 利用栈或者队列来处理
const bfs = (root) => {
  const arr = [root];
  while(arr.length) {
    const current = arr.shift();
    for (let key of Object.keys(current)) {
      const changedKey = key.replace('_', '')
      current[changedKey] = current[key]
      delete current[key]
      arr.push(current[changedKey])
    }
  }
  console.log('result: ', root)
}

bfs(a)