import React from "react";
import './ContactUs.css';

export default function ContactUs () {
    // REVIEW: good use of a state object here to contain all contact info
    const [contactInfo, setContactInfo] =React.useState({
        name: "",
        email: "",
        comments: ""

    })

    const handleChange = (e) => {
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
        // REVIEW: great use of the spread operator and the event object
        setContactInfo({
            ...contactInfo,
            [e.target.name] : e.target.value
        })
    }

    // REVIEW: good use of error messages but store this at the top of the file
    // all state should be at the top of the file
    const [errorMessage, setErrorMessage] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // REVIEW: This here is redundant if you put required on each input which you have
        // aim to do some more detailed checks like min 6 characters length etc
        if (contactInfo.name.length <= 0 || contactInfo.email.length <= 0 || contactInfo.comments.length <= 0) {
            setErrorMessage('Fill all form data')
        } else {
            setErrorMessage('Comment submitted successfully. We will get back to you via your Email')
        }
    }

    return (
      <div>
        <form onSubmit={handleSubmit} className="form">
            {/* // REVIEW: each input is clear and reusable for the handleChange fucntion */}
            <input 
             name="name" 
             placeholder="Enter your username" 
             value={contactInfo.name} 
             onChange={handleChange}
             required
             className="name"
            />
            <br></br>
            <input
             name="email" 
             placeholder="Enter your email" 
             value={contactInfo.email} 
             onChange={handleChange} 
             required
             className="email"
            />
            <br></br>
            <textarea 
             name="comments" 
             placeholder="Enter your comments" 
             value={contactInfo.comments} 
             onChange={handleChange}
             required
             className="comments"
            />
            <br></br>
            <p>{errorMessage}</p>
            <input type="submit" className="submit"/>
        </form>
      </div>
    )
}