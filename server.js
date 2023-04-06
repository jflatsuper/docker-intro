const ronin=require('ronin-server')
const mocks=require('ronin-mocks')
const database =require('ronin-database')

async function main(){
    try{
        await database.connect(process.env.CONNECTION_STRING)
        const server=ronin.server({port:process.env.PORT})
        server.use('/',mocks.server(server.Router()))
        const result=await server.start()
        console.log(result)

    }catch(err){
        console.log(err)
    }
}
main()