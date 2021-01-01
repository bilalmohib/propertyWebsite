import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../Styling/Home.css';
import Header from './Header';
import Filters from './Filters';
import Circles from './Circles';
import About from './About';

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
                <Circles />
                <About />
            </div>
        )
    }
}
export default Home;