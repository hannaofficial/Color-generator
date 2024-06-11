import { useState } from "react";
import React from "react";
import Colourlist from "./Colourlist";
import History from "./History";
import Form from "./Form";
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';
let history = []

const App = () => {

    const [colors, setColors] = useState(new Values('#007FFF').all(10))
    

    const uniqueList = (List)=>{
      const seT = new Set()
      const unique = []
      List.forEach(element => {
        if(element !== null && typeof element === 'object' && !Array.isArray(element)){

          let Name = element.color
          console.log(`name: ${Name}`)
          
          if(!seT.has(Name)){
            seT.add(Name)
            unique.push(element)

          }else{
            unique.forEach((item=>{
              if(item.color == element.color){
                item.Count+=1;
              }
            })

            )

          }


        }
        
      });
      return unique
    } 

    
    const addColor = (color)=>{
        
      try{
        const newColor = new Values(color).all(10)
        setColors(newColor)
        const Rgb = newColor[10].rgb
        const ColorDict = {color:color,Rgb:Rgb,Count:1}
        
        // console.log(`color ${ColorDict}`)
        
        // history.splice(-1,0,ColorDict)
        history.push(ColorDict)
        
        history = uniqueList(history)
        console.log(history)
        history = history.length>5?history.slice(-5).reverse():history.reverse()
       
        
        
      }catch(error){
        toast.error(error.message)
      }

    }
    const addColorH = (color)=>{
        
      try{
        const newColor = new Values(color.color).all(10)
        setColors(newColor)
        
        
        
      }catch(error){
        toast.error(error.message)
      }

    }

    
   

    return <main>
      <Form addColor={addColor} />
      
      <Colourlist colors={colors}/>
      <History history={history} addColorH={addColorH}/>
      <ToastContainer position='top-center'/>
    </main>


  // return <div className="container">
  //   <form className="color-form">
  //     <label htmlFor='colorName' className="title">Color Generator</label>
  //     <input type='text' name='colorName' id='colorName' placeholder="#000000"/>
  //     <button className="btn">Submit</button>
  //   </form>
  // </div>;
};
export default App;
