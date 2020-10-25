import React from 'react'
import {NavLink} from 'react-router-dom';
import BlogPost from '../Components/Blog-post';
const Blog = () => {
    return (
        <>
        <section class="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1">
        <h1>my <span>blog</span></h1>
        <span class="title-bg">posts</span>
    </section>
    <section class="main-content revealator-slideup revealator-once revealator-delay1">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                    <article class="post-container">
                        <div class="post-thumb">
                            <NavLink to={BlogPost} class="d-block position-relative overflow-hidden">
                                <img src="img/blog/blog-post-1.jpg" class="img-fluid" alt="Blog Post">
                            </NavLink>
                        </div>
                        <div class="post-content">
                            <div class="entry-header">
                                <h3><NavLink to={BlogPost}>How to Own Your Audience by Creating an Email List</NavLink></h3>
                            </div>
                            <div class="entry-content open-sans-font">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                    <article class="post-container">
                        <div class="post-thumb">
                            <NavLink to={BlogPost} class="d-block position-relative overflow-hidden">
                                <img src="img/blog/blog-post-2.jpg" class="img-fluid" alt="">
                            </NavLink>
                        </div>
                        <div class="post-content">
                            <div class="entry-header">
                                <h3><NavLink to={BlogPost}>Top 10 Toolkits for Deep Learning in 2020</NavLink></h3>
                            </div>
                            <div class="entry-content open-sans-font">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                    <article class="post-container">
                        <div class="post-thumb">
                            <NavLink to={BlogPost} class="d-block position-relative overflow-hidden">
                                <img src="img/blog/blog-post-3.jpg" class="img-fluid" alt="">
                            </NavLink>
                        </div>
                        <div class="post-content">
                            <div class="entry-header">
                                <h3><NavLink to={BlogPost}>Everything You Need to Know About Web Accessibility</NavLink></h3>
                            </div>
                            <div class="entry-content open-sans-font">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                    <article class="post-container">
                        <div class="post-thumb">
                            <NavLink to={BlogPost} class="d-block position-relative overflow-hidden">
                                <img src="img/blog/blog-post-4.jpg" class="img-fluid" alt="">
                            </NavLink>
                        </div>
                        <div class="post-content">
                            <div class="entry-header">
                                <h3><NavLink to={BlogPost}>How to Inject Humor & Comedy Into Your Brand</NavLink></h3>
                            </div>
                            <div class="entry-content open-sans-font">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                    <article class="post-container">
                        <div class="post-thumb">
                            <NavLink to={BlogPost} class="d-block position-relative overflow-hidden">
                                <img src="img/blog/blog-post-5.jpg" class="img-fluid" alt="">
                            </NavLink>
                        </div>
                        <div class="post-content">
                            <div class="entry-header">
                                <h3><NavLink to={BlogPost}>Women in Web Design: How To Achieve Success</NavLink></h3>
                            </div>
                            <div class="entry-content open-sans-font">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
                    <article class="post-container">
                        <div class="post-thumb">
                            <NavLink to={BlogPost} class="d-block position-relative overflow-hidden">
                                <img src="img/blog/blog-post-6.jpg" class="img-fluid" alt="">
                            </NavLink>
                        </div>
                        <div class="post-content">
                            <div class="entry-header">
                                <h3><NavLink to={BlogPost}>Evergreen versus topical content: An overview</NavLink></h3>
                            </div>
                            <div class="entry-content open-sans-font">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="col-12 mt-4">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center mb-0">
                            <li class="page-item"><NavLink class="page-link" to="#">1</NavLink></li>
                            <li class="page-item active"><NavLink class="page-link" to="#">2</NavLink></li>
                            <li class="page-item"><NavLink class="page-link" to="#">3</NavLink></li>
                            <li class="page-item"><NavLink class="page-link" to="#">4</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>   
        </>
    );
}

export default Blog;
