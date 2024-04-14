import React, { useEffect, useState } from 'react'
import './Popular.css';
import data_product from '../Assets/data';
import Data from '../Data/Data';
const Popular = () => {
  const [popularProduct,setPopularproducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((resp)=>resp.json())
    .then((data)=>setPopularproducts(data));
  },[])
  return (
    <div className='popular'>
  <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProduct.map((item,i)=>{
          return <Data key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}


export default Popular
