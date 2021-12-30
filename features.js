import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Getapp from '../components/getApp'
import './bgNotGray.css'

function Features() {
  return (
    <div id='services' className = 'bgNotGray'>
      <br/><br/><h1><u>Features</u></h1><br/><br/>
      
      <div className="container">
  <div className="row">
    <div className="col-sm-4">
      <a href =''><i className="fa fa-ticket fa-2x"/>
      <h3>Tickets</h3></a>
      <p>We supply a seamless experience filling and storing trip tickets. We supply an easy to use interface for filing trip tickets.</p>
    </div>
    <div className="col-sm-4">
      <a href ='' ><i className="fa fa-file fa-2x"/>
      <h3>Pre-fill Sections 1 and 4</h3></a>
      <p>Use this app on your phone to fill out trip tickets. No more paperwork!</p>
    </div>
    <div className="col-sm-4">
      <a href = ''><i className="fa fa-ticket fa-2x"/>
      <h3>Store Tickets</h3></a>  
      <p>A Trip Ticket can be stored directly on the device that created it or in our storage system accessible only by you.</p>
    </div>
  </div>
</div>
<Getapp/><br/><br/><br/>
    </div>
  )


}

export default Features;