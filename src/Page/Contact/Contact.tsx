import { FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import './Contact.css';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaEnvelope, FaPhone } from 'react-icons/fa';
import React from 'react';
import emailjs from "emailjs-com"; 
const Contact = () => {
  const sendEmail = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    emailjs.
    sendForm(
      "service_ox6jzsh",
      "template_la4wu0o",
      e.currentTarget,
      "atsX1HplYtOe0DMrY"
    ).then((result)=>{
      console.log("Email sent successfully!", result);
    })
    .catch((error)=>{
      console.log("Failed to send email:", error);
      alert("حدث خطأ أثناء إرسال النموذج");
      
    })
    e.currentTarget.reset();
  }
  return (
    <div className="Contact">
      <h1 className="AboutMe-title">
        Get In <span>Touch</span>
      </h1>

      <div className="contact-container">
        {/* Left Side - Info */}
        <div className="contact-info">
          <h2>Don't be Shy !</h2>
          <p>
            When you obtain a website for your business, you will save time and reduce effort for you and the client, and thus you will increase the number of your customers and increase your profits.
          </p>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <span>Email</span>
              <p><a href="mail-to:nevenghasoun@gmail.com">nevenghasoun@gmail.com</a></p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div>
              <span>Call me</span>
              <p><a href="tel:0993748380">+963 993 748 380</a></p>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/neven.ghasoun/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/nievenghasoun?igsh=M3VtNXg0Z204MDVy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/993748380" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/in/neven-ghasoun-062542230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="input-group">
            <input type="text" placeholder="Your Name" name='userName' />
            <input type="email" placeholder="Your Email" name='userEmail' />
            <input type="text" placeholder="Your Phone Number" name='userPhone' />
          </div>
          <textarea placeholder="Your Message" name='userMessage'></textarea>
          <button type="submit" className="send-button">
            Send Message
            <div className="send-icon">
              <FaTelegramPlane />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
