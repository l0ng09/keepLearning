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

function remove_(obj) {
  const string = JSON.stringify(obj).replace(/_/g,"")
  const json = JSON.parse(string)
  console.log(json);
  return string;
}

remove_(a)