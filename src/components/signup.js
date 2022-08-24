import React from "react";
import '../style/signup.css'
import Form from "./form";
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { MdAddLocationAlt } from 'react-icons/md'

export default function Signup() {

return(
    <div className="container">
            <div className="split left">
            <div className="centered-left">
                <h2 className="main-heading">We'd Love to Hear <br/>from you</h2>
                    <div className="cards">
                    <div className="card">
              
                        <div><AiFillPhone className="icon_class"/></div>
                        
                        <span className="ml-15"><h4>Phone Number</h4></span>
                        <span className="ml-15"><h6>+43 6667755511</h6></span>
                    </div>
                    </div>
                    <div className="cards">
                    <div className="card">
                    <div><AiOutlineMail className="icon_class"/></div>
                        
                        <span className="ml-15"><h4>Email Address</h4></span>
                        <span className="ml-15">
                            <h6 className="email-font">Something@something.com <br/>Info@something.com</h6>

                        </span>
                    </div>
                    </div>
                    <div className="cards">
                    <div className="card">
                    <div><MdAddLocationAlt className="icon_class"/></div>
                        
                        <span className="ml-15"><h4>Physical Address</h4></span>
                        <span className="ml-15"><h6>Smacty GmbH St. Peter Gürtel 12a 8042 Graz, <br/> Austria</h6></span>
                    </div>
                    </div>
            </div>
            </div>

            <div className="split right">
            <div className="centered-right">
           <Form/>
            </div>
            </div>
   </div>
)
}














