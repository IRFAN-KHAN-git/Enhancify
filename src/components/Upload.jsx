import React from "react";
 
const Upload = (props)=>{
    const showEventHandler = (e)=>{
        const file = e.target.files[0];
        if(file){
            props.UploadImageHandler(file)
        }
    };  

    return (
        <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-2xl">
            <label 
            htmlFor="fileInput"
            className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg
            p-6 text-center hover:border-blue-500 transition-all">
            <input type="file" id="fileInput" className="hidden" onChange={showEventHandler} />
             <span className="text-lg font-medium text-gray-600 ">Click or drag the Image here!</span>   
            </label>
        </div>
    );
};
export default Upload;
