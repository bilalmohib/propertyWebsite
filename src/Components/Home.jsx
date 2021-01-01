import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Header from './Header'
import '../Styling/Home.css'
import Filters from './Filters'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            options: [{ name: 'Srigar', id: 2 }, { name: 'Sam', id: 2 }, { name: 'Sams', id: 3 }, { name: 'Samds', id: 4 }]
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
                <h1>This is Home Page</h1>

                <MDBContainer>
  <MDBRow>
    <MDBCol md="4">.col-md-4</MDBCol>
    <MDBCol md="4">.col-md-4</MDBCol>
    <MDBCol md="4">.col-md-4</MDBCol>
  </MDBRow>
</MDBContainer>
            </div>
        )
    }
}
export default Home;