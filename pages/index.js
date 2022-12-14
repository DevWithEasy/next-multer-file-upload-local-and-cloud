import Head from 'next/head';
import { useState } from 'react';
import addCloud from '../libs/addProduct/addCloud';
import addLocal from '../libs/addProduct/addLocal';

export default function Home() {
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const [file,setFile] = useState(null)
  console.log(name,price,file)
  return (
    <div className=''>
      <Head>
        <title>NextJs Multer File Upload</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='index'>
        <div className="">
          <h1>Add Product</h1>
          <input type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder='enter product name'/>
          <input type="number" name="price" onChange={(e)=>setPrice(e.target.value)} placeholder='enter product price'/>
          <input type="file" id="file" onChange={(e)=>setFile(e.target.files[0])}/>
          <input type="submit" value="Local" onClick={(e)=>addLocal(e,name,price,file)}/>
          <input type="submit" value="Cloud" onClick={(e)=>addCloud(e,name,price,file)}/>
        </div>
      </div>
    </div>
  )
}
