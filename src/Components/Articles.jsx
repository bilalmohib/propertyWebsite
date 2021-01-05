import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../Styling/Articles.css'

const Articles = () => {
    return (
        <MDBContainer id="articlesBlock">
            <MDBRow>

                {/* Thats the bigger NEWS Column */}
                <MDBCol md="6">
                    <h5 className="NewsTitle">News</h5>
                    <MDBRow className="rowNewArticlesHead">
                        <MDBCol md="3">
                            <Link to="/"><img className="pic" src="https://images.prop24.com/252640141/Crop103x103" alt="Boy Cott France and its products and kill its president.He is the worst person ever" /></Link>
                        </MDBCol>
                        <MDBCol md="9">
                            <Link className="newsPara" to="/">
                                Eastern Cape Property Hot Spots | Port Elizabeth and East London top secondary cities surge
                            </Link>

                            <p className="newsSubHeading">Nelson Mandela Bay has outperformed Cape Town since...</p>

                        </MDBCol>
                    </MDBRow>
                    <hr />
                    {/* Second Row started */}
                    <MDBRow>
                        <Link className="question">What's driving buyers' property purchasing decision in 2021?</Link>
                        <p className="answer">A South African survey has revealed the realities of...</p>
                    </MDBRow>
                    {/* Second Row ended */}
                    <hr />
                    {/* 3rd Row started */}
                    <MDBRow>
                        <Link className="question">Buyers looking to escape busy metros eye 'affordable family homes' in Malmesbury under R2m</Link>
                        <p className="answer">Situated on the West Coast, about 35 minutes to Cape Town...</p>
                    </MDBRow>
                    {/* 3rd Row ended */}
                    <hr />
                    {/* Last Row */}
                    <MDBRow>
                        <Link className="question">More Property News</Link>
                    </MDBRow>
                    {/* Last Row */}
                </MDBCol>
                {/* Thats the bigger NEWS Column */}
                  
                <div id="special">
                    <br/>
                    <br/>
                </div>


                {/* Thats the bigger ADVICE Column */}
                <MDBCol md="6">
                    <h5 className="NewsTitle">Advice</h5>
                    <MDBRow className="rowNewArticlesHead">
                        <MDBCol md="3">
                            <Link to="/"><img className="pic" src="https://images.prop24.com/252594387/Crop103x103" alt="Boy Cott France and its products and kill its president.He is the worst person ever" /></Link>
                        </MDBCol>
                        <MDBCol md="9">
                            <Link className="newsPara" to="/">
                                SA moved to amended Alert Level 3 | No evictions allowed
                            </Link>

                            <p className="newsSubHeading">What tenants and landlords need to know about the amended...</p>

                        </MDBCol>
                    </MDBRow>
                    <hr />
                    {/* Second Row started */}
                    <MDBRow>
                        <Link className="question">How to decide between one or more offers to purchase</Link>
                        <p className="answer">Advice for sellers in the pound seat, with more than one...</p>
                    </MDBRow>
                    {/* Second Row ended */}
                    <hr />
                    {/* 3rd Row started */}
                    <MDBRow>
                        <Link className="question">Want to buy property but don't qualify? Consider joint ownership</Link>
                        <p className="answer">Buying property with family can be a solution on a...</p>
                    </MDBRow>
                    {/* 3rd Row ended */}
                    <hr />
                    {/* Last Row */}
                    <MDBRow>
                        <Link className="question">More Property Advice</Link>
                    </MDBRow>
                    {/* Last Row */}
                </MDBCol>
                {/* Thats the bigger ADVICE Column */}
            </MDBRow>
            <hr />
        </MDBContainer>
    )
}
export default Articles;