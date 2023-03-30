import React from 'react'
const TitelImages = () => {
    return (
        <>
            <div className="container my-5 text-center">
                <div className="row">
                    <div className="col-sm-2 ">
                        <img className='bg_no  animate__headShake' src="./images/img1.jpeg" alt="" />
                        <span>Men's T-Shirts</span>
                    </div>
                    <div className="col-sm-2">
                        <img className='bg_no' src="./images/img6.jpeg" alt="" />
                        <span>Women's Wear</span>
                    </div>
                    <div className="col-sm-2">
                        <img className='bg_no' src="./images/img4.jpeg" alt="" />
                        <span>Winter Collections</span>
                    </div>
                    <div className="col-sm-2">
                        <img className='bg_no' src="./images/img5.jpeg" alt="" />
                        <span>Hooded T-Shirts</span>
                    </div>
                    <div className="col-sm-2">
                        <img className='bg_no' src="./images/img2.jpeg" alt="" />
                        <span>Polo Neck T-Shirts</span>
                    </div>
                    <div className="col-sm-2">
                        <img className='bg_no' src="./images/img3.jpeg" alt="" />
                        <span>Full Sleeves T-Shirts</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="bgimages1">
                            <div className="d-flex align-items-center justify-content-around">
                                <img className='' src="./images/1removebg.png" alt="" height={400} />
                                <div className='d-block'>
                                    <h4>BAGGY</h4>
                                    <span className='text-light bg-dark'>UP TO 60% OFF</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="bgimages2">
                            <div className="d-flex align-items-center justify-content-around">
                                <img className='' src="./images/2removebg.png" alt="" height={400} />
                                <div className='d-block'>
                                    <h4>WINTER</h4>
                                    <span className='text-light bg-dark'>COLLECTION</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="bgimages3">
                                <div className="d-flex align-items-center justify-content-around text-center">
                                    <img className='' src="./images/img6-removebg.png" alt="" height={200} />
                                    <div className='d-block'>
                                        <h4>BAGGY</h4>
                                        <span className='text-light bg-dark'>UP TO 60% OFF</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="bgimages4 d-flex justify-content-center align-items-center text-center">
                                <div className="d-block">
                                    <h4>BESTDEAL</h4>
                                    <h5 className='text-light bg-dark'>UP TO 81% OFF</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="bgimages5">
                                <div className="d-flex align-items-center justify-content-around text-center">
                                    <div className='d-block'>
                                        <h4>WINTER</h4>
                                        <span className='text-light bg-dark'>COLLECTION</span>
                                    </div>
                                    <img className='' src="./images/img1-removebg-preview.png" alt="" height={200} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-center my-5'>Trending T-Shirts</h1>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card border-0">
                            <img src="https://images.unsplash.com/photo-1678553542991-6bdca4108416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" height={500} />
                            <div className="treding_Desc text-center d-block my-2">
                                <span>Men Henley Neck </span>
                                <p>Full Sleeva Read Wine</p>
                                <b>₹399</b> <s className='text-danger'>₹1299</s>
                            </div>
                            <div className="tredingBtn d-flex text-center justify-content-center gap-2 my-1">
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>S</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>M</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>L</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XL</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XXL</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-0">
                            <img src="https://images.unsplash.com/photo-1672775053892-418549df2a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" height={500} />
                            <div className="treding_Desc text-center d-block my-2">
                                <span>Men Henley Neck </span>
                                <p>Full Sleeva Read Wine</p>
                                <b>₹399</b> <s className='text-danger'>₹1299</s>
                            </div>
                            <div className="tredingBtn d-flex text-center justify-content-center gap-2 my-1">
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>S</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>M</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>L</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XL</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XXL</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-0">
                            <img src="https://images.unsplash.com/photo-1674908850980-13d381e2c5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80" alt="" height={500} />
                            <div className="treding_Desc text-center d-block my-2">
                                <span>Men Henley Neck </span>
                                <p>Full Sleeva Read Wine</p>
                                <b>₹399</b> <s className='text-danger'>₹1299</s>
                            </div>
                            <div className="tredingBtn d-flex text-center justify-content-center gap-2 my-1">
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>S</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>M</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>L</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XL</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XXL</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-0">
                            <img src="https://images.unsplash.com/photo-1677073967867-345756787d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" height={500} />
                            <div className="treding_Desc text-center d-block my-2">
                                <span>Men Henley Neck </span>
                                <p>Full Sleeva Read Wine</p>
                                <b>₹399</b> <s className='text-danger'>₹1299</s>
                            </div>
                            <div className="tredingBtn d-flex text-center justify-content-center gap-2 my-1">
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>S</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>M</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>L</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XL</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XXL</button>
                            </div>
                        </div>
                    </div>
                </div><br /> <br />
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card border-0">
                            <img src="https://images.unsplash.com/photo-1678553542991-6bdca4108416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" height={500} />
                            <div className="treding_Desc text-center d-block my-2">
                                <span>Men Henley Neck </span>
                                <p>Full Sleeva Read Wine</p>
                                <b>₹399</b> <s className='text-danger'>₹1299</s>
                            </div>
                            <div className="tredingBtn d-flex text-center justify-content-center gap-2 my-1">
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>S</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>M</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>L</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XL</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XXL</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-0">
                            <img src="https://images.unsplash.com/photo-1672775053892-418549df2a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" height={500} />
                            <div className="treding_Desc text-center d-block my-2">
                                <span>Men Henley Neck </span>
                                <p>Full Sleeva Read Wine</p>
                                <b>₹399</b> <s className='text-danger'>₹1299</s>
                            </div>
                            <div className="tredingBtn d-flex text-center justify-content-center gap-2 my-1">
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>S</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>M</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>L</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XL</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XXL</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-0">
                            <img src="https://images.unsplash.com/photo-1674908850980-13d381e2c5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80" alt="" height={500} />
                            <div className="treding_Desc text-center d-block my-2">
                                <span>Men Henley Neck </span>
                                <p>Full Sleeva Read Wine</p>
                                <b>₹399</b> <s className='text-danger'>₹1299</s>
                            </div>
                            <div className="tredingBtn d-flex text-center justify-content-center gap-2 my-1">
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>S</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>M</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>L</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XL</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XXL</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-0">
                            <img src="https://images.unsplash.com/photo-1677073967867-345756787d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" height={500} />
                            <div className="treding_Desc text-center d-block my-2">
                                <span>Men Henley Neck </span>
                                <p>Full Sleeva Read Wine</p>
                                <b>₹399</b> <s className='text-danger'>₹1299</s>
                            </div>
                            <div className="tredingBtn d-flex text-center justify-content-center gap-2 my-1">
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>S</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>M</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>L</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XL</button>
                                <button style={{ height: "2rem", width: "3rem", border: "1px solid gray", background: "#ffff" }}>XXL</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" d-flex justify-content-center mt-4">
                    <button className='btn bg-danger text-light' style={{ width: "150px", height: "50px" }}>VIWE ALL</button>
                </div>

            </div>

        </>
    )
}

export default TitelImages
