import express from 'express'
import { Storage } from '@google-cloud/storage'

const fileController = (req: express.Request, res: express.Response): void => {
  console.log(req.headers.authorization)
  const bucketName = 'share-objects'
  const filePath = ''
  const destFileName = 'storage/'
  const storage = new Storage()

  async function uploadFile(): Promise<void> {
    await storage.bucket(bucketName).upload(filePath, {
      destination: destFileName,
    })
  
    console.log(`${filePath} uploaded to ${bucketName}`)
  }
  
  uploadFile().then(() => {
    res.status(200).send(JSON.stringify({
      "satus": "success",
      "message": "Upload complete!",
      "data": {}
    }))
  }).catch(() => {
    res.status(400).send(JSON.stringify({
      "status": "error",
      "message": console.error,
      "data": {}
    }))
  })

  return
}

export default fileController