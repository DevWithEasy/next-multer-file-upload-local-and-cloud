import multer from 'multer';
import path from 'path';

export const localUploadStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(),'public','uploads','products'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+"_"+file.originalname);
    }
})
export const cloudUploadStorage = multer.diskStorage({})