import axios from "axios";

export default async function addLocal(e,name,price,file){
    e.preventDefault();
    const formData = new FormData;
    formData.append("name",name)
    formData.append("price",price)
    formData.append("image", file)
    try{
        const response = await axios.post('/api/product/add/local',formData)
        console.log(response.data)
    }catch(err){
        console.log(err)
    }
}