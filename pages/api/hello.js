import path from 'path';

export default async function handler(req,res){
    const directory_upload = path.join(process.cwd(),'public','uploads','products')
    res.status(200).json({
        hello : 'Hello world',
        path : directory_upload
    })
}