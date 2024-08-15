import React from 'react'
import './emailpass.css'
import Navbar from './navbar'

function emailpass() {
  return (
    <>
       
        <div class="email-pass-cont">
        <div class="inner-email-pass-cont">
            <label for="mailField">Enter Your Email</label>
            <input type="text" id="mailField"/>
             

            <label for="passwordField">Password</label>
            <input type="text" id="passwordField"/>

            <button class="circular-button">Next</button>
        </div>
        
    </div>
    </>
  )
}

export default emailpass
