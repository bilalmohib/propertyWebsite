import React from 'react'
import { Link } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { AiFillFacebook, AiFillApple, AiFillAndroid, AiFillHeart, AiOutlineCar } from 'react-icons/ai';
import { FaTwitterSquare, FaPinterestSquare, FaYoutube, FaFacebook } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import '../Styling/SlideShow.css';

class SlideShow extends React.Component {
    render() {
        return (
          <MDBContainer>
            <div id="GreatBox" className="bg-light">
            <div id="carouselExampleIndicators" className="carousel slide" data-mdb-ride="carousel">
            <ol className="carousel-indicators">
              <li data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to={0} className="active" />
              <li data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to={1} />
              <li data-mdb-target="#carouselExampleIndicators" data-mdb-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://mdbootstrap.com/img/new/slides/041.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://mdbootstrap.com/img/new/slides/042.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://mdbootstrap.com/img/new/slides/043.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-mdb-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-mdb-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </a>
          </div>
          </div>
          </MDBContainer>
        );
    }
}

export default SlideShow;