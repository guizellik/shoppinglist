import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '../../types/product'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import "./styles.css";

const HomePage = () => {

  const [productList, setProductList] = useState<Product[]>([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(resposta => setProductList(resposta.data))
  }, [])

  return (
      <ul className="product-list">
      {
        productList.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span> <br/>
              <span>Price: ${item.price}</span> <br/>
              <button><Link to={`/products/${item.id}`}>Buy it now!</Link></button> <br/>
            </li>
          )
        })
      }
    </ul>
  )
}

export default HomePage