import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, magni architecto? Pariatur aut tenetur minima facilis maxime fugit nam sequi.</p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div>
                            <h3>ONLINE SHOPPING</h3>
                            <p><b>Men's T-Shirts</b></p>
                            <p><b>Women's Wear </b></p>
                            <p><b>Winter Collections</b></p>
                            <p><b>Hooded T - Shirts</b></p>
                            <p><b>Polo Neck T - Shirts</b></p>
                            <p><b>Full Sleeves T - Shirts</b></p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div>
                            <h3>CUSTOMER POLICIES</h3>
                            <p><b>About Us</b></p>
                            <p><b>Contact Us</b></p>
                            <p><b>Tearms & Conditions</b></p>
                            <p><b>Shpping & Retruns Policy</b></p>
                            <p><b>Cancellation & Refund Policy</b></p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className='d-block'>
                            <h3>STORE INFORMATION</h3>
                            <div className='d-flex gap-4 align-content-center'>
                                <i class="fas fa-location-dot mt-4"></i>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, iste.</p>
                            </div>
                            <div className='d-flex gap-4 align-content-center'>
                                <i class="fas fa-phone mt-1"></i>
                                <p>Call Use:1234567890</p>
                            </div>
                            <div className='d-flex gap-4 align-content-center'>
                                <i class="far fa-envelope mt-1"></i>
                                <p>Email Use:Info@Yourgmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer