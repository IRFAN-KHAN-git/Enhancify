import React, { useState } from "react";
import Preview from "./Preview"
import Upload from "./Upload"
import { enhancedImageAPI } from "../utils/enhancedImageAPI";

    const Home = ()=>{
        const [uploadImg , setUploadImg] = useState(null);
        const [enhImg , setEnhImg] = useState(null);
        const [loading, setloading] = useState(false);
        
        const uploadImgHandeler = async (file)=>{
            setUploadImg(URL.createObjectURL(file));
            setloading(true);
            try{
                const enhancedURL = await enhancedImageAPI(file);
                setEnhImg(enhancedURL.image);
                setloading(false);
            }catch(err){
                console.log(err);
                alert("err while enhancing the image")
            }

        }
        return (
            <>
                <Upload uploadImgHandeler={uploadImgHandeler}/>  
                <Preview 
                loading = {loading}
                uploaded = {uploadImg}
                enhanced = {enhImg.image}
                />  
             </>
        );
    };  

    export default Home;