import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../Styling/MobileApp.css'

const MobileApp = () => {
    return (
        <div style={{backgroundColor:"#f6f6f6"}}>
            <MDBContainer id="pfsm">
                <MDBRow>
                    <MDBCol md="4">
                        <br/>
                        <h3 id="mobileTitle">Property24 on Mobile and Tablet</h3>
                        <p className="paraMobileTablet">Get all of South Africa's leading Estate Agent properties for sale or to rent on your Android or Apple device. With Property24's intuitive interface, you can find and manage your favourite properties with ease.</p>
                        <button id="btnApp" className="btn btn-primary">Download the App</button>
                    </MDBCol>
                    <MDBCol md="8">
                        <img id="mobileAppPic" src="https://www.property24.com/Content/images/Optimized/Marketing/apps.jpg?52fc2c" alt="dkeho kon aaya den aaya den aaya"/>
                       
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <br/>
                    
        </div>
    )
}
export default MobileApp;