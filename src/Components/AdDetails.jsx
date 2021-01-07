import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { AiFillFacebook, AiFillApple, AiFillAndroid, AiFillHeart, AiOutlineCar, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaTwitterSquare, FaPinterestSquare, FaYoutube, FaFacebook } from 'react-icons/fa';
import { BiBed, BiLeftArrow } from 'react-icons/bi';
import { RiArrowDownSLine, RiParkingBoxLine } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsSquare } from 'react-icons/bs';
import '../Styling/AdDetails.css';

import Header from './Header';
import Index from './Index';
import Footer from './Footer';
import SlideShow from './SlideShow';

const AdDetails = () => {
    return (
        <div>

            <Header />
            {/* this is the top navigation upper to the slide show */}

            <div id="topNav">
                <div id="topNavText">
                    <div id="lhistory">
                        <Link className="history"> <AiOutlineArrowLeft /> Back to Results </Link>
                    </div>
                    <div id="hideIt">
                        <Link className="history"> Property for Sale </Link>
                        <Link className="history"> <AiOutlineArrowRight /> Gauteng </Link>
                        <Link className="history"> <AiOutlineArrowRight /> Edenvale </Link>
                        <Link className="history"> <AiOutlineArrowRight /> Eden Glen </Link>
                        <Link className="history"> <AiOutlineArrowRight /> 105446339 </Link>
                    </div>
                    <div id="rhistory">
                        <Link className="history"> Move to Next <AiOutlineArrowRight /> </Link>
                    </div>
                </div>
            </div>


            {/* this is the top navigation upper to the slide show */}
            <SlideShow />


            {/* This is the addetails container */}
            <MDBContainer>
                <MDBRow id="RowDetailsOfData">
                    <MDBCol className="titleColumn" md="12" lg="9">
                        <MDBRow className="titleRowInsideCol">
                            <div style={{ display: "flex", paddingTop: "2%" }}>
                                <h3 className="text-primary priceTitleColumn">R 899 000</h3>
                                <Link to="/details" className="text-primary textTitleColumn">  Bond Costs <RiArrowDownSLine /> </Link>
                                <div id="heart3">
                                    <AiFillHeart />
                                </div>
                            </div>
                            <h5 style={{ fontSize: "20px", fontWeight: "lighter" }}>3 Bedroom Apartment / Flat for Sale in Eden Glen</h5>
                            <p className="text-primary textSmall">36 Eden Village, 999 Harris Avenue, Eden Glen, Edenvale</p>
                            <div style={{ display: "flex" }}>
                                <div style={{ display: "flex" }}> <p className="things2"> <AiOutlineCar /> </p> <span className="thingsText2">2</span></div>
                                <div style={{ display: "flex", paddingLeft: "2%" }}> <p className="things2"> <BiBed /> </p></div> <span className="thingsText2">4</span>
                                <div style={{ display: "flex", paddingLeft: "2%" }}> <p className="things2"> <BsSquare /> </p></div> <span className="thingsText2">88 m<sup>2</sup></span>
                            </div>
                        </MDBRow>
                        <MDBRow className="titleRowInsideCol">
                            <h5 className="textSmallSomeBig">3 Bedroom Townhouse in Eden Village, Eden Glen</h5>
                            <p className="textSmall">This neat unit is on the first floor situated in well maintained security complex close to Karaglen Shopping Centre, Virgin Active, Eden Glen Primary and High Schools. easy access to OR Tambo airport, R24, R21 and N3. The unit consists of 3 bedrooms, 2 bathrooms, open plan kitchen/lounge/dining room. The unit is fully tiled for easy maintenance. Modern Bathrooms. The complex has a swimming pool and braai facilities. One covered parking and one open parking.</p>
                        </MDBRow>
                        <MDBRow className="titleRowInsideCol">
                            <div>
                                <div style={{ display: "flex" }}> <p className="things3"> <AiOutlineCar /> </p> <span className="thingsText3"> Cars : 5</span></div>

                                <div style={{ display: "flex" }}> <p className="things3"> <BiBed /> </p> <span className="thingsText3"> Bedrooms: 2</span></div>
                                <div style={{ display: "flex" }}> <p className="things3"> <RiParkingBoxLine /> </p> <span className="thingsText3"> Parking: 2</span></div>
                            </div>
                        </MDBRow>
                        <MDBRow className='titleRowInsideCol' id="rowCollapsesWali">

                            <p
                                className="text-dark bg-transparent"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#row1"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                            >
                                Property Overview <span className="arrowDown"><RiArrowDownSLine /></span>
                            </p>
                            <hr />
                            <div className="collapse mt-3" id="row1">
                                <table className="table table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <td scope="row">Listing Number</td>
                                            <td>105446339</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Type of Property</td>
                                            <td>Apartment / Flat</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Street Address</td>
                                            <td className="text-primary">36 Eden Village, 999 Harris Avenue, Eden Glen</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Description</td>
                                            <td>First Floor</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Lifestyle</td>
                                            <td colspan="2">Security Complex</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Listing Date</td>
                                            <td colspan="2">04 August 2017</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Erf Size</td>
                                            <td colspan="2">88 m²</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Floor Size</td>
                                            <td colspan="2">88 m²</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Price per m²</td>
                                            <td colspan="2">R 10 216</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Levies</td>
                                            <td colspan="2">R 1 000</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Rates and Taxes</td>
                                            <td colspan="2">R 370</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <p
                                className="text-dark bg-transparent"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#row2"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                            >
                                Rooms <span className="arrowDown"><RiArrowDownSLine /></span>
                            </p>
                            <hr />
                            <div className="collapse mt-3" id="row2">
                                <table className="table table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <td scope="row">Bedrooms</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Bathrooms</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Kitchens</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Lounges</td>
                                            <td>1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p
                                className="text-dark bg-transparent"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#row3"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                            >
                                External Features <span className="arrowDown"><RiArrowDownSLine /></span>
                            </p>
                            <hr />
                            <div className="collapse mt-3" id="row3">
                                <table className="table table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <td scope="row">Parking</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Pool</td>
                                            <td>Communal Pool</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p
                                className="text-dark bg-transparent"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#row4"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                            >
                                Building <span className="arrowDown"><RiArrowDownSLine /></span>
                            </p>
                            <hr />
                            <div className="collapse mt-3" id="row4">
                                <table className="table table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <td scope="row">Style</td>
                                            <td>Mediterranean</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Facing</td>
                                            <td>North</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Roof</td>
                                            <td>Tile</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Wall</td>
                                            <td>Face-brick, Plaster</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Window</td>
                                            <td>Steel</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p
                                className="text-dark bg-transparent"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#row5"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                            >
                                Other Features <span className="arrowDown"><RiArrowDownSLine /></span>
                            </p>
                            <hr />
                            <div class="collapse mt-3" id="row5">
                                <table className="table table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <td scope="row">Security</td>
                                            <td>24 Hour Access, Guard House</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p
                                className="text-dark bg-transparent"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#row6"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                            >
                                Points of Interest <span className="arrowDown"><RiArrowDownSLine /></span>
                            </p>
                            <hr />
                            <div class="collapse mt-3" id="row6">
                                <table className="table table-striped table-hover">
                                    <tbody>
                                        <tr>
                                            <td scope="row">Listing Number</td>
                                            <td>105446339</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Type of Property</td>
                                            <td>Apartment / Flat</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Street Address</td>
                                            <td className="text-primary">36 Eden Village, 999 Harris Avenue, Eden Glen</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Description</td>
                                            <td>First Floor</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Lifestyle</td>
                                            <td colSpan="2">Security Complex</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Listing Date</td>
                                            <td colSpan="2">04 August 2017</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Erf Size</td>
                                            <td colSpan="2">88 m²</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Floor Size</td>
                                            <td colSpan="2">88 m²</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Price per m²</td>
                                            <td colSpan="2">R 10 216</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Levies</td>
                                            <td colSpan="2">R 1 000</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">Rates and Taxes</td>
                                            <td colSpan="2">R 370</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </MDBRow>
                        <MDBRow className="titleRowInsideCol" id="rowBondCalculator">
                            <h2 className="titleBondCalculator">Bond Calculator</h2>
                            <MDBRow>
                                <MDBCol md="6">
                                    <div className="rightrowInsideLeftColBond">
                                        <h5 className="purchasePrice">Purchase Price</h5>
                                        <div style={{ marginLeft: "5%" }} class="form-outline">
                                            <input type="text" id="formControlDefault" placeholder="20000" class="form-control" />
                                            <label class="form-label" for="formControlDefault"><b style={{ color: "#0d63c9" }}>R</b></label>
                                        </div>
                                    </div>
                                    <div className="rightrowInsideLeftColBond">
                                        <h5 className="purchasePrice">Deposit (Optional)</h5>
                                        <div style={{ marginLeft: "0%" }} class="form-outline">
                                            <input type="text" id="formControlDefault" placeholder="10000" class="form-control" />
                                            <label class="form-label" for="formControlDefault"><b style={{ color: "#0d63c9" }}>R</b></label>
                                        </div>
                                    </div>
                                    <div className="rightrowInsideLeftColBond">
                                        <h5 className="purchasePrice">Interest Rate</h5>
                                        <div style={{ marginLeft: "9%" }} class="form-outline">
                                            <input type="text" id="formControlDefault" placeholder="percentage here" class="form-control" />
                                            <label class="form-label" for="formControlDefault"><b style={{ color: "#0d63c9" }}>%</b></label>
                                        </div>
                                    </div>
                                    <div className="rightrowInsideLeftColBond">
                                        <h5 className="purchasePrice">Loan Term</h5>

                                    </div>

                                    <div className="rightrowInsideLeftColBond">
                                        <div style={{ width: "90%", marginLeft: "5%", paddingTop: "2%", paddingBottom: "2%" }}>
                                            <input style={{ width: "100%" }} type="range" id="volume" title="10%" name="volume"
                                                min="0" max="100" />

                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div className="rightrowInsideRightColBond">
                                        <h5 className="purchasePrice">Monthly Repayment:</h5>
                                        <h5 className="priceInsideTheRightBond">R 5 752</h5>
                                    </div>
                                    <div className="rightrowInsideRightColBond">
                                        <h5 className="purchasePrice">Total Once-off Costs:</h5>
                                        <h5 className="priceInsideTheRightBondSmall">R 23 739</h5>
                                    </div>
                                    <div className="rightrowInsideRightColBond">
                                        <h5 className="purchasePrice">Min Gross Monthly Income:</h5>
                                        <h5 className="priceInsideTheRightBondSmall">R 0</h5>
                                    </div>
                                    <button className="btn btn-primary btn-block" style={{ width: "100%", marginTop: "5%" }}>View Breakdown</button>
                                    <div style={{marginTop:"4%",marginBottom:"2%"}}>
                                    <Link style={{fontSize:"14px",marginTop:"10px"}}>What do I qualify for based on my income?</Link><br/>
                                    <Link style={{fontSize:"14px",marginTop:"10px"}}>What are the bond and transfer costs?</Link>
                                    </div>
                                </MDBCol>
                                <p style={{fontSize:"10px"}}>*Disclaimer: Please note that by default this calculator uses the prime interest rate for bond payment calculations. This is purely for convenience and not an indication of the interest rate that might be offered to you by a bank. This calculator is intended to provide estimates based on the indicated amounts, rates and fees. Whilst we make every effort to ensure the accuracy of these calculations, we cannot be held liable for inaccuracies. Property24 does not accept liability for any damages arising from the use of this calculator.</p>
                            </MDBRow>
                        </MDBRow>

                    </MDBCol>
                    <MDBCol id="contactColumn" md="1" lg="3">
                        <MDBRow className="titleRowInsideCol">
                            <div style={{ textAlign: "center" }}>
                                <h5 className="contactAgent">Contact Agent</h5>
                                <h6 className="showContact"> <span style={{ color: "green", fontSize: "25px", paddingRight: "2%" }}><IoLogoWhatsapp /></span> Show Contact Number</h6>

                                <input type="text" id="nameInput" placeholder="Your Name" class="form-control" />

                                <input type="email" id="emailInput" placeholder="Your Email" class="form-control" />

                                <input type="number" id="mobileInput" placeholder="Your Mobile Number" class="form-control" />

                                <div id="discInput" contentEditable="true">
                                    Please send me more information about web reference P24-105446339 in Eden Glen, Edenvale.
                            </div>

                                <button className="btn btn-success btnSendMessage">Send Message</button>

                            </div>
                        </MDBRow>
                        <MDBRow style={{ textAlign: "center", marginBottom: "4%" }} className="titleRowInsideCol">
                            <img src="https://images.prop24.com/138491254/Fit450x225" alt="" />
                            <p className="textTitleColumn">Henrene Properties (PTY) Ltd</p>
                            <p className="text-primary textTitleColumn">View all properties for sale</p>
                        </MDBRow>
                        <MDBRow>

                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            {/* This is the addetails container */}

            <Index />
            <Footer />
        </div>
    )
}
export default AdDetails;
