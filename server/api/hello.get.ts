export default defineEventHandler((event) => {
    // console.log(":::::event::", event.context)
    const runtime = useRuntimeConfig()
    console.log('secretKey=========', runtime.secretKey)


    const name = getRouterParam(event, 'name')

    return {
        hello: 'world',
    }
})
