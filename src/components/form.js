import { useState } from 'react';
import '../style/form.css'
export default function Form({ DataFromChild , toggleModalFromChild}) {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
};

// Handling the Phone Number change
const handleNumber = (e) => {
	setPhone(e.target.value);
};
//Handling the message
const handleMessage = (e) => {
	setMessage(e.target.value);
};

// Handling the form submission
const HandleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || phone === '') {
        DataFromChild(false);
	} 
    else {
        DataFromChild(true);

	}

    // DataFromChild(submitted);
    toggleModalFromChild()
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
};


return (
	<div className="form">
	<form className='main-form'>
        <div className="user-details">

        <div className="flex-container">

            <div className="flex-child">
            <label className="details">Enter your name</label>
                        <input type="text" onChange={handleName} value={name} placeholder="Enter your name" required/></div>

            <div className="flex-child">
                        <div id="input-wrapper">
                        <label className="details">Phone number</label>

                        <label className='label-num' htmlFor='number'>+43</label>
                        <input type="number" onChange={handleNumber} value={phone} placeholder="Enter your phone" required/></div>
                        </div>
            </div>

          <div className="input-box">
            <label className="details">Enter Email Address</label>
            <input type="text" onChange={handleEmail} value={email} placeholder="Enter your email" required/>
          </div>
          </div>

          <label className="details">Enter your message here</label>
		<textarea onChange={handleMessage} className="input"
		value={message} type="text" placeholder='Type your Message here...'></textarea>

		<button onClick={HandleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}
