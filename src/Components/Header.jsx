import React from 'react'
import { BsBell } from 'react-icons/bs';

import { Link } from 'react-router-dom';

import '../Styling/Header.css'



const Header = () => {
  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <div class="container-fluid">

          <a class="navbar-brand" id="logo" href="#">property<span style={{ color: "red" }}>24</span></a>


          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown1"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  For Sale
          </a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Property for Sale</a></li>
                  <li><a class="dropdown-item" href="#">Commercial Property for Sale</a></li>
                  <li><a class="dropdown-item" href="#">Repossessions</a></li>
                  <li><a class="dropdown-item" href="#">Auctions</a></li>
                  <li><a class="dropdown-item" href="#">On Show</a></li>

                  <li><a class="dropdown-item" href="#">Retirement Property for Sale</a></li>
                  <li><a class="dropdown-item" href="#">Developments for Sale</a></li>
                  <li><a class="dropdown-item" href="#">Sold House Prices</a></li>
                  <li><a class="dropdown-item" href="#">Buy Property Reports</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  To Rent
          </a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">House to Rent</a></li>
                  <li><a class="dropdown-item" href="#">Apartment / Flat to Rent</a></li>
                  <li><a class="dropdown-item" href="#">Commercial Property to Rent</a></li>

                  <li><a class="dropdown-item" href="#">Retirement Property to Rent</a></li>
                  <li><a class="dropdown-item" href="#">Developments to Rent</a></li>
                  <li><a class="dropdown-item" href="#">Find Letting Agents</a></li>

                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown3"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Developments
          </a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Developments for Sale</a></li>
                  <li><a class="dropdown-item" href="#">Developments to Rent</a></li>

                  <li>
                    <a class="dropdown-item" href="#">Retirement Developments for Sale</a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">Retirement Developments to Rent</a>
                  </li>

                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown4"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Commercial
          </a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Commercial Property for Sale</a></li>
                  <li><a class="dropdown-item" href="#">Commercial Property to Rent</a></li>


                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown5"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Calculators
          </a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Mortgage Bond Calculator</a></li>
                  <li><a class="dropdown-item" href="#">Affordability Calculator</a></li>
                  <li><a class="dropdown-item" href="#">Additional Payment Calculator</a></li>
                  <li><a class="dropdown-item" href="#">Bond and Transfer Calculator</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown6"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Advice
          </a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Property News</a></li>
                  <li><a class="dropdown-item" href="#">Property Advice</a></li>
                  <li><a class="dropdown-item" href="#">Selling Your House</a></li>

                  <li><a class="dropdown-item" href="#">Buyer&#39;s Guide</a></li>
                  <li><a class="dropdown-item" href="#">Property Tools &amp; Services</a></li>
                  <li><a class="dropdown-item" href="#">Trends and Statistics</a></li>

                  <li><a class="dropdown-item" href="#">Sold House Prices</a></li>
                  <li><a class="dropdown-item" href="#">Buy Property Reports</a></li>
                  <li><a class="dropdown-item" href="#">Find Estate Agents</a></li>
                  <li><a class="dropdown-item" href="#">Find Attorneys</a></li>

                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown7"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  List Privately
          </a>

                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Sell Your Property</a></li>
                  <li><a class="dropdown-item" href="#">Rent Your Property</a></li>

                </ul>
              </li>

              <li id="Log" class="nav-item">
                <a href="#">Login</a>
              </li>

              <li id="Sign" class="nav-item">
                <a href="#">Sign Up</a>

              </li>

              <li id="alertBtn" className="nav-item">
                <div class="btn-group">
                  <Link 
                    id="dropdownMenuButton"
                  
                    class="dropdown-toggle"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span style={{ fontSize: "18px" }}>
                      <BsBell />
                    </span>

                  </Link>
                  <div class="dropdown-menu" id="headerDropdownAlert" aria-labelledby="dropdownMenuButton">
                    <div id="alert">
                      <div>
                        <div style={{ float: "left",marginLeft:"10px",marginTop:"10px" }}>Alerts</div>
                        <div style={{ float: "right",marginRight:"10px",marginTop:"10px" }}> <Link to="/">Manage Alerts</Link> </div>
                      </div>

                    
                      <div  style={{borderTop:"1px solid grey"}}>
                              <div style={{paddingTop:"7%"}} className="text-center"> <Link to="/">Login</Link>  or <Link to="/">Sign Up</Link> to be notified of the latest listings as they arrive!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

            </ul>


          </div>

        </div>

      </nav>

    </div>
  )
}
export default Header;