import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { AiFillFacebook, AiFillApple, AiFillAndroid, AiFillHeart, AiOutlineCar } from 'react-icons/ai';
import { FaTwitterSquare, FaPinterestSquare, FaYoutube, FaFacebook, FaSearch } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import { Multiselect } from 'multiselect-react-dropdown';
import '../Styling/Admin.css';
import Header from '../Components/Header';
import Index from '../Components/Index';
import Footer from '../Components/Footer';

class Admin extends React.Component {
    constructor() {
        super()
        this.state = {
            propertyType:
                [{ name: 'House', id: 1 },
                { name: 'Apartment/Flat', id: 2 },
                { name: 'Townhouse', id: 3 },
                { name: 'Vacant Land / Plot', id: 4 },
                { name: "Farm", id: 5 },
                { name: "Commercial Property", id: 6 },
                { name: "Industrial Property", id: 7 }],
            minPrice:
                [{ name: "R 100 000", id: 1 },
                { name: "R 150 000", id: 2 },
                { name: "R 200 000", id: 3 },
                { name: "R 250 000", id: 4 },
                { name: "R 300 000", id: 5 },
                { name: "R 350 000", id: 6 },
                { name: "R 400 000", id: 7 },
                { name: "R 450 000", id: 8 },
                { name: "R 500 000", id: 9 },
                { name: "R 600 000", id: 10 },
                { name: "R 700 000", id: 11 },
                { name: "R 800 000", id: 12 },
                { name: "R 900 000", id: 13 },
                { name: "R 1 000 000", id: 14 },
                { name: "R 1 250 000", id: 15 },
                { name: "R 1 500 000", id: 16 },
                { name: "R 1 750 000", id: 17 },
                { name: "R 2 000 000", id: 18 },
                { name: "R 2 500 000", id: 19 },
                { name: "R 3 000 000", id: 20 },
                { name: "R 3 500 000", id: 21 },
                { name: "R 4 000 000", id: 22 },
                { name: "R 4 500 000", id: 23 },
                { name: "R 5 000 000", id: 24 },
                { name: "R 6 000 000", id: 25 },
                { name: "R 7 000 000", id: 26 },
                { name: "R 8 000 000", id: 27 },
                { name: "R 9 000 000", id: 28 },
                { name: "R 10 000 000", id: 29 },
                { name: "R 15 000 000", id: 30 },],
            maxPrice:
                [{ name: "R 100 000", id: 1 },
                { name: "R 150 000", id: 2 },
                { name: "R 200 000", id: 3 },
                { name: "R 250 000", id: 4 },
                { name: "R 300 000", id: 5 },
                { name: "R 350 000", id: 6 },
                { name: "R 400 000", id: 7 },
                { name: "R 450 000", id: 8 },
                { name: "R 500 000", id: 9 },
                { name: "R 600 000", id: 10 },
                { name: "R 700 000", id: 11 },
                { name: "R 800 000", id: 12 },
                { name: "R 900 000", id: 13 },
                { name: "R 1 000 000", id: 14 },
                { name: "R 1 250 000", id: 15 },
                { name: "R 1 500 000", id: 16 },
                { name: "R 1 750 000", id: 17 },
                { name: "R 2 000 000", id: 18 },
                { name: "R 2 500 000", id: 19 },
                { name: "R 3 000 000", id: 20 },
                { name: "R 3 500 000", id: 21 },
                { name: "R 4 000 000 ", id: 22 },
                { name: "R 4 500 000", id: 23 },
                { name: "R 5 000 000", id: 24 },
                { name: "R 6 000 000", id: 25 },
                { name: "R 7 000 000", id: 26 },
                { name: "R 8 000 000", id: 27 },
                { name: "R 9 000 000", id: 28 },
                { name: "R 10 000 000", id: 29 },
                { name: "R 15 000 000", id: 30 }],
            FloorSize:
                [{ name: "100", id: 1 },
                { name: "150", id: 2 },
                { name: "200", id: 3 },
                { name: "250", id: 4 },
                { name: "300", id: 5 },
                { name: "350", id: 6 },
                { name: "400", id: 7 },
                { name: "450", id: 8 },
                { name: "500", id: 9 },
                { name: "600", id: 10 },
                { name: "700", id: 11 },
                { name: "800", id: 12 },
                { name: "900", id: 13 },
                { name: "1 000", id: 14 },
                { name: "1 250", id: 15 },
                { name: "1 500", id: 16 },
                { name: "1 750", id: 17 },
                { name: "2 000", id: 18 },
                { name: "2 500", id: 19 },
                { name: "3 000", id: 20 },
                { name: "3 500", id: 21 },
                { name: "4 000", id: 22 },
                { name: "4 500", id: 23 },
                { name: "5 000", id: 24 },
                { name: "6 000", id: 25 },
                { name: "7 000", id: 26 },
                { name: "8 000", id: 27 },
                { name: "9 000", id: 28 },
                { name: "10 000", id: 29 },
                { name: "15 000", id: 30 }],
            bedrooms:
                [
                    { name: "1+", id: 1 },
                    { name: "2+", id: 2 },
                    { name: "3+", id: 3 },
                    { name: "4+", id: 4 },
                    { name: "5+", id: 5 }],
            bathrooms:
                [
                    { name: "1+", id: 1 },
                    { name: "2+", id: 2 },
                    { name: "3+", id: 3 },
                    { name: "4+", id: 4 },
                    { name: "5+", id: 5 }],
            sm: 6,
            md: 6,

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
        const styles = {
            multiselectContainer: { // To change css for multiselect (Width,height,etc..)
                width: "150px",
            },
            searchBox: { // To change search box element look
                //   border: none;
                fontSize: "15px",

                //   min-height: 50px;
            },
            inputField: { // To change input field position or margin
                // margin: 5px;
                backgroundColor: "rgb(86, 146, 217)",
                color: "white",
                width: "100%",
                height: "20px"

            },
            chips: { // To change css chips(Selected options)
                //   background: red;
                border: "1px solid  rgb(13, 99, 201)",
            },
            optionContainer: { // To change css for option container 
                //   border: 2px solid;
                color: "black",
                backgroundColor: "white",
                width: "200px"
            },
            option: { // To change css for dropdown options
                //   color: blue;
                marginTop: "2px",
            },
            groupHeading: { // To chanage group heading style

                //   ....
            }
        }
        return (
            <div>
                <Header />
                <h2 className="text-center text-primary">Post Your Property Ad</h2>

                <div id="form">

                    <h4>ENTER THE DETAILS BELOW</h4>
                    {/* <h6>Condition *</h6>

                <div style={{ paddingLeft: "2%" }}>
                    <button type="button" className="btn btn-outline-dark">New</button>
                    <button type="button" style={{ marginLeft: "2%" }} className="btn btn-outline-dark">Used</button>
                </div> */}
                    <br />
                    <label>
                        Ad Title<br />
                        <input className="form-control" type="text" placeholder="Title of your Property Ad" />
                        <span className="text-info" style={{ fontSize: "12px" }}>A minimum length of 5 characters is required. Please edit the field.</span>

                    </label>

                    <br />


                    <label>
                        Description <br />
                        <textarea className="form-control text-dark" cols="51.5" style={{ marginRight: "10%" }} rows="8"></textarea>
                        <span className="text-info" style={{ fontSize: "12px" }}>A minimum length of 20 characters is required. Please edit the field.</span>
                        <br />

                    </label>

                    <hr />


                    <h3 style={{marginLeft:"2%"}}>Room Details</h3>

                    <div style={{ width: "100%", display: "flex", paddingLeft: "1%" }}>
                        
                        {/* Row 1 of drop downs */}
                        <div id="ROW1DROPDOWN">
                            <MDBContainer>
                                <MDBRow id="rowproperty1">


                                    <MDBCol lg="3" md="6" sm="6">
                                        <p className="paraRow">Property Type</p>
                                        <div className="col">

                                            <Multiselect
                                                style={styles}
                                                options={this.state.propertyType} // Options to display in the dropdown
                                                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                onSelect={this.onSelect} // Function will trigger on select event
                                                onRemove={this.onRemove} // Function will trigger on remove event
                                                displayValue="name" // Property name to display in the dropdown options
                                                placeholder="Any"
                                                showCheckbox="true"
                                            />
                                        </div>
                                    </MDBCol>

                                    <MDBCol lg="3" md="6" sm="6">
                                        <p className="paraRow">Min Price</p>
                                        <div className="col">
                                            <Multiselect
                                                style={styles}
                                                options={this.state.minPrice} // Options to display in the dropdown
                                                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                onSelect={this.onSelect} // Function will trigger on select event
                                                onRemove={this.onRemove} // Function will trigger on remove event
                                                displayValue="name" // Property name to display in the dropdown options
                                                placeholder="Any"
                                                showCheckbox="true"
                                            />
                                        </div>
                                    </MDBCol>

                                    <MDBCol lg="3" md="6" sm="6">
                                        <p className="paraRow">Max Price</p>
                                        <div className="col">
                                            <Multiselect
                                                style={styles}
                                                options={this.state.maxPrice} // Options to display in the dropdown
                                                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                onSelect={this.onSelect} // Function will trigger on select event
                                                onRemove={this.onRemove} // Function will trigger on remove event
                                                displayValue="name" // Property name to display in the dropdown options
                                                placeholder="Any"
                                                showCheckbox="true"
                                            />
                                        </div>
                                    </MDBCol>

                                    <MDBCol lg="3" md="6" sm="6">
                                        <p className="paraRow">Bedrooms</p>
                                        <div className="col">
                                            <Multiselect
                                                style={styles}
                                                options={this.state.bedrooms} // Options to display in the dropdown
                                                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                                onSelect={this.onSelect} // Function will trigger on select event
                                                onRemove={this.onRemove} // Function will trigger on remove event
                                                displayValue="name" // Property name to display in the dropdown options
                                                placeholder="Any"
                                                showCheckbox="true"
                                            />
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                        {/* Row 1 of drop downs */}
                    </div>


                    <br />


                    {/* Row 2 of drop downs */}
                    <div id="ROW2DROPDOWN" style={{ paddingLeft: "1%" }}>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol lg="3" md="6" sm="6">
                                    <p className="paraRow">Bathrooms</p>
                                    <div className="col">

                                        <Multiselect
                                            style={styles}
                                            options={this.state.bathrooms} // Options to display in the dropdown
                                            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                            onSelect={this.onSelect} // Function will trigger on select event
                                            onRemove={this.onRemove} // Function will trigger on remove event
                                            displayValue="name" // Property name to display in the dropdown options
                                            placeholder="Any"
                                            showCheckbox="true"
                                        />
                                    </div>
                                </MDBCol>

                                <MDBCol lg="3" md="6" sm="6">
                                    <p className="paraRow">Parking</p>
                                    <div className="col">
                                        <Multiselect
                                            style={styles}
                                            options={this.state.bedrooms} // Options to display in the dropdown
                                            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                            onSelect={this.onSelect} // Function will trigger on select event
                                            onRemove={this.onRemove} // Function will trigger on remove event
                                            displayValue="name" // Property name to display in the dropdown options
                                            placeholder="Any"
                                            showCheckbox="true"
                                        />
                                    </div>
                                </MDBCol>

                                <MDBCol lg="3" md="6" sm="6">
                                    <p className="paraRow">Floor Size (m²)</p>
                                    <div className="col">
                                        <Multiselect
                                            style={styles}
                                            options={this.state.FloorSize} // Options to display in the dropdown
                                            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                            onSelect={this.onSelect} // Function will trigger on select event
                                            onRemove={this.onRemove} // Function will trigger on remove event
                                            displayValue="name" // Property name to display in the dropdown options
                                            placeholder="Any"
                                            showCheckbox="true"
                                        />
                                    </div>
                                </MDBCol>

                                <MDBCol lg="3" md="6" sm="6">
                                    <p className="paraRow">Erf Size (m²)</p>
                                    <div className="col">
                                        <Multiselect
                                            style={styles}
                                            options={this.state.FloorSize} // Options to display in the dropdown
                                            selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                            onSelect={this.onSelect} // Function will trigger on select event
                                            onRemove={this.onRemove} // Function will trigger on remove event
                                            displayValue="name" // Property name to display in the dropdown options
                                            placeholder="Any"
                                            showCheckbox="true"
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                    {/* Row 2 of drop downs */}



                    {/* Features block */}
                    <div id="ROW3DROPDOWN" style={{ paddingLeft: "2%" }}>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol lg="5" md="6" sm="6">
                                    <p style={{ marginBottom: "0%", fontSize: "20px", marginLeft: "-2%", fontWeight: "bold" }} className="text-primary paraRow">Features</p>
                                    <MDBRow>
                                        <MDBCol lg="5">
                                            {/* <!-- Material unchecked --> */}
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="Pet_Friendly" />
                                                <label className="form-check-label" htmlFor="Pet_Friendly">Pet Friendly</label>
                                            </div>
                                        </MDBCol>
                                        <MDBCol lg="5">
                                            {/* <!-- Material unchecked --> */}
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="Garden" />
                                                <label className="form-check-label" htmlFor="Garden">Garden</label>
                                            </div>
                                        </MDBCol>
                                        <MDBCol lg="5">
                                            {/* <!-- Material unchecked --> */}
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="Pool" />
                                                <label className="form-check-label" htmlFor="Pool">Pool</label>
                                            </div>
                                        </MDBCol>
                                        <MDBCol lg="5">
                                            {/* <!-- Material unchecked --> */}
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="Flatlet" />
                                                <label className="form-check-label" htmlFor="Flatlet">Flatlet</label>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>

                                </MDBCol>
                                <MDBCol lg="5" md="6" sm="6">
                                    <p style={{ marginBottom: "0%", fontSize: "20px", marginLeft: "-2%", fontWeight: "bold" }} className="text-primary paraRow">Other</p>
                                    <MDBRow>
                                        <MDBCol lg="5">
                                            {/* <!-- Material unchecked --> */}
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="Retirement" />
                                                <label className="form-check-label" htmlFor="Retirement">Retirement</label>
                                            </div>
                                        </MDBCol>
                                        <MDBCol lg="5">
                                            {/* <!-- Material unchecked --> */}
                                            <div class="form-check">
                                                <input type="checkbox" className="form-check-input" id="Repossessed" />
                                                <label className="form-check-label" htmlFor="Repossessed">Repossessed</label>
                                            </div>
                                        </MDBCol>
                                        <MDBCol lg="5">
                                            {/* <!-- Material unchecked --> */}
                                            <div class="form-check">
                                                <input type="checkbox" className="form-check-input" id="On Show" />
                                                <label className="form-check-label" htmlFor="On Show">On Show</label>
                                            </div>
                                        </MDBCol>
                                        <MDBCol lg="5">
                                            {/* <!-- Material unchecked --> */}
                                            <div class="form-check">
                                                <input type="checkbox" className="form-check-input" id="Auction" />
                                                <label className="form-check-label" htmlFor="Auction">Auction</label>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                    {/* Features block */}


                    <br />

                    <h4>SET A PRICE</h4>

                    <label>
                        <input id="priceuser" className="form-control" type="number" placeholder="Price in Rupees(R.S)" max="10000000000" min="1" />
                    </label>

                    <br />

                    <hr />
                    {/* <h4>UPLOAD UP TO 12 PHOTOS</h4> */}
                    <h4>UPLOAD PHOTOS FOR YOUR PROPERTY</h4>


                    {/* Here the uploaded image will be here */}

                    <div style={{ maxWidth: "90%" }} id="logindiv">
                        <div>
  
                            <div className="progress" style={{ height: '20px',marginLeft:"2%" }}>
                                <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <br />
                        <label className="form-label" for="customFile">Choose Your Property Photos</label>
                        <input style={{width:"100%",marginLeft:"2%" }} type="file" className="form-control" id="customFile" />
                        <button style={{ marginTop: "10px", marginLeft: "2%", marginBottom: "10px",fontSize:"18px" }} className="btn btn-light">Upload</button>
                        <br />
                        <img src='http://via.placeholder.com/400x300' style={{ width: "90%",marginLeft:"2%" }} alt="Uploaded images" height="auto" />
                    </div>
                    {/* Here the uploaded image will be here */}



                    <hr />

                    <h4>CONFIRM YOUR LOCATION</h4>

                    <div>
                        <MDBContainer>
                            <MDBRow>
                                {/*    <MDBCol md="1">

                                <div className="input-group-prepend">
                                    <label className="input-group-text">
                                        <FaSearch />
                                    </label>
                                </div>
                            </MDBCol> */}
                                <MDBCol md="12">
                                    <select
                                        className="custom-select">
                                        <option id="location" value="Use Current Location">Use Current Location</option>
                                        <option defaultValue="Lahore,Pakistan" value="Lahore,Pakistan">Lahore,Pakistan</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Azad Jammu and Kashmir">Azad Jammu and Kashmir</option>
                                        <option value="Balochistan">Balochistan</option>
                                        <option value="Gilgit–Baltistan">Gilgit–Baltistan</option>
                                        <option value="Islamabad Capital Territory">Islamabad Capital Territory</option>
                                        <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                                        <option value="Sindh">Sindh</option>
                                        <option value="Muzaffarabad">Muzaffarabad</option>
                                        <option value="Quetta">Quetta</option>
                                        <option value="Gilgit">Gilgit</option>
                                        <option value="Islamabad">Islamabad</option>
                                        <option value="Peshawar">Peshawar</option>
                                        <option value="Karachi">Karachi</option>
                                    </select>
                                </MDBCol>

                            </MDBRow>
                        </MDBContainer>
                    </div>
                    <hr />


                    <h4>REVIEW YOUR DETAILS</h4>


                    <MDBContainer>

                        <MDBRow>

                            <MDBCol md="6">
                                <img id="userphotohere" src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" alt="This is your image" />
                            </MDBCol>

                            <MDBCol md="6">
                                <label className="text-info" style={{ marginLeft: "5%" }} htmlFor="rid">
                                    Name:
                             <input className="gettedname" value="Muhammad Bilal" className="text-dark form-control" type="text" />
                                </label>
                            </MDBCol>

                        </MDBRow>

                    </MDBContainer>

                    <br />
                    <br />
                    <h6 className="text-info">Muhammad Bilal please agree to the terms to proceed</h6>

                    <button style={{ marginLeft: "2%", marginRight: "2%", width: "fit-content" }} className="btn btn-success">I agree to the terms and conditions</button>


                    {/* {(this.state.check1 === true && this.state.check2 && this.state.check3 && this.state.check4 && this.state.check5 && this.state.check6 && this.state.last)
                    ? ( */}

                    <div>
                        <br />
                        <h6 className="text-info">Muhammad Bilal Only One Step more(PhoneAuth) please click Next to continue *</h6>
                        <br />
                        <Link to="/admin" style={{ fontSize: "16px", marginLeft: "2%" }} className="btn btn-primary" to="/">Move Next</Link>
                    </div>
                    {/*) : (
                        <h6 className="text-danger">{this.props.USER_AUTH_DATA.name} Thanks Please fill all the fields and agree to the agreement to continue</h6>
                    )} */}
                    <br />
                    <br />
                </div>

                <Index />

                <Footer />

            </div>
        )
    }
}
export default Admin;