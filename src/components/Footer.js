import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay=".3s">
                <div className="container">
                    <div className="row g-4 footer-inner">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-item">
                                <img src='./newlogo.png' width={'80%'} alt='logo' />
                                {/* <p>Nostrud exertation ullamco labor nisi aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                                <p className="mb-0"><Link className="" to="#">PestKit </Link> &copy; 2023 All Right Reserved.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-white fw-bold mb-4">Usefull Link</h4>
                                <div className="d-flex flex-column align-items-start">
                                    <Link className="btn btn-link ps-0" to="/about"><i className="fa fa-check me-2"></i>About Us</Link>
                                    <Link className="btn btn-link ps-0" to="/contact"><i className="fa fa-check me-2"></i>Contact Us</Link>
                                    <Link className="btn btn-link ps-0" to=""><i className="fa fa-check me-2"></i>Services</Link>
                                    <Link className="btn btn-link ps-0" to=""><i className="fa fa-check me-2"></i>Terms & Condition</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-white fw-bold mb-4">Contact Us</h4>
                                <Link to="" className="btn btn-link w-100 text-start ps-0 pb-3 border-bottom rounded-0"><i className="fa fa-map-marker-alt me-3"></i>Shop No.1, Near Shivkrupa Traders, Jalna Road, Kumbefal, Shendra MIDC, Chh. Sambhajinagar.</Link>
                                <Link to="" className="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><i className="fa fa-phone-alt me-3"></i>+91-8009200953</Link>
                                <Link to="" className="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><i className="fa fa-envelope me-3"></i>support@vbmultiservices.co.in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}



            {/* <!-- Copyright Start --> */}
            <div className="container-fluid copyright bg-dark py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 m-auto text-center text-white">
                        © Copyright VB Multiservices. All Rights Reserved 2023. Designed By <Link className="border-bottom" to="http://vbmultiservices.co.in/">VB Multiservices</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Copyright End --> */}
        </>
    )
}

export default Footer