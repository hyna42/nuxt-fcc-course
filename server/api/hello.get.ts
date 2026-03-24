export default defineEventHandler((event) => {
    // console.log(":::::event::", event.context)
    const name = getRouterParam(event, 'name')

    console.log(":::::::::::::",name)
    return {
        hello: 'world',
    }
})
