import { Router } from 'express'
import * as personalController from '../controllers/personal.controller.js'
import { authToken } from '../middlewares/personal.middleware.js'

const router = Router()

router.get('/personal', authToken, personalController.findAll)
router.get('/personal/:id', authToken, personalController.findById)
router.post('/personal', authToken, personalController.create)
router.put('/personal/:id', authToken, personalController.updateById)
router.delete('/personal/:id', authToken, personalController.deleteById)

export default router

// qui se crean las rutas o directorios de personal