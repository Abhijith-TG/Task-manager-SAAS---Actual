import app from "./app.js"
import { connectDB } from "./config/config.js"

const port = 5000


connectDB().then(()=>
app.listen(port,()=>{
    console.log(`server running at port ${port}`)
}))