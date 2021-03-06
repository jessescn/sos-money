import express from 'express';
import { routes } from './routes'
import './database'

import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log("Server is up and running on port 3333")
})