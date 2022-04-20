const text:Function = () => {
    return new Promise((resole:Function) => {
        resole()
    })
}
text()
    .then(() => {
        return new Promise((resolve:Function) => {
            setTimeout(() => {
                resolve()
                console.log('hello');
            }, 2000)
        })
    })
    .then(() => {
        setTimeout(() => {
            console.log("word")
        }, 4000)
    })