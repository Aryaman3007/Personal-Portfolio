import React, { useContext, useState } from 'react'
import "./contact.css"
import Phone from "../img/phone.png"
import Email from "../img/email.png"
import Add from "../img/address.png"
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ThemeContext } from '../context'

const Contact = () => {
  const formRef = useRef()
  const [done,setDone]= useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [buttonColor, setButtonColor] = useState('green')
  const theme = useContext(ThemeContext)
  const darkMode= theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim === '') {
      setError('Please fill in all fields.');
      return
    }
    emailjs.sendForm(
      'service_l6eplnf',
      'template_n4j7j8c', 
      formRef.current,
      'E-bumcA2RYBc291iM'
    ) 
    .then((response) => {
      console.log('Email sent successfully!', response.text);
      setButtonColor('grey')
      setSubmitted(true)
      setDone(true)
      setName('')
      setSubject('')
      setEmail('')
      setMessage('')
    }, (error) => {
      console.error('Error sending email:', error.text);
    });
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">
            Let's discuss your project
          </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              (+91) 9920448208
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              aryaman3007@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Add} alt="" className="c-icon" />
              E-4/15, Nisarg Chs, Sector-48A, Seawoods, Navi Mumbai-400706.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always freelancing if the right
            project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} autoComplete='off' type="text" value ={name} placeholder='Name' name='user_name' onChange={handleNameChange}/>
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} autoComplete='off' type="text" value={subject} placeholder='Subject' name='user_subject' onChange={handleSubjectChange}/>
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} autoComplete='off' type="text" value={email}placeholder='Email' name='user_email' onChange={handleEmailChange}/>
            <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "white"}} rows='5' value={message} placeholder='Message' name='user_message' onChange={handleMessageChange}/>
            <button type='submit' style={{ backgroundColor: buttonColor }}>Submit</button>
          </form>
          {submitted ? (done && <p>Form submitted successfully!</p>) : (error && <p>Please fill in all fields.</p>)}
        </div>
      </div>
    </div>
  )
}

export default Contact