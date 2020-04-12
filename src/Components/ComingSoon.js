import React from 'react';
import { fieldset } from 'reactstrap';
import AllTheSourdough from './Assets/allTheSourdough.jpg';
import '../Components/CSS/comingSoon.css';
import Facebook from './Assets/facebookRound.png'

function ComingSoon() {
    return (
      <div className="CS">
        <h1 id="titleCS" >Frank's Bread Academy Coming Soon!</h1>
            <div className="atsDiv">
                <img src={AllTheSourdough} id="allTheSourdough" alt="Frank posed with 11 loaves of sourdough bread"/>
            </div>
                <a href="https://www.facebook.com/Frankthebreadguy/" target="_#">
                    <img src={Facebook} id="fbImg"/>
                        <h3 id="followMeFb">Check out my Facebook page to see what I'm baking and information on classes.</h3>
                </a>
            <h3 id="sendMessageH3">Please feel free to send me a message.</h3>
              <form className="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/indybreadguy@att.net" method="post">
              <div className="formspreeDiv"> 
                 <fieldset id="fs-frm-inputs">
                    {/* <label for="full-name">Full Name</label> */}
                    <input type="text" name="name" id="full-name" placeholder="First and Last Name" className="inputFields" required=""/>
                    {/* <label for="email-address">Email Address</label> */}
                    <input type="email" name="_replyto" id="email-address" placeholder="Email Address" className="inputFields"  required=""/>
                    {/* <label for="message">Message</label> */}
                    <textarea rows="5" name="message" id="message" placeholder="Thank you for your message. I look forward to hearing from you." className="inputFields"  required=""></textarea>
                    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                </fieldset>
                </div>
                <div className="submitMessageDiv">
                <input type="submit" value="Submit" target="_#" id="submitButton"></input>
                </div>
              </form>
      </div>
    );
  }
  
  export default ComingSoon;