async function text(elements:string[]) {
    for (const element of elements) {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })
    console.log(element);
    }
}

text(['Hello', 'Word'])