import React from "react";
import Loading from "./Loading";
const Preview = (props)=>{
    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
             {/* orignal img*/}
            <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
                <h2 className="text-xl text-center bg-gray-800 font-semibold text-white py-2">Origanl Img</h2>
                
                {props.uploaded ? <img src={props.uploaded} alt="" className="w-full h-full object-cover" /> 
                : <div 
                className="flex items-center justify-center h-80 bg-gray-200"
                >No Image Selected</div>}
                
            </div>
            {/* Enhanced img*/}
            <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
            <h2  className="text-xl text-center bg-blue-800 font-semibold text-white py-2">Genrated Img</h2>

                {props.enhanced && !props.loading &&(
                    <img src={props.enhanced} alt="" className="w-full h-full object-cover" />
                )}

                {props.loading ? ( <Loading/> ):( <div 
                className="flex items-center justify-center h-80 bg-gray-200"
                >No Enhanced Image</div> )}
            
            </div>
        
        </div>
    )
}
export default Preview;