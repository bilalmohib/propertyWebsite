import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { AiFillFacebook, AiFillApple, AiFillAndroid, AiFillHeart, AiOutlineCar } from 'react-icons/ai';
import { FaTwitterSquare, FaPinterestSquare, FaYoutube, FaFacebook } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import '../Styling/SmallCard.css';

const SmallCard = () => {
    return (
        <div>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                <MDBContainer id="smallcard">
                    <MDBRow>
                        <MDBCol md="6" lg="6">

                            <img id="leftSmallImage" src="https://images.prop24.com/252672571/Crop318x212" alt="" />

                        </MDBCol>
                        <MDBCol id="smallSecondColumn" md="6" lg="6">
                            <MDBRow>
                                <MDBCol sm="8" md="10">
                                    <h4 id="price">R 2 650 000</h4>
                                    <h6 id="title">2 Bedroom Townhouse</h6>

                                </MDBCol>
                                <MDBCol sm="4" md="2">
                                    <img id="rightImage" src="https://images.prop24.com/231457744/Crop264x153" alt="" />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <h6 id="titleSecond">Sandhurst Ext 40</h6>
                            </MDBRow>
                            <MDBRow>
                                <h6 id="title2">2 bedroom garden townhouse
                                 An oasis of privacy with garden surround nestles with two bedroom, two bathroom simplex ... {/* in the exclusive Sandhurst suburb. North facing bedrooms, main en-suite overlooking garden and private pool. Open plan dining room and lounge leading onto lovely patio. Bright good size kitchen. A real gem for starting out or retiring.

                                Inside
                                2 Bedrooms
                                2 Bathrooms
                                Kitchen
                                Dining room
                                Living Areas


                                Outside
                                1 Garage
                                4 open parking
                                Beautiful garden and pool
                                24 Hour Security guarded post
                                Alarm system



                                Amenities
                                Easy access to main road access
                                Close to sought after schools
                                2 Large shopping centres in area



Call to arrange your private viewing now! */}
                                </h6>
                            </MDBRow>
                            <MDBRow>
                                
                                <div style={{display:"flex"}}>
                                <div style={{display:"flex"}}> <p className="things2"> <AiOutlineCar /> </p> <span className="thingsText2">2</span></div>
                                <div style={{display:"flex",paddingLeft:"7%"}}> <p className="things2"> <BiBed /> </p></div> <span className="thingsText2">4</span>
                                <div id="heart2">
                                        <AiFillHeart />
                                </div>
                                </div>
                                {/* <MDBCol sm="8" md="9" lg="7">
                                    <MDBRow id="thigsRow">
                                        <MDBCol md="6">
                                            <span className="things"> <AiOutlineCar /> </span> <span className="thingsText">2</span>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <span className="things"> <BiBed /> </span> <span className="thingsText">4</span>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                                <MDBCol sm="4" md="3" lg="5">
                                    <div id="heart">
                                        <AiFillHeart />
                                    </div>
                                </MDBCol> */}
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Link>
        </div>
    )
}
export default SmallCard;