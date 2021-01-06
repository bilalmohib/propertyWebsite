import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { AiFillFacebook, AiFillApple, AiFillAndroid, AiFillHeart, AiOutlineCar } from 'react-icons/ai';
import { FaTwitterSquare, FaPinterestSquare, FaYoutube, FaFacebook } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import '../Styling/BigCard.css';

const BigCard = () => {
    return (
        <div>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                <MDBContainer id="bigcard">
                    <MDBRow>
                        <MDBCol md="12" lg="12">
                            <img id="topimage" src="https://images.prop24.com/226340238/Crop528x153" alt="France president must die France hate you go to hell" />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="9" lg="9">
                            <img id="rightimage" src="https://images.prop24.com/244177223/Crop526x328" alt="" />
                        </MDBCol>


                        <MDBCol md="3" md="3">
                            <div id="ForDesktopSideImages">
                                <MDBRow>
                                    <img className="leftrow" src="https://images.prop24.com/244177224/Crop162x108" alt="" />
                                </MDBRow>
                                <MDBRow>
                                    <img className="leftrow" src="https://images.prop24.com/244177221/Crop162x108" alt="" />
                                </MDBRow>
                                <MDBRow>
                                    <img className="leftrow" src="https://images.prop24.com/244177223/Crop162x108" alt="" />
                                </MDBRow>
                            </div>
                        </MDBCol>



                        <MDBCol md="3" md="3">
                            {/* <div id="ForMobileSideImages">
                                <MDBRow>
                                    <MDBCol sm="4">
                                        <MDBRow>
                                            <img className="leftrow" src="https://images.prop24.com/244177224/Crop162x108" alt="" />
                                        </MDBRow>
                                    </MDBCol>
                                    <MDBCol sm="4">
                                        <MDBRow>
                                            <img className="leftrow" src="https://images.prop24.com/244177221/Crop162x108" alt="" />
                                        </MDBRow>
                                    </MDBCol>
                                    <MDBCol sm="4">
                                        <MDBRow>
                                            <img className="leftrow" src="https://images.prop24.com/244177223/Crop162x108" alt="" />
                                        </MDBRow>
                                    </MDBCol>
                                </MDBRow>
                            </div> */}
                            <div id="ForMobileSideImages">
                                {/* <MDBRow> */}
                                    {/* <MDBCol sm="4">
                                        <MDBRow> */}
                                            <img className="leftrow" src="https://images.prop24.com/244177224/Crop162x108" alt="" />
                                        {/* </MDBRow>
                                    </MDBCol> */}
                                    {/* <MDBCol sm="4">
                                        <MDBRow> */}
                                            <img className="leftrow" src="https://images.prop24.com/244177221/Crop162x108" alt="" />
                                        {/* </MDBRow>
                                    </MDBCol> */}
                                    {/* <MDBCol sm="4">
                                        <MDBRow> */}
                                            <img className="leftrow" src="https://images.prop24.com/244177223/Crop162x108" alt="" />
                                        {/* </MDBRow>
                                    </MDBCol> */}
                                {/* </MDBRow> */}
                            </div>
                        </MDBCol>


                    </MDBRow>
                    <MDBRow>
                        <MDBCol lg="4" md="5">
                            <h3 id="price">R 2 650 000</h3>
                        </MDBCol>
                        <MDBCol lg="5" md="5">
                            <h6 id="title">3 Bedroom House for Sale in Lonehill</h6>
                        </MDBCol>
                        <MDBCol lg="3" md="2">
                            <div id="heart">
                                <AiFillHeart />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBRow id="thigsRow">
                                <MDBCol md="2">
                                    <span className="things"> <AiOutlineCar /> </span> <span className="thingsText">2</span>
                                </MDBCol>
                                <MDBCol md="2">
                                    <span className="things"> <BiBed /> </span> <span className="thingsText">4</span>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="6">
                            <p id="street">106 Dennis Street, Lonehill</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Link>
        </div>
    )
}
export default BigCard;