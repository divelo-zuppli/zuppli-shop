import React from 'react'
import CategoriesSidebar from '../CategoriesSidebar'
import ProductCard from '../ProductCard'
import { getCurrentCategory } from '../../utils/functions'
import { AisleContainer, ProductsContainer } from './styles'
import { products } from './mock'

const filterProductsByCategory = products => {
  let currentCategory = getCurrentCategory()
  let filteredProducts = []

  for(let i = 0; i < products.length; i++) {
    if (products[i].category.name.replace(/\s+/g, '-').toLowerCase() === currentCategory.get("category")) {
      filteredProducts.push(products[i])
    }
  }

  return filteredProducts
}

const Aisle = () => {
  
  const filteredProducts = filterProductsByCategory(products)
  return (
    <AisleContainer>
      <CategoriesSidebar />
      <ProductsContainer>
        {filteredProducts.map(item=> <ProductCard product={item}/>)}
      </ProductsContainer>
    </AisleContainer>
  )
}

export default Aisle
