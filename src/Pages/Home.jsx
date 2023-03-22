import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
    const [product,setProduct]=useState([])
    const navigate=useNavigate()
    const productData=async()=>{
             const {data} =await axios.get('https://fakestoreapi.com/products')
             console.log(data);
             setProduct(data)
    }
    useEffect(()=>{
            productData()
    },[])
  return (
    <div>
        <div style={{background:"blue",height:"50px",display:"flex"}}>
        <div className='d-flex '>
            <h2 className='text-info'>online shop</h2>

            <h6 className='mt-1 ms-5 text-light btn btn-primary' onClick={()=>navigate(`userId/1`)}>card <span className='badge badge-info'>1</span></h6>
        </div>
       
        </div>
        <div className="row">
            {
                product?.map((item)=>{
                    return <div className='col-sm-3 mt-2'>
                        <div className="card h-100 "  >
                            <div className="card-body text-center">
                                 <img src={item.image} alt=""  height={100} width="100px" />
                                <h5>{item?.title}</h5><span> price:{item?.price}</span>
                            </div>
                                <button className='btn btn-primary' onClick={()=>{
                            return navigate(`userId/${item.id}`)
                        }}>Add card</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
