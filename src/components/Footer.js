import React from "react";
import the_vet_logo from "../assets/img/TheVet (3).png";

const Footer = () => {
  return (
    <div>
      <footer>
        {/* <!--? Footer Start--> */}
        <div
          className="footer-area section-bg"
          data-background="assets/img/gallery/footer_bg.jpg"
        >
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    {/* <!-- logo --> */}
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src={the_vet_logo} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>About Us</h4>
                      <div className="footer-pera">
                        <p className="info1">
                          The Vet is a new kind of veterinary experience that
                          works better for everyone: the vets, the pets, and the
                          pet Parents .With proprietary technology that helps
                          prevent, diagnose and treat medical conditions, we are
                          able to deliver clinic-level pet care without the
                          clinic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-number mb-50">
                      <h4>
                        <span>+92323 </span>0147169
                      </h4>
                      <p>TheVet@gmail.com</p>
                    </div>
                    {/* <!-- Form --> */}
                    <div className="footer-form">
                      <div id="mc_embed_signup">
                        <form
                          target="_blank"
                          action=""
                          method="get"
                          className="subscribe_form relative mail_part"
                          novalidate="true"
                        >
                          <input
                            type="email"
                            name="EMAIL"
                            id="newsletter-form-email"
                            placeholder=" Email Address "
                            className="placeholder hide-on-focus"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Your email address'"
                          />
                          <div className="form-icon">
                            <button
                              type="submit"
                              name="submit"
                              id="newsletter-submit"
                              className="email_icon newsletter-submit button-contactForm"
                            >
                              Send
                            </button>
                          </div>
                          <div className="mt-10 info"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-9 col-lg-8">
                  <div className="footer-copy-right text-white">
                    {/* <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | The Vet
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p> */}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  {/* <!-- Footer Social --> */}
                  <div className="footer-social f-right">
                    <a href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.facebook.com">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/">
                      <i className="fas fa-globe"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer End--> */}
      </footer>
    </div>
  );
};

export default Footer;
