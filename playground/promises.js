const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is my resolved data');
        reject('Somethign went wrong');
    }, 1500);
});

console.log('before');

// promise.then((data) => {
//     console.log('1', data);
// }, (error) => { /// without using catch
//     console.log(error);
// });

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log(error);
});

console.log('after');