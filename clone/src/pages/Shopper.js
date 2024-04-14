import React, { useContext } from 'react'
import './CSS/Shopper.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Data from '../components/Data/Data';

const Shopper = (props) => {
  const {all_product} = useContext(ShopContext) 
  return (
    <div className='shopper'>
   <img className='shopper-banner' src={props.banner} alt="" />
   <div className='shopper-indexSort'>
    <p>
      <span>Showing 1-12</span> out of 36 products
    </p>
    <div className="shopper-sort">
      Sort by <img src={dropdown_icon}/>
    </div>

   </div>
   <div className="shopper-products">
    {all_product.map((item,i)=>{
    if(props.category === item.category){
        return <Data key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

    }
    else{
      return null;
    }
    })}
   </div>
   <div className="shopper-loadmore">
    Explore More
   </div>

      
    </div>
  )
}

export default Shopper
