import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
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
        </>
    )
}

export default About