import express, {Application, Request, Response } from 'express'
import cors from "cors"
import globalErrorHandler from './midlewere/globalErrorHandler'
import notFound from './midlewere/notFound'
import router from './app/modules/route'
const app:Application = express()

// parser
app.use(express.json())
app.use(cors())

// application route
app.use('/api/v1',router) 
const getController =(req:Request, res:Response) => {
    res.send('Hello World!')
  }

app.get('/', getController)


app.use(globalErrorHandler)
app.use(notFound)
 

export default app