import express, { type Application, type Request, type Response } from 'express'
import cors from 'cors'

const app:Application = express();
app.use(cors())

app.get('/health',(_req:Request, res:Response)=>{
    res.send({status:"OK", message:"server running..."})
})


export default app;

