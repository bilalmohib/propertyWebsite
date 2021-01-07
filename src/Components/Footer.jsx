import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { AiFillFacebook,AiFillApple,AiFillAndroid } from 'react-icons/ai';
import {FaTwitterSquare,FaPinterestSquare,FaYoutube,FaFacebook} from 'react-icons/fa';
import '../Styling/Footer.css';

const Footer = () => {
    return(
        <div>
            <br/>
            <MDBContainer id="footerContainer">
                <MDBRow>
                    <MDBCol md="6">
                    <a class="navbar-brand" id="logoFooter" href="#">property<span style={{ color: "red" }}>24</span></a> 
                    </MDBCol>
                    <MDBCol md="6">
                    <ul id="fIconsList">
                        <li className="ficons"><Link style={{color:"inherit",textDecoration:"none"}}  to="/"><FaFacebook/></Link></li>
                        <li className="ficons"><Link style={{color:"inherit",textDecoration:"none"}}  to="/"><FaTwitterSquare/></Link></li>
                        <li className="ficons"><Link style={{color:"inherit",textDecoration:"none"}}  to="/"><FaPinterestSquare/></Link></li>
                        <li className="ficons"><Link style={{color:"inherit",textDecoration:"none"}}  to="/"><FaYoutube/></Link></li>
                    </ul> 
                    </MDBCol>
                    
                </MDBRow>
                <hr/>               
                <MDBRow className="footerSecondRow">
                    <MDBCol lg="8" sm="8" md="8">
                        <ul id="fnavBlock">
                            <li className="fnav"><Link to="/">About Us</Link></li>
                            <li className="fnav"><Link  to="/">Contact Us</Link></li>
                            <li className="fnav"><Link to="/">Feedback</Link></li>
                            <li className="fnav"><Link to="/">Join Our Team</Link></li>
                            <li className="fnav"><Link to="/">Terms & Conditions</Link></li>
                            <li className="fnav"><Link to="/">Sitemap</Link></li>
                            <li className="fnav"><Link to="/">Agent Zone</Link></li>
                        </ul>
                        <br/>
                        <h6 id="cr">Copyright © 2020 Property24 - All rights reserved.</h6>
                    </MDBCol>
                    <MDBCol lg="4" sm="4" md="4">
                         <h6 id="fmobileIconsListHeading">Download the App</h6>
                         <ul id="fmobileIconsList">
                             <li className="ficonsMobile"><Link style={{color:"inherit",textDecoration:"none"}} to="/"><AiFillApple/></Link></li>
                             <li className="ficonsMobile"><Link style={{color:"inherit",textDecoration:"none"}} to="/"><AiFillAndroid/></Link></li>
                         </ul>
                    </MDBCol>
                </MDBRow>
                
            </MDBContainer>
 
        </div>
    )
}
export default Footer;