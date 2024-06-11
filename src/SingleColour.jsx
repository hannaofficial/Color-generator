import React from 'react'
import doge from './Img/doge_with_dhoti.png'
import {toast} from 'react-toastify';
import { MdContentCopy } from "react-icons/md";

const SingleColour = ({index, color}) => {
  
    const {hex, weight,rgb} = color;
    
    const Constant = [0.2126,0.7152,0.0722]
    const Luminance = rgb.map((num,index) => num*Constant[index])
    let sum=0
    for (let i=0;i<Luminance.length;i++){
      sum +=Luminance[i]

    }

    const saveClipboard = async(hexC)=>{
      if(navigator.clipboard){
        try{

           await navigator.clipboard.writeText(`#${hexC}`)
         
          toast.success(`#${hexC} copied`)
        }catch(error){
          toast.error(error.message )
        }

      }else{
        toast.error('Clipboard access not available')
      }
    }
    
  return (
   <article className={sum < 109? 'color color-light':'color'} style={{backgroundColor:`#${hex}`}} >
    <p className='percent-value'>{`#${hex}`}</p>
    <p className='color-value'>{`${weight}%`}</p>
    <button type='button' className='bt' style={{border:'transparent',background:'transparent',cursor:'pointer'}} onClick={() =>saveClipboard(hex)}><MdContentCopy className='Copy' size={64} color={sum>109?'black':'white'}/></button>
    <div className='doge'>
    <img src={doge} alt='doge' className='doge_img'/>
    </div>
    

   </article>
  )
}

export default SingleColour
