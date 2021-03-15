/**
 * 异步请求通过 Promise.all 处理，怎么让其中失败的所有请求重试。
 * Promise.all([A, B, C, D])
 * 4 个请求完成后发现 AD 请求失败了，如何让 AD 请求重试
 */

const failedList = [];

const fetchData = (params) => {
  return new Promise((resolve, reject) => {
    response(params, resolve, reject);
  }).catch((error) => {
    // 这里的 error 其实就是 reject 过来的 parmas
    failedList.push(fetchData(error));
  });
};

// 模拟数据返回，有一定的几率失败
const response = (params, resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.6) {
      console.log(params + "执行失败，重试");
      reject(params);
    } else {
      console.log(params + "执行成功");
      resolve(params);
    }
  }, Math.random() * 2000);
};

const promiseList = [
  fetchData("A"),
  fetchData("B"),
  fetchData("C"),
  fetchData("D"),
];

let result = [];

const getPromiseAll = (arr) => {
  Promise.all(arr).then((res) => {
    result = result.concat(res);
		// 检查失败队列是否有失败的任务
    if (failedList.length > 0) {
      getPromiseAll(failedList);
      failedList.length = 0;
    } else {
      console.log(result.filter((item) => item !== undefined));
    }
  });
};

getPromiseAll(promiseList);
