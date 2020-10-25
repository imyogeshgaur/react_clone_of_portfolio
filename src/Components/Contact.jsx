import React from 'react';
import NavLink from 'react-router-dom';
const Contact = () => {
    return (
        <>
            <section class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
                <h1>get in <span>touch</span></h1>
                <span class="title-bg">contact</span>
            </section>
            <section class="main-content revealator-slideup revealator-once revealator-delay1">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <h3 class="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
                            <p class="open-sans-font mb-3">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                            <p class="open-sans-font custom-span-contact position-relative">
                                <i class="fa fa-envelope-open position-absolute"></i>
                                <span class="d-block">mail me</span>steve@mail.com
                    </p>
                            <p class="open-sans-font custom-span-contact position-relative">
                                <i class="fa fa-phone-square position-absolute"></i>
                                <span class="d-block">call me</span>+216 21 184 010
                    </p>
                            <ul class="social list-unstyled pt-1 mb-5">
                                <li class="facebook"><NavLink title="Facebook" to="#"><i class="fa fa-facebook"></i></NavLink>
                                </li>
                                <li class="twitter"><NavLink title="Twitter" to="#"><i class="fa fa-twitter"></i></NavLink>
                                </li>
                                <li class="youtube"><NavLink title="Youtube" to="#"><i class="fa fa-youtube"></i></NavLink>
                                </li>
                                <li class="dribbble"><NavLink title="Dribbble" to="#"><i class="fa fa-dribbble"></i></NavLink>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-8">
                            <form class="contactform" method="post" action="http://slimhamdi.net/tunis/dark/php/process-form.php">
                                <div class="contactform">
                                    <div class="row">
                                        <div class="col-12 col-md-4">
                                            <input type="text" name="name" placeholder="YOUR NAME" />
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <input type="email" name="email" placeholder="YOUR EMAIL" />
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <input type="text" name="subject" placeholder="YOUR SUBJECT" />
                                        </div>
                                        <div class="col-12">
                                            <textarea name="message" placeholder="YOUR MESSAGE"></textarea>
                                            <button type="submit" class="btn btn-contact">Send Message</button>
                                        </div>
                                        <div class="col-12 form-message">
                                            <span class="output_message text-center font-weight-600 text-uppercase"></span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;