import React from 'react';
import './ImageFormLink.css';

const ImageLinkForm=({onInputchange,onClicksubmit})=>{
return(
<div>
    <p>{'This magic brain will detect faces in your picture.Give it a try'}</p>
    <div className='center'>
    <div className='form pa4 br3 shadow-5 center'>
    <input type='text' className=' f4 pa2 w-70 center' onChange={onInputchange}></input>
    <button className='w-30 grow link f4 ph3 pv2 dib white bg-light-purple' style={{border:'none'}} onClick={onClicksubmit}>detect</button>
    </div>
       
    </div>
</div>
)

}
export default ImageLinkForm;