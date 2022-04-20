const promise1:Function = () => {
    return new Promise((resolve:Function) => {
        setTimeout(() => {
            resolve('1 2 3')
        }, 3000)
    })
}
const promise2:Function = () => {
    return new Promise((resolve:Function) => {
        setTimeout(() => {
            resolve('4 5 6')
        }, 6000)
    })
}
Promise.all([promise1(), promise2()])
    .then(([data1, data2]) => {
        console.log(data1, data2)
    })