import React from 'react'
import { Link } from 'react-router-dom'
import { Multiselect } from 'multiselect-react-dropdown';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../Styling/About.css'
const About = () => {
    return (
        <div>
            <MDBContainer className="aboutContainer">
                <MDBRow>
                    <MDBCol md="8">
                        <h2 className="title">We're SA's number one property website</h2>
                        <p className="para">Property24.com is South Africa's largest property search portal and is the first place to start your property search! <br/>
                        Property24.com lists houses, flats, vacant land and farms from all of SA's leading estate agents, so whether you're looking to buy or rent, you'll find your perfect home on Property24.com.
                        <br/> Find your dream home on Property24.com by searching through the largest database of private property for sale by estate agents throughout South Africa. To list your property on Property24.com contact one of our trusted Estate Agents.
                        <br/> <br/>
                        <Link to="/">More about Property24.com</Link>
                        </p>

                    </MDBCol>

                    <MDBCol id="line" md="4">
                        <img src="https://www.property24.com/Content/images/Optimized/Marketing/estate_agent.jpg?52fc2c" alt=""/>
                        <h6 style={{marginTop:"5%"}} className="text-dark">Find an Estate Agent in your area</h6>
                        <button className="btn btn-danger btn-lg">Search Estate Agents</button>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <br/>
        </div>
    )
}
export default About;