import React from 'react'
import { Link } from 'react-router-dom'
import Testimonials from './Testimonials'

function Home() {
    return (
        <>
            {/* <!-- Carousel Start --> */}
            <div className="container-fluid px-0">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="./assets/img/carousel-1.jpg" className="img-fluid" alt="First slide" />
                            <div className="carousel-caption">
                                <div className="container carousel-content">
                                    <h6 className="text-white h4 animated fadeInUp">Best IT Solutions</h6>
                                    <h1 className="text-white display-lg-3 mb-4 animated fadeInRight">An Innovative IT Solutions Agency</h1>
                                    <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./assets/img/carousel-2.jpg" className="img-fluid" alt="Second slide" />
                            <div className="carousel-caption">
                                <div className="container carousel-content">
                                    <h6 className="text-white h4 animated fadeInUp">Best IT Solutions</h6>
                                    <h1 className="text-white display-lg-3 mb-4 animated fadeInLeft">Quality Digital Services You Really Need!</h1>
                                    <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}

            {/* <!-- About Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".3s">
                            <div className="about-img">
                                <img src="./newlogo.png" className="img-fluid h-100" alt="img" />
                                <div className=" experiences">
                                    <h1 className="display-4">10</h1>
                                    <h6 className="fw-bold">Years Of Experiences</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".6s">
                            <div className="about-item overflow-hidden">
                                <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">About Us</h5>
                                <h1 className="display-6 mb-2">We are Provide the IT Related Services Since 2013</h1>
                                <p className="fs-5" style={{ textAlign: 'justify' }}>
                                    All Type of computer / laptop / Printer / CCTV cameras and its spare parts available for Business / Home setup of all sizes at reasonable prices.
                                </p>
                                <Link to='' className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-5">Read more...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
            {/* <!-- Services Start --> */}
            <div className="container-fluid services py-5" id='service'>
                <div className="container text-center">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                        <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Our Services</h5>
                        <h1 className="display-5">Common Services</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                            <div className="bg-light rounded p-5 services-item">
                                <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="mb-4 rounded-circle services-inner-icon">
                                        <i><img src='./assets/serviceIcon/laptop.png' alt='' width={'70%'} /></i>
                                    </div>
                                </div>
                                <h4>Laptop / Computer Repairing</h4>
                                <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                                <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                            <div className="bg-light rounded p-5 services-item">
                                <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="mb-4 rounded-circle services-inner-icon">
                                        <i><img src='./assets/serviceIcon/cctv-camera.png' alt='' width={'70%'} /></i>
                                    </div>
                                </div>
                                <h4 className="text-center">CCTV Installation & Repairing</h4>
                                <p className="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                                <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="bg-light rounded p-5 services-item">
                                <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="mb-4 rounded-circle services-inner-icon">
                                        <i><img src='./assets/serviceIcon/printer.png' alt='' width={'70%'} /></i>
                                    </div>
                                </div>
                                <h4 className="text-center">Printer Support</h4>
                                <p className="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                                <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay=".9s">
                            <div className="bg-light rounded p-5 services-item">
                                <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="mb-4 rounded-circle services-inner-icon">
                                        <i><img src='./assets/serviceIcon/technical-support.png' alt='' width={'70%'} /></i>
                                    </div>
                                </div>
                                <h4 className="text-center">Network Support</h4>
                                <p className="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                                <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-4 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                            <div className="bg-light rounded p-5 services-item">
                                <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <div className="mb-4 rounded-circle services-inner-icon">
                                        <i><img src='./assets/serviceIcon/antivirus.png' alt='' width={'70%'} /></i>
                                    </div>
                                </div>
                                <h4 className="text-center">Anti Virus</h4>
                                <p className="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisc elit sed.</p>
                                <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3">Learn More</button>
                            </div>
                        </div>
                    </div>

                    {/* <button type="button" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-4 wow fadeInUp" data-wow-delay=".3s">More Services</button> */}
                </div>
            </div>
            {/* <!-- Services End --> */}

            {/* <!-- Project Start --> */}
            <div className="container-fluid project py-5 mb-5">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: 600 + 'px' }}>
                        <h5 className="text-primary">Sales</h5>
                        <h1>Sales Product</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="./assets/img/project-1.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Web design</h4>
                                            <p className="m-0 text-white">Web Analysis</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="./assets/img/project-2.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Cyber Security</h4>
                                            <p className="m-0 text-white">Cyber Security Core</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="./assets/img/project-3.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Mobile Info</h4>
                                            <p className="m-0 text-white">Upcomming Phone</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="./assets/img/project-4.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Web Development</h4>
                                            <p className="m-0 text-white">Web Analysis</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="./assets/img/project-5.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">Digital Marketing</h4>
                                            <p className="m-0 text-white">Marketing Analysis</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src="./assets/img/project-6.jpg" className="img-fluid w-100 rounded" alt="" />
                                    <div className="project-content">
                                        <a href="#" className="text-center">
                                            <h4 className="text-secondary">keyword Research</h4>
                                            <p className="m-0 text-white">keyword Analysis</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Project End --> */}

            {/* <!-- Blog Start --> */}
            <div className="container-fluid blog py-5 mb-5">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                        <h5 className="text-primary">Accessories</h5>
                        <h1>All Types Accessories</h1>
                    </div>
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-3 col-xl-3 wow fadeIn" data-wow-delay=".3s">
                            <div className="blog-item position-relative bg-light rounded">
                                {/* <img src="./assets/img/blog-1.jpg" className="img-fluid w-100 rounded-top" alt="" /> */}
                                <div className="blog-content text-center position-relative px-3" style={{ marginTop: '-25px' }}>
                                    <img src="./assets/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt="" />
                                    <h5 className="mb-3">WiFi Routers</h5>
                                </div>
                                <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    {/* <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                    <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-3 wow fadeIn" data-wow-delay=".5s">
                            <div className="blog-item position-relative bg-light rounded">
                                {/* <img src="./assets/img/blog-2.jpg" className="img-fluid w-100 rounded-top" alt="" /> */}
                                <div className="blog-content text-center position-relative px-3" style={{ marginTop: '-25px' }}>
                                    <img src="./assets/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt="" />
                                    <h5 className="mb-3">Pendrive & Hard Disks</h5>
                                </div>
                                <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    {/* <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                    <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-3 wow fadeIn" data-wow-delay=".7s">
                            <div className="blog-item position-relative bg-light rounded">
                                {/* <img src="./assets/img/blog-3.jpg" className="img-fluid w-100 rounded-top" alt="" /> */}
                                <div className="blog-content text-center position-relative px-3" style={{ marginTop: '-25px' }}>
                                    <img src="./assets/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt="" />
                                    <h5 className="mb-3">Motherboards / RAM</h5>
                                </div>
                                <div className="blog-coments d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    {/* <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                    <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-3 wow fadeIn" data-wow-delay=".7s">
                            <div className="blog-item position-relative bg-light rounded">
                                {/* <img src="./assets/img/blog-3.jpg" className="img-fluid w-100 rounded-top" alt="" /> */}
                                <div className="blog-content text-center position-relative px-3" style={{ marginTop: '-25px' }}>
                                    <img src="./assets/img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt="" />
                                    <h5 className="mb-3">Mobile Accessories</h5>
                                </div>
                                <div className="blog-coments d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                    {/* <a href="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></a>
                                    <a href="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Blog End --> */}


            {/* <!-- Testimonial Start --> */}
            <div className="container-fluid testimonial py-5 mb-5">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                        <h5 className="text-primary">Our Testimonial</h5>
                        <h1>Our Client Saying!</h1>
                    </div>
                    <div id="testim" className="testim">
                        {/* <!--         <div className="testim-cover"> --> */}
                        <div className="wrap">

                            <span id="right-arrow" className="arrow right fa fa-chevron-right"></span>
                            <span id="left-arrow" className="arrow left fa fa-chevron-left "></span>
                            <ul id="testim-dots" className="dots">
                                <li className="dot active"></li><li className="dot"></li><li className="dot"></li><li className="dot"></li><li className="dot"></li>
                            </ul>
                            <div id="testim-content" className="cont">

                                <div className="active">
                                    <div className="img">
                                        <img src="" alt="" /></div>
                                    <h2>Lorem P. Ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                </div>

                                <div>
                                    <div className="img">
                                        <img src="" alt="" /></div>
                                    <h2>Mr. Lorem Ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                </div>

                                <div>
                                    <div className="img">
                                        <img src="" alt="" /></div>
                                    <h2>Lorem Ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                </div>

                                <div>
                                    <div className="img">
                                        <img src="" alt="" /></div>
                                    <h2>Lorem De Ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                </div>

                                <div>
                                    <div className="img">
                                        <img src="" alt="" /></div>
                                    <h2>Ms. Lorem R. Ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                </div>

                            </div>

                        </div>
                        {/* <!--         </div> --> */}
                    </div>

                </div>
            </div>

            {/* <!-- Testimonial End --> */}

            {/* <!-- Contact Start --> */}
            <div className="container-fluid py-5 mb-5">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: 600 + 'px' }}>
                        <h5 className="text-primary">Get In Touch</h5>
                        <h1 className="mb-3">Contact for any query</h1>
                    </div>
                    <div className="contact-detail position-relative p-3">
                        <div className="row g-3">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 wow fadeIn mb-3" data-wow-delay=".3s">
                                        <div className="card p-3 text-center">
                                            <h1><i className="fas fa-map-marker-alt"></i></h1>
                                            <a href="" target="_blank" className="h5">
                                                Shop No.1, Near Shivkrupa Traders, Jalna Road, Kumbefal, Shendra MIDC, Chh. Sambhajinagar.
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 wow fadeIn" data-wow-delay=".5s">
                                        <div className="card h-100 p-3 text-center">
                                            <h1><i className="fa fa-phone"></i></h1>
                                            <a href="tel:+918009200953" target="_blank">+91-8009200953</a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 wow fadeIn" data-wow-delay=".7s">
                                        <div className="card h-100 p-3 text-center">
                                            <h1><i className="fa fa-envelope"></i></h1>
                                            <a href="mailto:support@vbmultiservices.co.in" target="_blank">support@vbmultiservices.co.in</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <iframe className=" w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd" style={{ border: 1 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                                <div className="row">
                                    <div className="mb-2">
                                        <input type="text" className="form-control border-1 " placeholder="Your Name" />
                                    </div>
                                    <div className="col-lg-6 col-12 mb-2">
                                        <input type="email" className="form-control border-1 " placeholder="Your Email" />
                                    </div>
                                    <div className="col-lg-6 col-12 mb-2">
                                        <input type="text" className="form-control border-1 " placeholder="Mobile Number" />
                                    </div>
                                    <div className="mb-2">
                                        <input type='text' className="w-100 form-control border-1" rows="6" cols="10" placeholder="Subject" />
                                    </div>
                                    <div className="mb-2">
                                        <textarea className="w-100 form-control border-1" rows="3" cols="10" placeholder="Message"></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn bg-primary text-white px-5" type="button">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </>
    )
}

export default Home