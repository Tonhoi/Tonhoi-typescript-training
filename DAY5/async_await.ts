interface Item {

}

async function get(): Promise<Item[]> {
    throw new Error('Có lỗi xảy ra.');
}


get()