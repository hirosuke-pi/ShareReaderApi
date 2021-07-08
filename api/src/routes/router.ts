import express from 'express'
import multer from 'multer'
import isMatchedSenderAuth from '../middleware/isMutchedSenderAuth'
import uploadController from '../controllers/file/uploadController'
import downloadController from '../controllers/downloadController'
import downloadCheckParams from '../middleware/downloadCheckParams'
import getObjectInfo from '../middleware/getObjectInfo'

export const router: express.Router = express.Router()

const path = '/v1/api'

router.post(path + '/file', isMatchedSenderAuth, multer({dest: 'storage/'}).single('file'), uploadController)
router.get(path + '/file', downloadCheckParams, getObjectInfo)