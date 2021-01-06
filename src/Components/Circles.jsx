import React from 'react'
import { Link } from 'react-router-dom'
import { Multiselect } from 'multiselect-react-dropdown';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../Styling/Circles.css'
let Circles = () => {
    return (
      
            <MDBContainer style={{paddingLeft:"3%"}}>
                <MDBRow>
                    <MDBCol lg="3" md="4" sm="6">
                        <div>
                            <img className="img" src="https://www.property24.com/Content/images/Optimized/Marketing/property_alerts.jpg?52fc2c" alt="This is a image" />
                            <h4 className="title">Propert Alert</h4>
                            <p className="disc">Sign up for an account and get customised property alerts in your inbox.</p>
                            <button className="btn button">Sign Up Now</button>
                        </div>
                    </MDBCol>
                    <MDBCol style={{marginLeft:"5%"}} lg="3" md="4" sm="6">
                        <div>
                            <img className="img" src="https://www.property24.com/Content/images/Optimized/Marketing/sold_prices.jpg?52fc2c" alt="This is a image" />
                            <h4 className="title">Sold Prices</h4>
                            <p className="disc" style={{width:"80%",margin:"0 auto"}}>Find the value of any property in South Africa.</p>
                            <button className="btn button" style={{marginTop:"16%"}}>View Sold Prices</button>
                        </div>
                    </MDBCol>
                    <MDBCol style={{marginLeft:"5%"}} lg="3" md="4" sm="12">
                        <div>
                            <img className="img" src="https://www.property24.com/Content/images/Optimized/Marketing/buying_selling.jpg?52fc2c" alt="This is a image" />
                            <h4 className="title">Buying or Selling?</h4>
                            <p className="disc">Get all the information you will need in our Property 101 guides.</p>
                            <button className="btn button" style={{marginTop:"10%"}}>View Property101</button>
                        </div>
                    </MDBCol>
                </MDBRow>
                
            </MDBContainer>
       
    )
}
export default Circles;