import React, { useEffect, useState} from 'react'
import { Product } from '../../types/product'
import { useParams } from 'react-router-dom'
import { RouteParams } from '../../types/routeParams'
import axios from 'axios'

import "./styles.css";

const ProductPage = () => {
  const params = useParams<RouteParams>()
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then(resposta => setProduct(resposta.data))
  }, [params])

  return (
    <ul>
      <h2>Your product is: {product?.title}</h2>
      <div className="product-wrapper">
        <img src={product?.image} alt={product?.title} width="10%"></img>
        <div className="product-details-wrapper">
          <span>Category: {product?.category}</span>
          <p>Description: {product?.description}</p>
          <p>Price: {product?.price}</p>
        </div>
      </div>
    </ul>
  )
}

export default ProductPage


