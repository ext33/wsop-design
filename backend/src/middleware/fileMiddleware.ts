import multer from 'multer'
import fs from 'fs'
import path from 'path'
import log from './consoleMiddlware'

try {
  fs.mkdirSync(path.join(__dirname, '../../../', 'uploads'))
  log('ok', 'Filestore folder created')
} catch (e) {
  if(e.code === 'EEXIST'){
    log('info', 'Filestore folder already exist')
  } else {
    log('error', e)
  }
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads')
  },
  filename(req, file, cb) {
    cb(null, new Date().toISOString() + '-' + file.originalname)
  }
})

const allowedTypes: Array<any> = ['image/png', 'image/jpg', 'image/jpeg']

const fileFilter: Function = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

export default multer({
  storage, fileFilter
})