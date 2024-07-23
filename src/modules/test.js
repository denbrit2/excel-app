async function myFn() {
    return await Promise.resolve('test ok')
}

myFn().then(console.log)