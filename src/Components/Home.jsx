import React, { Component } from 'react';

import { GrLocation } from 'react-icons/gr';

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
                <div className="ShowforMobile">
                    <button style={{width:"96%",marginTop:"2%",marginLeft:"2%",marginRight:"2%"}} className="btn-block btn-outline-primary"> <GrLocation/> Search Properties Near Me</button>
                    <br/>
                    <h2 style={{color:"grey",marginBottom:"3%"}} className="text-center">List Privately</h2>
                    <h5 style={{paddingRight:"2%",paddingLeft:"2%",fontWeight:"lighter"}} className="text-center">Over 3.8 million visit Property24.com each month. List your property on SA's No.1 property website!</h5>
                    <br/>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol sm="6" lg="6" md="6">
                                 <button style={{backgroundColor:"#0d63c9",color:"white"}} className="btn btn-block">Sell Privately</button> 
                            </MDBCol>
                            
                            <MDBCol sm="6" lg="6" md="6">
                                <button style={{marginTop:"5%",backgroundColor:"#3786e6",color:"white"}} className="btn btn-block" >Rent Privately</button>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>    
                </div>
                
                <div className="HideforMobile">
                    <Circles />
                    <SaleinGauteng />
                    <MobileApp />
                </div>
                <Articles />
                <div className="HideforMobile">
                    <About />
               
                <Index />
                </div>
                <Footer />
               
                <br />

            </div>



            // <div>
            // <Header />
            // <Filters />
            // <Circles/>
            // <SaleinGauteng/>
            // <MobileApp/>
            // <Articles/>
            // <About />
            // <Index />
            // <Footer/>
            // <br/>

            // </div>

        )
    }
}
export default Home;