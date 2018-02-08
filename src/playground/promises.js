const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Prem',
    //   age: 29
    // });
    reject('Something went wrong!');
  }, 5000);
});
console.log('before');
promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error:', error);
});
console.log('after');
