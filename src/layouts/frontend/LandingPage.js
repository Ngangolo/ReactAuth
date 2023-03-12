import React from "react";
// import './LandingPage.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect } from 'react'

//Calling WOWjs
import WOW from "wowjs";




function LandingPage() {
     // Defining WOW 
     useEffect(()  => {
           
        const wow = new WOW.WOW({
          live: false,
        })
        wow.init()
      
  })

  return (
    <>

<div className="main_container">
      <header id="home">
        <div className="overlay"></div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h3 className="my-heading ">Therichpost</h3>
                </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars mfa-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                            <a className="nav-link" href="#home">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#overview">OVERVIEW</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#team"> TEAM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials">TESTIMONIALS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">CONTACT</a>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>

        <div className="tophead" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 ">
                        <h1 className="title-main wow fadeInLeft" data-wow-duration="1.5s">Therichpost CREATIVE PAGE</h1>
                        <h3 className="subtitle-main wow fadeInUp" data-wow-duration="1.1s">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.</h3>
            <div className="top-btn-block wow fadeInUp" data-wow-duration="2.5s">
                <a href="#" className="btn-explore ">Explore</a>
                <a href="#" className="btn-account ">Create Account</a>
            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sesgoabajo"></div>
        
        </header>
        <main>
        <section className="overview-wrap" id="overview">
            <div className="container">
                <div className="contenedor">
                    <h2 className="title-overview wow fadeInUp">Overview</h2>
                        <div className="hr"></div>
                    <p className="subtitle-overview wow fadeInUp">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</p>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                            <div className="overview-box mx-auto">
                                <div className="features-icons-icon d-flex">
                                    <i className="fa fa-html5 fa-5x html5 m-auto"></i>
                                </div>
                                <h5>Html 5</h5>
                                <p className=" mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo ornare!</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                            <div className="overview-box mx-auto">
                                <div className="features-icons-icon d-flex">
                                    <i className="fa fa-css3 fa-5x css3 m-auto"></i>
                                </div>
                                <h5>CSS 3</h5>
                                <p className=" mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo ornare!</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                            <div className="overview-box mx-auto">
                                <div className="features-icons-icon d-flex">
                                    <i className="fa fa-android fa-5x android m-auto"></i>
                                </div>
                                <h5>Android</h5>
                                <p className=" mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo ornare!</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                            <div className="overview-box mx-auto">
                                <div className="features-icons-icon d-flex">
                                    <i className="fa fa-drupal fa-5x drupal m-auto"></i>
                                </div>
                                <h5>Drupal</h5>
                                <p className=" mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo ornare!</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
        <section className="galeria">
            <div className="sesgoarriba"></div>
            <div className="imagenes">
                
        <div className="enmica">
                    <h2>Therichpost</h2>
                    <div></div>
                    <h5>"Web design and web development this are the things we enjoy doing daily"</h5>  
                </div>
            </div>
            
            <div className="sesgoabajo"></div>
        </section>

       
        <section className="our-team" id="team">
            <div className="container">
                <h2 className="title-our-team wow fadeInUp">Our Team</h2>
                <div className="hr"></div>
                <p className="subtitle-our-team wow fadeInUp">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</p>

                <ul className="row">
                    <li className="col-12 col-md-6 col-lg-3 wow fadeInLeft" data-wow-duration="1.4s">
                        <div className="mycard-block equal-hight">
                            <figure><img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" className="img-fluid" alt="" /></figure>
                            <h3><a href="#">Lorem Ipsum</a></h3>
            
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            <ul className="follow-us clearfix">
                                <li><a href="#" className="btn btn-circle my-social-btn fb"><i className="fa fa-facebook " ></i></a></li>
                                <li><a href="#" className="btn btn-circle my-social-btn twitter"><i className="fa fa-twitter " ></i></a></li>
                                <li><a href="#" className="btn btn-circle my-social-btn google"><i className="fa fa-linkedin " ></i></a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3 wow fadeInLeft" data-wow-duration="1.4s">
                        <div className="mycard-block equal-hight">
                            <figure><img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" className="img-fluid" alt="" /></figure>
                            <h3><a href="#">Lorem Ipsum</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            <ul className="follow-us clearfix">
                                <li><a href="#" className="btn btn-circle my-social-btn fb"><i className="fa fa-facebook " ></i></a></li>
                                <li><a href="#" className="btn btn-circle my-social-btn twitter"><i className="fa fa-twitter " ></i></a></li>
                                <li><a href="#" className="btn btn-circle my-social-btn google"><i className="fa fa-linkedin " ></i></a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3 wow fadeInLeft" data-wow-duration="1.4s">
                        <div className="mycard-block equal-hight" >
                            <figure><img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" className="img-fluid" alt="" /></figure>
                            <h3><a href="#">Lorem Ipsum</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            <ul className="follow-us clearfix">
                                <li><a href="#" className="btn btn-circle my-social-btn fb"><i className="fa fa-facebook " ></i></a></li>
                                <li><a href="#" className="btn btn-circle my-social-btn twitter"><i className="fa fa-twitter " ></i></a></li>
                                <li><a href="#" className="btn btn-circle my-social-btn google"><i className="fa fa-linkedin " ></i></a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="col-12 col-md-6 col-lg-3 wow fadeInLeft" data-wow-duration="1.4s">
                        <div className="mycard-block equal-hight" >
                            <figure><img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" className="img-fluid" alt="" /></figure>
                            <h3><a href="#">Lorem Ipsum</a></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                            <ul className="follow-us clearfix">
                                <li><a href="#" className="btn btn-circle my-social-btn fb"><i className="fa fa-facebook " ></i></a></li>
                                <li><a href="#" className="btn btn-circle my-social-btn twitter"><i className="fa fa-twitter " ></i></a></li>
                                <li><a href="#" className="btn btn-circle my-social-btn google"><i className="fa fa-linkedin " ></i></a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <section className="testimonials-wrap" id="testimonials">
            <div className="sesgoarriba"></div>
            <div className="container">
                <div className="contenedor">
                    <h2 className="title-testimonials wow fadeInUp">Happy Clients</h2>
                    <div className="hr1"></div>
                    <h3 className="subtitle-testimonials wow fadeInUp">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</h3>

                  

                    <div className="slide-one">
                        <div id="demo" className="carousel slide" data-ride="carousel">

                          
                                <ul className="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" className="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <li data-target="#demo" data-slide-to="2"></li>
                                </ul>

                           
                            <div className="carousel-inner">
                                <div className="carousel-item active ">
                                    <div className="banner-slide">
                                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" className="img-fluid" />
                                        <h5>Lorem Ipsum -</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="banner-slide">
                                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" className="img-fluid" />
                                        <h5>Lorem Ipsum -</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                        </p>
                                    </div>

                                </div>
                                <div className="carousel-item">
                                    <div className="banner-slide">
                                        <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" className="img-fluid" />
                                        <h5>Lorem Ipsum -</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.</p>
                                    </div>

                                </div>
                            </div>

                           
                            <a className="carousel-control-prev " href="#demo" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        <div className="sesgoabajo"></div>
        </section>

        
        <section className="blog-wrap" id="blog">            
            <div className="container-fluid">
                <h2 className="title-blog wow fadeInUp">Latest Posts</h2>
                    <div className="hr"></div>
                    <p className="subtitle-blog wow fadeInUp">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</p>
                <div className="row">
                    <div className="col-md-4 wow bounceInUp" data-wow-duration="1.4s">
                        <div className="card">
                            <figure className="text-center">
                                <img src="https://therichpost.com/wp-content/uploads/2021/04/Angular-11-Reactjs-17-Vue-3-Free-Template-Download-364x225.png" className="img-fluid" />
                            </figure>
                            <div className="card-body">
                                <h5 className="card-title">ANGULAR 11 | REACT 17 | VUE 3 FREE TEMPLATE DOWNLOAD</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus.</p>
                                <a href="https://therichpost.com/angular-11-react-17-vue-3-free-template-download/" className="">Read more</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow bounceInUp" data-wow-duration="1.4s">
                        <div className="card">
                            <figure className="text-center">
                                <img src="https://therichpost.com/wp-content/uploads/2021/04/Angular-11-Sign-In-Form-Designs-364x225.png" className="img-fluid" />
                            </figure>
                            <div className="card-body">
                                <h5 className="card-title">ANGULAR 11 SIGN IN FORM DESIGNS</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus.</p>
                                <a href="https://therichpost.com/angular-11-sign-in-form-designs/" className="">Read more</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow bounceInUp" data-wow-duration="1.4s">
                        <div className="card">
                            <figure className="text-center">
                                <img src="https://therichpost.com/wp-content/uploads/2021/04/Angular-11-Crud-with-Firebase-Database-1-364x225.png" className="img-fluid" />
                            </figure>
                            <div className="card-body">
                                <h5 className="card-title">ANGULAR 11 CRUD WITH FIREBASE DATABASE</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus.</p>
                                <a href="https://therichpost.com/angular-11-crud-with-firebase-database/" className="">Read more</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta contact-wrap" id="contact">

            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto  wow zoomIn" data-wow-duration="1.1s">
                        <div className="cta-inner text-center rounded">
                            <h2 className="section-heading mb-4">
                    <span className="section-heading-upper">Get in Touch With Us</span>
                            </h2>
                            <div className="contactForm">
                                <form>
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" placeholder="Name" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" placeholder="Email" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="mobile" className="form-control" placeholder="Mobile" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="4" cols="50" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-12">
                                            <input type="submit" name="submit" value="Send" className="btn-login" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </main>



        <footer className="footer bg-dark">
        <div className="container">
            <div className="row">               
                <div className="col-lg-12 text-center  my-auto wow slideInLeft">                   
                    <p className="mb-4 mb-lg-0">© Jassa Therichpost.com 2021. All Rights Reserved.</p>
                </div>                
            </div>
        </div>
        </footer>
       
       

      </div>
    </>
  )
}

export default LandingPage