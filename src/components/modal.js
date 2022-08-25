import { useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import '../style/modal.css';




export const Modal = ({ onRequestClose , onModalLoad}) => {
	// Use useEffect to add an event listener to the document
	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				// Close the modal when the Escape key is pressed
				onRequestClose();
			}
		}

		// Prevent scolling
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);

		// Clear things up when unmounting this component
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

	return (
		<div className="modal__backdrop">
			<div className="modal__container">
                <AiFillCloseCircle className='close-btn' onClick={onRequestClose}/>
                
				<h3 className="modal__title">Alert</h3>
			    <h4>{onModalLoad}</h4>
				<p>
					To close this modal, press the button  or use the Escape key on desktop.
				</p>

			</div>
		</div>
	);
};
