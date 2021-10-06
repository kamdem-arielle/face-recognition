import React from 'react';
import './FaceRecognition.css';

const FaceRecognition=({imageurl,box})=>{
    return(
    <div className='center ma' >
    <div className='mt3 absolute'> 
     {/* presence of absolute in this div */}
    <img id='inputimage' alt='' src={imageurl} style={{height:'300px',width:'400px',}}/>
    <div className='bounding-box' style={{left:box.left_col, right:box.right_col, top:box.top_row, bottom:box.bottom_row}}></div>
    </div>
    </div>    
    )
}

export default FaceRecognition;