import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">
                    <img src="https://images.vexels.com/media/users/3/131563/isolated/preview/93e49b6c5668d156aaee447bd9804fab-newspaper-circle-icon-by-vexels.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                        News World</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse border-white" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item "><Link className="nav-link text-white" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/technology">Technology</Link></li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;