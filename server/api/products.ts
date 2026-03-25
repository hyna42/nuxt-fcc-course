// import data from "#server/products.json"
let productCount = 0;

export default defineEventHandler(async (event) => {
    await new Promise<any>((resolve) => {
        setTimeout(() => {
            resolve(productCount++)
        }, 2000)
    })

    return {
        productCount
    }
})