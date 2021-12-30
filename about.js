import React, { Component } from 'react'
import Getapp from '../components/getApp';
import './bgGray.css'

function About() {
  return (
    <div id = 'about' className = 'bgGray'>
      <br/><br/><br/><h1>Trip Tix Details</h1>

      <ul className = 'List'>
          <li><i className="fa fa-check"></i> Use this app on your phone or desktop to fill out trip tickets.  </li><br/>
          <li><i className="fa fa-check"></i> The trip ticket filled out on a desktop can be easily transferred to a phone. The delivery person will have the filled out trip ticket, or trip tickets if there are more than one, with them on their delivery.</li><br/>
          <li><i className="fa fa-check"></i> There is a time stamp button the delivery driver can press that shows their time of departure for every trip ticket they have on that particular trip.</li><br/>
          <li><i className="fa fa-check"></i> The filled out trip ticket can easily be shown to law enforcement or any other regulatory agency if requested. It can be exported as a PDF and emailed to any law enforcement agency or other regulatory agency if they so desire.</li><br/>
          <li><i className="fa fa-check"></i> Upon reaching the delivery destination the form can be signed by the receiving customer, just like a UPS order. The delivery person can then choose the export as a PDF button to save the trip ticket directly to their device or private storage. They can also send the PDF as an email to the receiving customer for their records as well.</li><br/>
          <li><i className="fa fa-check"></i> In case the delivery is to a patient and no signature is required the delivery person need only press the export as PDF button upon completion of delivery to retain the trip ticket in storage.</li>
      </ul>
      <Getapp/>
      <br/><br/><br/><br/><br/>
    </div>
  )
}

export default About;