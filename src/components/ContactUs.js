import React, {useState} from 'react';
import './ContactUs.css'

import Hero from './Hero'
import Navbar from './Navbar';




const initState = {
    message:"",
    name:"",
    email:"",
    subject:"",
}

function ContactUs() {


    const[contactForm, setContactForm] = useState(initState);

    const submitForm = () => {
        console.log(contactForm)
    }

  return (
    <>   

    <main>
            <div className="slider-area2" style={{ backgroundImage: "url('../assets/img/gallery/gallery1.png')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="slider-height2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap hero-cap2 text-center">
                                        <h2 style={{ color: "#0F61EF" }}>Contact Us</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        {/* <!-- ================ contact section start ================= --> */}
        <section className="contact-section">
            <div className="container">
                
                <div >
                    <React.Fragment>
                    <embed src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108910.73606021!2d74.26131534708253!3d31.456516199518045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905a2bbf4e667%3A0xc0a71b5cc54c8627!2sMcDonald&#39;s%20-%20Barkat%20Market!5e0!3m2!1sen!2s!4v1672591737384!5m2!1sen!2s' width="100%" height="100%" />
                    </React.Fragment>
                </div>

            
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title" style={{paddingTop:"15px"}}>Get in Touch</h2>
                    </div>
                    <div className="col-lg-8">
  <form className="form-contact contact_form" id="contactForm">
    <div className="row">
      <div className="col-12">
        <div className="form-group">
          <textarea
            className="form-control w-100"
            name="message"
            id="message"
            cols="30"
            rows="9"
            placeholder="Enter Message"
            onChange={(e) =>
              setContactForm({ ...contactForm, message: e.target.value })
            }
            value={contactForm.message}
          ></textarea>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input
            className="form-control valid"
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name"
            onChange={(e) =>
              setContactForm({ ...contactForm, name: e.target.value })
            }
            value={contactForm.name}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input
            className="form-control valid"
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setContactForm({ ...contactForm, email: e.target.value })
            }
            value={contactForm.email}
          />
        </div>
      </div>
      <div className="col-12">
        <div className="form-group">
          <input
            className="form-control"
            name="subject"
            id="subject"
            type="text"
            placeholder="Enter Subject"
            onChange={(e) =>
              setContactForm({ ...contactForm, subject: e.target.value })
            }
            value={contactForm.subject}
          />
        </div>
      </div>
    </div>
    <div className="form-group mt-3">
      <button
        onClick={submitForm}
        className="button button-contactForm boxed-btn"
      >
        Send Message
      </button>
    </div>
  </form>
</div>


                    <div className="col-lg-3 offset-lg-1">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-home"></i></span>
                            <div className="media-body">
                                <h3>Lahore, Pakistan.</h3>
                                <p>PUCIT Old Campus, 54000</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                            <div className="media-body">
                                <h3>042 111 923 923</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-email"></i></span>
                            <div className="media-body">
                                <h3>support@thevet.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ================ contact section end ================= --> */}
    </main>

    {/* <!-- Scroll Up --> */}
    <div id="back-top" >
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
    </div>
    
    </>
  )
}

export default ContactUs