import express from 'express'
import cryptoRoute from './cryptoRoute.js'
import fiatRoute from './fiatRoute.js'
import top100Route from './top100Route.js'
const router = express.Router()

router.use('/api', fiatRoute)
router.use('/api', top100Route)
router.use('/api', cryptoRoute)

export default router
