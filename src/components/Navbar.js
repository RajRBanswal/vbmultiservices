import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            {/* <!-- Spinner Start --> */}
            {/* <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" role="status"></div>
            </div> */}
            {/* <!-- Spinner End --> */}

            {/* <!-- Topbar Start --> */}
            <div className="container-fluid topbar-top " style={{backgroundColor: '#0152eb'}}>
                <div className="container">
                    <div className="d-flex justify-content-between topbar py-1">
                        <div className="d-flex align-items-center flex-shrink-0 topbar-info">
                            <Link to="#" className="me-4 text-white"><i className="fas fa-phone-alt me-2 text-white"></i>+91-8009200953</Link>
                            <Link to="#" className="text-white"><i className="fas fa-envelope me-2 text-white"></i>support@vbmultiservices.co.in</Link>
                        </div>
                        {/* <div className="text-end pe-4 me-4 border-end border-dark search-btn"> */}
                            {/* <div className="search-form">
                                <form method="post" action="index.html">
                                    <div className="form-group">
                                        <div className="d-flex">
                                            <input type="search" className="form-control border-0 rounded-pill" name="search-input" value="" placeholder="Search Here" required="" />
                                            <button type="submit" value="Search Now!" className="btn"><i className="fa fa-search text-dark"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div> */}
                        {/* </div> */}
                        <div className="d-flex align-items-center justify-content-center topbar-icon">
                            <Link to="#" className="me-4"><i className="fab fa-facebook-f text-white"></i></Link>
                            <Link to="#" className="me-4"><i className="fab fa-twitter text-white"></i></Link>
                            <Link to="#" className="me-4"><i className="fab fa-instagram text-white"></i></Link>
                            <Link to="#" className=""><i className="fab fa-linkedin-in text-white"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <div className="container-fluid bg-light">
                <div className="container">
                    <nav className="navbar navbar-dark navbar-expand-lg py-lg-0">
                        <Link to="/" className="navbar-brand">
                            <img src='./newlogo.png' width={'120'} alt='logo' />
                        </Link>
                        <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-dark"></span>
                        </button>
                        <div className="collapse navbar-collapse me-n3" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/about" className="nav-item nav-link">About</Link>
                                <Link to="#service" className="nav-item nav-link">Services</Link>
                                <Link to="project.html" className="nav-item nav-link">Sales</Link>
                                {/* <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                    <div className="dropdown-menu m-0 bg-primary">
                                        <Link to="price.html" className="dropdown-item">Pricing Plan</Link>
                                        <Link to="blog.html" className="dropdown-item">Blog Post</Link>
                                        <Link to="team.html" className="dropdown-item">Team Members</Link>
                                        <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                                        <Link to="404.html" className="dropdown-item">404 Page</Link>
                                    </div>
                                </div> */}
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
        </>
    )
}

export default Navbar