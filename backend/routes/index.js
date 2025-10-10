import express from 'express'
import converterRoute from './converterRoute.js'
import top100Route from './top100Route.js'

const router = express.Router()

router.use('/api', converterRoute)
router.use('/api', top100Route)

export default router
