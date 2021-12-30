import React from 'react';
import Progress from './progressCircle';
import './image1.css';

function Image1(){
  return(
    <div>
      <div className = 'parallax ' style={{ backgroundImage: "url(/i3.jpg)",textAlign: "center" }}><br/><br/><br/>
      <div className="container ">
      <div className="row">
      <div id="someid" class="Window">
      <div className="col-sm-4 " id="loader">
      <Progress/>
      <h4>Time stamping </h4>
      </div>
      <div className="col-sm-4" id="loader1">
      <Progress/>
      <h4>Receiving </h4>
      </div>
      <div className="col-sm-4" id="loader2">
      <Progress/>
      <h4>Exporting </h4>
      </div>
      </div>
    </div>
    </div>
      </div>
    </div>
  )
}
export default Image1