import { useState } from 'react';
import '../style/form.css'

export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

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
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form className='main-form'>
        <div className="user-details">

        <div class="flex-container">

            <div class="flex-child magenta">
            <label className="details">Enter your name</label>
                        <input type="text" onChange={handleName} value={name} placeholder="Enter your name" required/></div>

            <div class="flex-child green">
            <label className="details">Phone number</label>
                        <input type="number" onChange={handleNumber} value={phone} placeholder="Enter your phone" required/></div>

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
