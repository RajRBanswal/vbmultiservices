import React from 'react'

function Contact() {
    return (
        <>
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
                    <div className="contact-detail position-relative p-3">
                        <div className='row g-3'>
                            <div className='col-lg-12'>
                                <iframe className=" w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd" style={{ border: 1 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </>
    )
}

export default Contact