// 请实现 Promise.all

Promise.all = (arr) => {
  const length = arr.length;
  const result = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    arr.forEach((item, index) => {
      if (item instanceof Promise) {
        item.then(
          (res) => {
            result[index] = res;
            count += 1;
            if (count === length) resolve(result);
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        result[index] = item;
        count += 1;
        if (count === length) resolve(result);
      }
    });
  });
};
