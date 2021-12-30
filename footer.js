import React from 'react'

function Footer(){
    return(
        <div className = 'bgGray'><br/><br/>
      <div className="container" style = {{textAlign:'left'}}>
  <div className="row">
    <div className="col-sm-5">
    <h2><span>Maine</span> Trip Tix</h2>
      <p>Use the Maine Trip Tix App for all of your state compliance needs! Use this app on your phone to fill out trip tickets. No more paperwork!</p>
      <p><span>Tel:</span> +123 456 789</p>
      <p><span>Email:</span> contact@example.com</p>
      <p><span>Working Hours:</span> 9am-5pm</p>
    </div>

    <div className="col-sm-3">
      <h3>Social Links</h3><br/>
      <a class="social-link" href="#"><span><i class="fa fa-facebook fa-2x"></i></span> Facebook</a><br/><br/>
      <a href="#" class="social-link"><span><i class="fa fa-instagram fa-2x"></i></span> Instagram</a>
    </div>

    <div className="col-sm-4">
      <h3>Download the app today!</h3><br/>
      <a href = ''><img src = "google_app.jpg" alt = 'khushi' width="60%" height="25%"/></a><br/><br/>
      <a href = ''><img src = "iphone_app.png" alt = 'bisht' width="60%" height="25%"/></a>
    </div>
  </div>
</div>
    </div>
    )
}
export default Footer;