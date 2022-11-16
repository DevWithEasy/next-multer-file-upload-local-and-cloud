import multer from 'multer';
import { cloudUploadStorage } from "./storage";

const upload = multer({
    storage : cloudUploadStorage
})
export default upload;