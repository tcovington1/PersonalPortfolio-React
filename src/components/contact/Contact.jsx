import React, {Component} from 'react';
import { Fade } from "react-reveal";


import './Contact.scss';
import { Button } from '../Button';
// import FormInput from '../../form-input/FormInput';

class ContactMob extends Component {
  state = { fullName: "", email: "", subject: "", message: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const contact = { ...this.state }
    // axios.post('/api/contact', contact)
    // .then(res => {
    //   this.props.history.push("/#contact");
    // })
  };

render() {
  const { fullName , email, subject, message } = this.state;
  return(
  
    <div className="contact-cont">
      <form className='contact_form' action="https://formspree.io/tcovingtondev@gmail.com"
        method="POST">
        <div className="contact-heading">
          <h2 className='contact-me title'>Contact Me</h2>
          <p className="contact-me-subhead">I'm always happy to help!</p>
        </div>
        <div className='contact_items'>
        <div className='contact_item'>
        {/* <label>Name</label> */}
        <input
              type="text"
              placeholder="Name"
              required
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
            />
        </div>
        <div className='contact_item'>
        {/* <label>Email</label> */}
        <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={this.handleChange}
            />        
        </div>
        <div className='contact_item'>
        {/* <label>Subject</label> */}
        <input name='subject' 
         type="text"
         placeholder="Subject"
         required
         value={subject}
         onChange={this.handleChange}/>
        </div>
        <div className='contact_item'>
        {/* <label>Message</label> */}
        <textarea
              type="text"
              rows="1"
              cols="10"
              name="message"
              placeholder='Message'
              value={message}
              onChange={this.handleChange}
              wrap='hard'
            />        </div>
        <div className='contact-btn-div'>
          <Button type='submit' buttonStyle='btn-primary-solid' buttonSize="btn-med" >Send Message</Button>
        </div>
        </div>
        </form>
    </div>
      )
}
}





export default ContactMob;