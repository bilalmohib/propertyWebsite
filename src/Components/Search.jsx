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

const Search = () => {
    return(
        <div>
           <Header/>
           <Filters/>
           <br/>
           <SaleinGauteng />
           {/* From here all data can be easily sent to one to stop using multiple 
           components and use a loop to render that by passing data through loops */}
           <BigCard />
           <br/>
           <BigCard />
           <br/>
           <BigCard />
           <br/>
           <BigCard />
           <br/>
           <BigCard />
           <br/>
           <SmallCard />
           <br/>
           <Index/>
           <Footer/>
        </div>
    )
}
export default Search;
