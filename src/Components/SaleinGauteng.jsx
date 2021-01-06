import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../Styling/SaleinGauteng.css'

const SaleinGauteng = () => {
    return (
        <div>
            <MDBContainer id="pfs">
                <hr/>
                {/* It is main Row */}
                <MDBRow>
                    {/* It is property for sale in gauteng */}
                    <MDBCol md="8">
                        <h4 className="titleP">Property for Sale in Gauteng</h4>
                        <MDBRow>
                            <MDBCol lg="3" md="6" sm="6">
                                <ul>
                                    <li><Link to="/">Pretoria</Link></li>
                                    <li><Link to="/">Randburg</Link></li>
                                    <li><Link to="/">Mabopane</Link></li>
                                    <li><Link to="/">Vanderbijlpark</Link></li>


                                </ul>
                            </MDBCol>
                            <MDBCol lg="3" md="6" sm="6">
                                <ul>
                                    <li><Link to="/">Johannesburg</Link></li>
                                    <li><Link to="/">Soweto</Link></li>
                                    <li><Link to="/">Boksburg</Link></li>
                                    <li><Link to="/">Benoni</Link></li>
                                </ul>
                            </MDBCol>
                            <MDBCol lg="3" md="6" sm="6">
                                <ul>
                                    <li><Link to="/">Midrand</Link></li>
                                    <li><Link to="/">Sandton</Link></li>
                                    <li><Link to="/">Kempton Park</Link></li>
                                    <li><Link to="/">Roodepoort</Link></li>
                                </ul>
                            </MDBCol>
                            <MDBCol lg="3" md="6" sm="6">
                                <ul>
                                    <li><Link to="/">Centurion</Link></li>
                                    <li><Link to="/">Alberton</Link></li>
                                    <li><Link to="/">Fochville</Link></li>
                                    <li><Link to="/">Edenvale</Link></li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                        <br />
                        <MDBRow>
                            <MDBCol lg="3" md="6" sm="6">
                                <p className="sub-heading"><Link to="/">Western Cape</Link></p>
                                <ul>
                                    <li><Link to="/">Cape Town</Link></li>
                                    <li><Link to="/">Somerset West</Link></li>
                                </ul>
                            </MDBCol>
                            <MDBCol lg="3" md="6" sm="6">
                                <p className="sub-heading"><Link to="/">KwaZulu Natal</Link></p>
                                <ul>
                                    <li><Link to="/">Durban</Link></li>
                                    <li><Link to="/">Pietermaritzburg</Link></li>
                                </ul>
                            </MDBCol>
                            <MDBCol lg="3" md="6" sm="6">
                                <p className="sub-heading"><Link to="/">Free State</Link></p>
                                <ul>
                                    <li><Link to="/">Bloemfontein</Link></li>
                                    <li><Link to="/">Welkom</Link></li>
                                </ul>
                            </MDBCol>
                            <MDBCol lg="3" md="6" sm="6">
                                <p className="sub-heading"><Link to="/">Mpumalanga</Link></p>
                                <ul>
                                    <li><Link to="/">Nelspruit</Link></li>
                                    <li><Link to="/">Witbank</Link></li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol lg="3" md="6" sm="6">
                                <p className="sub-heading"><Link to="/">Eastern Cape</Link></p>
                                <ul>
                                    <li><Link to="/">Port Elizabeth</Link></li>
                                    <li><Link to="/">East London</Link></li>
                                </ul>
                            </MDBCol>
                            <MDBCol lg="3" md="6" sm="6">
                                <p className="sub-heading"><Link to="/">North West</Link></p>
                                <ul>
                                    <li><Link to="/">Rustenburg</Link></li>
                                    <li><Link to="/">Potchefstroom</Link></li>
                                </ul>
                            </MDBCol>
                            <MDBCol lg="3" md="6" sm="6">
                                <p className="sub-heading"><Link to="/">Limpopo</Link></p>
                                <ul>
                                    <li><Link to="/">Polokwane</Link></li>
                                    <li><Link to="/">Tzaneen</Link></li>
                                </ul>
                            </MDBCol>
                            <MDBCol lg="3" md="6" sm="6">
                                <p className="sub-heading"><Link to="/">Northern Cape</Link></p>
                                <ul>
                                    <li><Link to="/">Port Nolloth</Link></li>
                                    <li><Link to="/">Kimberley</Link></li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    {/* It is property for sale in gauteng */}


                   {/* It is the graph column */}
                    <MDBCol md="4"> 
                        <h4 style={{marginTop:"-4%"}} className="titleP">Gauteng Trends</h4>
                        <br/>
                        <span className="text-dark"><b>Average Property Price</b></span>
                        <div id="girafa" class="p24_graph">
                            <div id="averagePropertyPriceGraph_Province_1" class="js-formatAxis">
                                <i class="fa fa-4x fa-spin fa-spinner"></i>
                                <img src="/Content/images/Optimized/loading.gif?52fc2c" alt="Loading" class="p24_ieLoader" />
                            </div>
                        </div>

                        <Link to="/" title="Gauteng Property Trends" style={{borderRadius:"1%",fontWeight:"lighter",color:"white"}} class="btn btn-block btn-primary">Gauteng Property Trends</Link>
                        <Link to="/" title="South Africa Property Trends" style={{borderRadius:"1%",fontWeight:"lighter",color:"white"}} class="btn btn-block btn-primary">South Africa Property Trends</Link>
                    </MDBCol>
                    {/* It is the graph column */}
                </MDBRow>
                {/* It is main Row */}

                <br/>

                <Link style={{marginLeft:"1.5%",fontFamily:"Cambria"}} to="/">International property for sale</Link>

                <br />

            </MDBContainer>
            <br/>
        </div>
    )
}
export default SaleinGauteng;