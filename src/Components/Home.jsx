import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../Styling/Home.css';
import Header from './Header';
import Filters from './Filters';
import Circles from './Circles';
import About from './About';
import SaleinGauteng from './SaleinGauteng';
import MobileApp from './MobileApp';
import Articles from './Articles';
import Index from './Index';
import Footer from './Footer';

class Home extends Component {
    constructor() {
        super()
        this.state = {
    
        };
    }
    onSelect = (selectedList, selectedItem) => {
        console.log("selectedList On select==> ", selectedList);
        console.log("selectedItem On select==> ", selectedItem);
    }

    onRemove = (selectedList, removedItem) => {
        console.log("selectedList On remove==> ", selectedList);
        console.log("selectedItem On remove==> ", removedItem);
    }
    render() {
        return (
            <div>
                <Header />
                <Filters />
                <Circles />
                <SaleinGauteng/>
                <MobileApp/>
                <Articles/>
                <About />
                <Index />
                <Footer/>
                <br/>

            </div>
        )
    }
}
export default Home;