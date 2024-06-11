import React, { useState } from 'react'

const Form = ({addColor}) => {

    const [color, setColor] = useState('');

    const handleSubmit = (e)=>{

      
      e.preventDefault()
      addColor(color)
    }
  return (
    <section className='container'>
        <h4><span className='Red'>Col</span><span className='Green'>or Gene</span><span className='Blue'>rator</span></h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input type='color' value={color}  onChange={(e)=> setColor(e.target.value)} />
        <input type='text' value={color} placeholder='#007FFF' onChange={(e)=> setColor(e.target.value)} />
        <button className="btn" type='submit' style={{backgroundColor:color}} onClick={(e) => handleSubmit(e)}>search</button>
      </form>     
    </section>
    
  )
}

export default Form
