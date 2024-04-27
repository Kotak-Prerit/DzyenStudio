import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../layouts/Navbar/Navbar';
import project from '../../Assets/project.gif';
import './Contact.css';
import Footer from '../../layouts/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';

function Contact() {
	const form = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_epdzf8p', 'template_s2ccyju', form.current, {
				publicKey: 'Sk9sVpYvW0hGc7O0L',
			})
			.then(
				() => {
					toast.success('We will get right back to you! ⌛');
					form.current.reset();
				},
				(error) => {
					toast.error('FAILED...', error.text);
				}
			)
			.catch((error) => {
				toast.error('An error occurred while sending the email:', error);
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	};
	return (
		<div className='contact-main' id='contact'>
			<ToastContainer />
			<Navbar />
			<p className='contact-page-text'>
				{' '}
				<img src={project} alt='gif' className='prjctgif' />
				let's start a project together
			</p>
			<div className='contact-container'>
				<div className='form-heading'>
					<div className='brief_us_wrapper'>
						<p className='brief_us '>Brief us</p>
					</div>
					<div className='tagline_wrapper'>
						<p className='tagline'>
							Our notebook is open, and we're ready to take your brief...
						</p>
					</div>
				</div>
				<form className='form' onSubmit={sendEmail} ref={form}>
					<div className='input_container'>
						<div className='form_index'>01</div>
						<div className='input_que'>
							<p className='form_que'>What's your name?*</p>
							<input
								type='text'
								name='from_name'
								id='name'
								placeholder='otis milburn'
								className='input_name'
								min={3}
								max={25}
								required
							/>
						</div>
					</div>
					<div className='input_container'>
						<div className='form_index'>02</div>
						<div className='input_que'>
							<p className='form_que'>What's your email?*</p>
							<input
								type='email'
								className='email'
								name='email'
								placeholder='example@gmail.com'
								id='email'
								required
								pattern='^[a-zA-Z0-9._%+-]{3,}@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$'
							/>
						</div>
					</div>
					<div className='input_container'>
						<div className='form_index'>03</div>
						<div className='input_que'>
							<p className='form_que'>
								What's your company? <span className='optional'>optional</span>
							</p>
							<input
								type='text'
								name='from_company'
								id='company'
								placeholder='Digital Ocean'
								className='company'
							/>
						</div>
					</div>
					<div className='input_container'>
						<div className='form_index'>04</div>
						<div className='input_que'>
							<p className='form_que'>
								What's your phone number?{' '}
								<span className='optional'>optional</span>
							</p>
							<input
								type='phone'
								placeholder='+1 832 766-0000'
								name='from_phone'
								id='phone'
								className='phone'
							/>
						</div>
					</div>
					<div className='input_container'>
						<div className='form_index'>05</div>
						<div className='input_que'>
							<p className='form_que'>
								Tell us more about your project{' '}
								<span className='optional'>optional</span>
							</p>
							<textarea
								name='message'
								id='aboutProject'
								cols='20'
								rows='3'
								placeholder='Describe it as you can'
								className='poppins'
							></textarea>
						</div>
					</div>

					<button type='submit' className='send' disabled={isSubmitting}>
						{isSubmitting ? 'Sending...' : 'Send'}
					</button>
				</form>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
