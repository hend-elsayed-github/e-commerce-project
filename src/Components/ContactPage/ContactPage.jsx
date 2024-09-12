import './ContactPage.css'
import * as yup from "yup"
import { useState } from 'react'
import logo from '../../../public/assets/images/logo.png'
import dirsymbol from '../../../public/assets/images/dir-symbol.png'
import Slogans from '../Slogans/Slogans'
import locationicon from '../../../public/assets/images/location-icon.png'
import phoneicon from '../../../public/assets/images/phone-icon.png'
import clockicon from '../../../public/assets/images/clock-icon.png'
import { Link } from 'react-router-dom'



function ContactPage(){

    const [formdata,setformdata]=useState({
        yourname:"",
        email:"",
        subject:"",
        message:"",
      });

      const userSchema = yup.object().shape({
        yourname: yup.string().required(),
        email: yup.string().email().required(),
        subject:yup.string(),
        message: yup.string(),
      });

      async function testValidation() {
        try {
          await userSchema.validate(formdata, { abortEarly: false });
          console.log("Validation passed");
        } catch (err) {
          if (err instanceof yup.ValidationError) {
            err.inner.forEach((error) => {
              alert(`${error.path}: ${error.message}`);
            });
          }
        }
      }
      
      function onHandleSubmit(event){
            event.preventDefault();
            testValidation();
            console.log(formdata)
      }
      
      function  hanleonchange(event){
        var value =event.target.value
        const key =event.target.name
  
        setformdata({
          ...formdata,
          [key]:value,
        });
  
  }
    

    return(
        <>
        <div id='imageandlogodiv'>
            <img src={logo}></img>
            <label id='contact'>Contact</label>
            <div id='contactDirectoryDiv'>
                <Link to={"/HomePage"} id='homeWord'>Home</Link>
                <img src={dirsymbol}></img>
                <label id='contactWord'>contact</label>
            </div>
        </div>
        <div id='contactMainDiv'>
            <div id='getInToutchDiv'>
                <label id='inTouchHead'>Get In Touch With Us</label>
                <p id='inToutchInfo'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
        </div>
        <div id='contactsAndFormDiv'>
            <div id='contactsdiv'>
                <div className='commonContactsDiv'>
                    <img src={locationicon}></img>
                    <div className='contactsdetails'>
                        <label className='contactname'>Address</label>
                        <label className='contactvalue'>236 5th SE Avenue, New York NY10000, United States</label>
                    </div>
                </div>
                <div className='commonContactsDiv'>
                    <img src={phoneicon}></img>
                    <div className='contactsdetails'>
                        <label className='contactname'>Phone</label>
                        <label className='contactvalue'>Mobile: +(84) 546-6789</label>
                        <label className='contactvalue'>Hotline: +(84) 456-6789</label>
                    </div>
                </div>
                <div className='commonContactsDiv'>
                    <img src={clockicon}></img>
                    <div className='contactsdetails'>
                        <label className='contactname'>Working Time</label>
                        <label className='contactvalue'>Monday-Friday: 9:00 - 22:00</label>
                        <label className='contactvalue'> Saturday-Sunday: 9:00 - 21:00</label>
                    </div>
                </div>
            </div>
            <form id='contactsForm' onSubmit={onHandleSubmit}>
                <div className='commonFormDiv'>
                    <label className='infoname'>Your name</label>
                    <input className='inputshape' placeholder='ABC' name='yourname'
                    value={formdata.yourname} onChange={hanleonchange}></input>
                </div>
                <div className='commonFormDiv'>
                    <label className='infoname'>Email address</label>
                    <input className='inputshape' placeholder='Abc@def.com' name='email'
                    value={formdata.email} onChange={hanleonchange}></input>
                </div>
                <div className='commonFormDiv'>
                    <label className='infoname'>Subject</label>
                    <input className='inputshape' placeholder='This is an optional' name='subject'
                    value={formdata.subject} onChange={hanleonchange}></input>
                </div>
                <div className='commonFormDiv'>
                    <label className='infoname'>Message</label>
                    <textarea id='textarea' placeholder='Hi! i’d like to ask about' name='message'
                    value={formdata.message} onChange={hanleonchange}></textarea>
                </div>
                <button id='submitbtn'>Submit</button>
            </form>
        </div>
        <Slogans></Slogans>
        </>
    )
}
export default ContactPage