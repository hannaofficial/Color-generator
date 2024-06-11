import React from 'react'

const History = ({history, addColorH}) => {
  const Constant = [0.2126,0.7152,0.0722]
  
  
  return (
    
      <section className='History'>
        <h5>Recent searches: <span>{history.length ==0?'No recent History':null}</span> </h5>
        <div>
        {history.map((recent,index1)=>{
         const Luminance =  (recent.Rgb).map((value,index)=>{
            return value*Constant[index]
          })
          let sumLum = Luminance.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
          },0);
          return <button type='button' key={index1} className='btn btn-history' style={{backgroundColor:`${recent.color}`,color:`${sumLum>109?'black':'white'}`}} onClick={()=> addColorH(recent)}>{recent.color}{recent.Count>1?` (x${recent.Count})`:null}</button>
        })}
        </div>
    </section> 
    
  )
}

export default History
