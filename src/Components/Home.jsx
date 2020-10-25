import React from 'react';
import NavLink from 'react-router-dom';
import About from './About';
const Home = () => {
    return (
        <>
            <section class="container-fluid main-container container-home p-0 revealator-slideup revealator-once revealator-delay1">
                <div class="color-block d-none d-lg-block"></div>
                <div class="row home-details-container align-items-center">
                    <div class="col-lg-4 bg position-fixed d-none d-lg-block"></div>
                    <div class="col-12 col-lg-8 offset-lg-4 home-details text-left text-sm-center text-lg-left">
                        <div>
                            <img src="img/img-mobile.jpg" class="img-fluid main-img-mobile d-none d-sm-block d-lg-none" alt="my" />
                            <h6 class="text-uppercase open-sans-font mb-0 d-block d-sm-none d-lg-block">hi there !</h6>
                            <h1 class="text-uppercase poppins-font"><span>I'm</span>Yogesh Gaur</h1>
                            <p class="open-sans-font">I am currently a 3rd year b.tech CSE student of <NavLink
                                to="https://www.krishnacollege.ac.in" target='_yogesh' class="link">Krishna engineering college ghaziabad</NavLink>. I am
                      currently working on my startup <NavLink to="https://aztecs-india.ueniweb.com/" target='_yogesh' class="link">Aztecs
                        India</NavLink> in which we are planning to make a team that will develop innovative projects that will help our
                      country to grow.My job is to develop Robust,resposnsive and interactive web and mobile apps that will help
                      you in growing your business. i have 9 months of experience in developing web and mobile apps for both
                      android and iOS.</p>
                            <NavLink to={About} class="btn btn-about">more about me</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
