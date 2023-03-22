import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Cart() {
    const {id}=useParams()
    const [card,setCard]=useState([])
    console.log(id);

    const cardData=async()=>{
const {data}=await axios.get(`https://fakestoreapi.com/products/${id}` )
console.log(data);
setCard(data)
    }
    useEffect(() => {
      cardData()
    }, [])
    const deletecard=async(id)=>{
       await axios.delete(`https://fakestoreapi.com/carts/6`)
    }
    
  return (
    <div>
        <div className="row">
            {
                
                     <div className='col-sm-6 offset-sm-3 '>
                   <div className="card">
                    <div className="card-body d-flex">
                        <div>
                            <img src={card?.image} alt="" height={100} width="100px"  className='mt-5'/>
                        </div>
                        <div className='ms-2'>
                            <h3>{card?.title}</h3>
                            <h3>price :{card?.price}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                    <button onClick={()=>deletecard(card.id)}>remove</button>
                   </div>
                    </div>
  
                }
            
        </div>
    </div>
  )
}
