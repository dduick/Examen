import express from 'express'
import cors from 'cors'

import { serverLog } from './middlewares/serverLog.middleware.js'
import { medicamentosRouter, usuariosRouter, errors, personalRouter } from './routers/index.js'
import { authToken } from './middlewares/personal.middleware.js'

const app = express()
const PORT = process.env.PORT ?? 3_000

app.use(cors())
app.use(express.json())
app.use(serverLog)
app.use(usuariosRouter)
app.use(medicamentosRouter)
app.use(errors)
app.use(personalRouter)
app.listen(PORT, () => console.log('Server UP!!'))

export default app
