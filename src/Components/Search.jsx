import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom';
// import '../Styling/Search.css'
import Header from './Header';
import Filters from './Filters';
import Footer from './Footer';
import SaleinGauteng from './SaleinGauteng';
import BigCard from './BigCard';
import Index from './Index';
import SmallCard from './SmallCard';
import '../Styling/Search.css';

const Search = () => {
    return (
        <div>
            <Header />
            <Filters />
            <br />
            <SaleinGauteng />
            {/* From here all data can be easily sent to one to stop using multiple 
           components and use a loop to render that by passing data through loops */}
            <div id="searchblock">
                <div>
                    <BigCard />
                    <br />
                    <BigCard />
                    <br />
                </div>
                <div id="divArticles">
                <div id="divArticlesInside">
                    <h4 id="titlesideAd">property<span className="text-danger">24</span></h4>
                    <h5 id="SubTitlesideAd">Home Loans</h5>
                    <p className="paraArticles">We apply to all major banks for you, <b>FREE of charge.</b></p>
                    <button className="btn btnArticles">Apply Now</button>
                    <button className="btn btnArticles2">Apply Now</button>
                </div>
                <br/>
                <h6>Alberton Property for Sale</h6>
            
                <hr style={{color:"blue"}}/>

                <Link to="/" className="sbi">Houses for Sale in Alberton (1235)</Link>
                <hr/>
                <Link to="/" className="sbi">Apartments / Flats for Sale in Alberton (251)</Link>

                <hr/>
                <Link to="/" className="sbi">Townhouses for Sale in Alberton (533)</Link>
                
                <hr/>
                <Link to="/" className="sbi">Vacant Land / Plots for Sale in Alberton (38)</Link>
                
                <hr/>
                <Link to="/" className="sbi">Farms for Sale in Alberton (2)</Link>

                <hr/>
                <Link to="/" className="sbi">Commercial Property for Sale in Alberton (74)</Link>
                
                <hr/>
                <Link to="/" className="sbi">Industrial Property for Sale in Alberton (70)</Link>
                
                </div>
            </div>
           
            <div id="smallCardBlock">
            <SmallCard />
            </div>
            <br />
            <Index />
            <Footer />
        </div>
    )
}
export default Search;
