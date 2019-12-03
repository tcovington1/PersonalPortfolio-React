import React, {Component} from 'react';
import { Fade } from "react-reveal";


import './ContactMob.scss';
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
      <form className='contact_form' action="https://formspree.io/mkngbaab"
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
          <button type='submit' className='contact_submit' >Send Message</button>
        </div>
        </div>
        </form>
    </div>
      )
}
}




//   render() {
//     const { firstName, lastName, phone, email, questions } = this.state;
//     return (
//       <div className="contact-wrapper">
//         <Fade>
//           <div className="mob-title" style={{ paddingBottom: "4em" }}>
//             <MobTitle>Contact</MobTitle>
//           </div>
//         </Fade>
//         <Fade duration={2000}>
//           {/* Either my own form orrr */}
//           {/* --------------------- */}
//           <form className="contact-column-mobile" action="https://formspree.io/hayleyhansentherapy@gmail.com"
//             method="POST">
//             <input
//               type="text"
//               placeholder="First Name"
//               className="contact_item"
//               required
//               name="firstName"
//               value={firstName}
//               onChange={this.handleChange}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               className="contact_item"
//               required
//               name="lastName"
//               value={lastName}
//               onChange={this.handleChange}
//             />
//             <input 
//               type="tel"
//               placeholder="Phone"
//               pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
//               className="contact_item"
//               required
//               name="phone"
//               value={phone}
//               onChange={this.handleChange}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="contact_item"
//               required
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//             <div className="select-window">
//               <label>How did you hear about us?</label>
//               <select name="where" className="select-style">
//                 <option></option>
//                 <option value="friend" name="friend">
//                   Friend
//                 </option>
//                 <option value="facebook" name="facebook">
//                   FaceBook
//                 </option>
//                 <option value="google" name="google">
//                   Google
//                 </option>
//                 <option value="professional" name="professional">
//                   Professional
//                 </option>
//                 <option value="other" name="other">
//                   Other
//                 </option>
//               </select>
//             </div>
//             <label>Is there anything I should know before contacting you?</label>
//             <textarea
//               type="text"
//               className="textarea-style-mobile"
//               rows="1"
//               cols="10"
//               name="questions"
//               value={questions}
//               onChange={this.handleChange}
//               wrap='hard'
//             />
//             <ButtonDivMob style={{padding: '1em 0em'}}>
//               <MobileButton type="submit" className="contact-button">
//                 Lets Chat
//               </MobileButton>
//             </ButtonDivMob>
//           </form>
//         </Fade>
//       </div>
//     );
//   }
// }

// export default ContactMobile;


export default ContactMob;