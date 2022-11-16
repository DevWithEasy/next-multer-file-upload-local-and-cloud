import multer from 'multer';
import { localUploadStorage } from './storage';

const upload = multer({
    storage : localUploadStorage
})
export default upload;