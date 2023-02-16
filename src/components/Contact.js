import React, {useState} from 'react'

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
        {/* <!--? Hero Start --> */}
        {/* <Hero title="Contact Us" /> */}
        {/* <!-- Hero End --> */}


        {/* <!-- ================ contact section start ================= --> */}
        <section className="contact-section">
            <div className="container">
                {/* <div className="d-none d-sm-block mb-5 pb-4">
                    <div id="map" style="height: 480px; position: relative; overflow: hidden;"><div style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);"><div className="gm-style" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;"><div tabindex="0" style="position: absolute; z-ight: 17px; vertical-align: middle; width: 52px; user-select: none;"></div><div style="line-height: 20px; margin: 15px 0px;"><span style="color: rgba(0, 0, 0, 0.87); font-size: 14px;">This page can't load Google Maps correctly.</span></div><table style="width: 100%;"><tr><td style="line-height: 16px; vertical-align: middle;"><a href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&amp;utm_medium=degraded&amp;utm_campaign=billing#api-key-and-billing-errors" target="_blank" rel="noopener" style="color: rgba(0, 0, 0, 0.54); font-size: 12px;">Do you own this website?</a></td><td style="text-align: right;"><button className="dismissButton">OK</button></td></tr></table></div></div>
                    <script>
                        function initMap() {
                            var uluru = {
                                lat: -25.363,
                                lng: 131.044
                            };
                            var grayStyles = [{
                                    featureType: "all",
                                    stylers: [{
                                            saturation: -90
                                        },
                                        {
                                            lightness: 50
                                        }
                                    ]
                                },
                                {
                                    elementType: 'labels.text.fill',
                                    stylers: [{
                                        color: '#ccdee9'
                                    }]
                                }
                            ];
                            var map = new google.maps.Map(document.getElementById('map'), {
                                center: {
                                    lat: -31.197,
                                    lng: 150.744
                                },
                                zoom: 9,
                                styles: grayStyles,
                                scrollwheel: false
                            });
                        }
                    </script>
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&amp;callback=initMap">
                    </script>
    
                </div> */}

                <div >
                    <React.Fragment>
                    
                    <embed src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.3167943287763!2d74.30744071496825!3d31.570359481353126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ca7d960f837%3A0xc0bb6ddf0568a651!2sPunjab%20University%20College%20of%20Information%20Technology%20Old%20Campus!5e0!3m2!1sen!2sus!4v1674161615018!5m2!1sen!2sus' width="90%" height="300%" />
                    </React.Fragment>
                </div>

            
                <div className="row">
                    <div className="col-12">
                        <h1 className="contact-title">Get in Touch</h1>
                    </div>
                    <div className="col-lg-8">
                        <form className="form-contact contact_form" id="contactForm">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" 
                                        // onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Message'"
                                        placeholder=" Enter Message"
                                        onChange={e => setContactForm({...contactForm, message:e.target.value})}
                                        value={contactForm.message}></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="name" id="name" type="text" 
                                        // onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter your name'" 
                                        placeholder="Enter your name" 
                                        onChange={e => setContactForm({...contactForm, name:e.target.value})}
                                        value={contactForm.name}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input className="form-control valid" name="email" id="email" type="email" 
                                        // onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter email address'"
                                        placeholder="Email" 
                                        onChange={e => setContactForm({...contactForm, email:e.target.value})}
                                        value={contactForm.email}/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input className="form-control" name="subject" id="subject" type="text" 
                                        // onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Subject'" 
                                        placeholder="Enter Subject" 
                                        onChange={e => setContactForm({...contactForm, subject:e.target.value})}
                                        value={contactForm.subject}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button onClick={submitForm} className="button button-contactForm boxed-btn">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-home"></i></span>
                            <div className="media-body">
                                <h3>abc, xyz, CCCC</h3>
                                <p>abcd, ffff, 12345</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                            <div className="media-body">
                                <h3>042 123456789</h3>
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
    {/* <div id="back-top" >
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
    </div> */}
    
    </>
  )
}

export default ContactUs