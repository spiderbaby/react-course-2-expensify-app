const promise = new Promise((resolve, reject) => {
    // long-running asynchronous task goes here
    setTimeout(() => {
        resolve({
            name: 'Billy',
            age: 101
        });
        reject('Something went wrong!')
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data)
    return new Promise((resolve, reject) => {
        // long-running asynchronous task goes here
        setTimeout(() => {
            resolve('This is my other promise');
        }, 5000);
    });
}).then((bueler) => {
    console.log('does this run?', bueler)
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');
