import { useState, useEffect } from 'react';
import '../style/form.css'
export default function Form({ setDataFromChild , toggleModalFromChild}) {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');
const [isModalOpen, setModalIsOpen] = useState(false);


// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
    setDataFromChild(submitted);
};
// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the Phone Number change
const handleNumber = (e) => {
	setPhone(e.target.value);
	setSubmitted(false);
};
//Handling the message
const handleMessage = (e) => {
	setMessage(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || phone === '') {
	setError(true);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
	} else {
	setSubmitted(true);
	setError(false);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
	}
    toggleModalFromChild()
};


return (
	<div className="form">
        {/* {isModalOpen && <Modal onRequestClose={toggleModal} onModalLoad={submitted ? 'You are Succesfully registerd': 'Please Enter all Mandatory Values'}/>} */}
	{/* Calling to the methods */}
	<form className='main-form'>
        <div className="user-details">

        <div className="flex-container">

            <div className="flex-child magenta">
            <label className="details">Enter your name</label>
                        <input type="text" onChange={handleName} value={name} placeholder="Enter your name" required/></div>

            <div className="flex-child green">
            <label className="details">Phone number</label>
                        <div id="input-wrapper">
                        <label for="number">+44</label>
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

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}
