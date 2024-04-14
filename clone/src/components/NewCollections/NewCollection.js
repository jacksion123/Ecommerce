import React, { useEffect, useState } from 'react'
import "./NewCollection.css";
// import new_collection from "../Assets/new_collections"
import Data from '../Data/Data';
const NewCollection = () => {
  const [new_collection,setNew_collection] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/newcollection').then((resp)=>resp.json()).then((data)=>setNew_collection(data));
  },[])
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
    {new_collection.map((item,i)=>{
   return <Data key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })

    }
      </div>
    </div>
  )
}

export default NewCollection
