import data from "#server/products.json"

export default defineEventHandler(async (event) => {
    return new Promise<any>((resolve) => {
        return setTimeout(() => {
            resolve(data)
        }, 2000)
    })
})