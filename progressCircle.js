import React from 'react';
import './image.css'


function Progress() {
  
 function myFunction (){
    console.log('hgf')
    alert("gytf")
    const numb = document.querySelector(".numb");
    var counter = 0;
    setInterval(()=>{
      if(counter == 100){
        clearInterval();
      }else{
        counter+=1;
        numb.textContent = counter + "%";
      }
    }, 80);
  }

  return (
    <div >
        <div className = "circular" onChange ={myFunction}>
          <div className = "inner"></div>
          <div className = "numb" >0%</div>
         
          <div className = "circle">
            <div className = "bar left"><div className = "progress"></div></div>
            <div className = "bar right"><div className = "progress"></div></div>
          </div>
        </div>
      </div>

  ); 
}

export default Progress;
