import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../Styling/Index.css'

const Index = () => {
    return (
        <div id="indexContainer">
            <br/>
        <MDBContainer>
            <MDBRow>
                {/* This is first Column of Property for sale in Gauteng */}
                <MDBCol style={{textAlign:"left",color:"white"}} sm="8" md="4">
                    <MDBRow>
                        <MDBCol sm="7" md="7">
                            <ul>                               
                                <li><h6><b><Link className="link">Property for sale in Gauteng</Link></b></h6></li>
                                <li><br/></li>
                                <li><Link className="link" to="/">Alberton</Link></li>
                                <li><Link className="link" to="/">Benoni</Link></li>
                                <li><Link className="link" to="/">Boksburg</Link></li>
                                <li><Link className="link" to="/">Centurion</Link></li>
                                <li><Link className="link" to="/">Edenvale</Link></li>
                                <li><Link className="link" to="/">Johannesburg</Link></li>
                                <li><Link className="link" to="/">Kempton Park</Link></li>
                            </ul>
                        </MDBCol>
                        <MDBCol sm="5" md="5">
                            <ul>
                                <div id="break">
                                <li><br /></li>
                                <li><br /></li>
                                <li><br/></li>
                                </div>
                                <li><Link className="link" to="/">Midrand</Link></li>
                                <li><Link className="link" to="/">Pretoria</Link></li>
                                <li><Link className="link" to="/">Randburg</Link></li>
                                <li><Link className="link" to="/">Roodepoort</Link></li>
                                <li><Link className="link" to="/">Sandton</Link></li>
                                <li><Link className="link" to="/">Soweto</Link></li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                {/* This is first Column of Property for sale in Gauteng */}

                {/* Property for sale in Western Cape */}
                <MDBCol sm="12" md="8">
                <MDBRow>
                        <MDBCol style={{textAlign:"left",color:"white"}} md="4">
                            <ul>                               
                                <li><h6><b><Link className="link">Property for sale in Western Cape</Link></b></h6></li>
                                <li><br/></li>
                                <li><Link className="link" to="/">Bellville</Link></li>
                                <li><Link className="link" to="/">Cape Town</Link></li>
                                <li><Link className="link" to="/">Durbanville</Link></li>
                                <li><Link className="link" to="/">Hermanus</Link></li>
                                <li><Link className="link" to="/">Paarl</Link></li>
                                <li><Link className="link" to="/">Somerset West</Link></li>
                                <li><Link className="link" to="/">Stellenbosch</Link></li>
                            </ul>
                        </MDBCol>
                        <MDBCol style={{textAlign:"left",color:"white"}} md="4">
                            <ul>
                                <li><h6><b><Link className="link">Property for sale in KwaZulu Natal</Link></b></h6></li>
                                <li><br/></li>
                                <li><Link className="link" to="/">Ballito</Link></li>
                                <li><Link className="link" to="/">Durban</Link></li>
                                <li><Link className="link" to="/">Hillcrest</Link></li>
                                <li><Link className="link" to="/">Pietermaritzburg</Link></li>
                                <li><Link className="link" to="/">Pinetown</Link></li>
                                <li><Link className="link" to="/">Umhlanga</Link></li>
                                <li><Link className="link" to="/"><br/></Link></li>
                            </ul>
                        </MDBCol>
                        <MDBCol style={{textAlign:"left",color:"white"}} md="4">
                            <ul>
                                <li><h6><b><Link className="link">Property for sale in <br/> KwaZulu Natal</Link></b></h6></li>
                                <li><br/></li>
                                <li><Link className="link" to="/">Bloemfontein</Link></li>
                                <li><Link className="link" to="/">East London</Link></li>
                                <li><Link className="link" to="/">Nelspruit</Link></li>
                                <li><Link className="link" to="/">Polokwane</Link></li>
                                <li><Link className="link" to="/">Port Elizabeth</Link></li>
                                <li><Link className="link" to="/">Rustenburg</Link></li>
                                <li><Link className="link" to="/">Witbank</Link></li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                {/* Property for sale in Western Cape */}
            </MDBRow>
        </MDBContainer>
        </div>
    )
}
export default Index;