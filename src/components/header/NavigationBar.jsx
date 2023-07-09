import React from 'react';
import {Link} from 'react-router-dom';





const NavigationBar = () => {
  

  return(
    <div >
        <nav className="navbar  bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
          <div className="container-fluid">
            <Link to="/"><b style={{color:'white'}}>Home</b></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to="/menu"><b style={{color:'white'}}>Menu</b></Link>
                </li>
                <li className="nav-item">
                   <Link to="/about"><b style={{color:'white'}}>About</b></Link>
                </li>
                <li className="nav-item">
                   <Link to="/contact"><b style={{color:'white'}}>Contact</b></Link>
                </li>
               
              </ul>
             
            </div>
          </div>
        </nav>
    
  </div>

  )
}
export default NavigationBar;