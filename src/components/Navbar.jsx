import React from 'react'
import BestSellingProduct from '../pages/BestSellingProduct'
import Fashion from '../pages/Fashion'
import Footer from '../pages/Footer'
import NewProduct from '../pages/NewProduct'
import StyleTees from '../pages/StyleTees'
import TitelImages from '../pages/TitelImages'

const Navbar = () => {
  return (
    <>

      <div className="navbar" style={{ height: "4rem", width: "100wh" }}>
        <div className="container d-flex align-content-center">
          <div className="d-flex">
            <i className="fas fa-bars"></i>
          </div>
          <h4 className="d-flex">Login Here</h4>
          <div className="d-flex gap-4">
            <i className="fas fa-magnifying-glass"></i>
            <i className="far fa-heart"></i>
            <i className="fab fa-shopify"></i>
            <i className="far fa-user"></i>
          </div>
        </div>
      </div>
      <div>
        
        <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./images/bg.jpeg" class="d-block w-100" alt="" />
            </div>

            <div class="carousel-item">
              <img src="./images/bg.jpeg" class="d-block w-100" alt="" />
            </div>

            <div class="carousel-item">
              <img src="./images/bg.jpeg" class="d-block w-100" alt="" />
            </div>
          </div>

          <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        <TitelImages/>
      </div>
      <Fashion />
      <NewProduct />
      <BestSellingProduct />
      <StyleTees />
      <Footer/>
    </>
  )
}

export default Navbar







