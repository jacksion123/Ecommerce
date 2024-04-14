import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
// import Breadnums from '../components/Breadnums/Breadnums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Breadcums from '../components/Breadcums/Breadcums';
import Description from '../components/DescriptionBox/Description';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';
// import all_product from '../components/Assets/all_product';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();

  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
     <Breadcums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
