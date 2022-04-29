import React from 'react'
import CategoriesSidebar from '../CategoriesSidebar'
import ProductCard from '../ProductCard'
import { getCurrentCategory } from '../../utils/functions'
import { AisleContainer, ProductsContainer } from './styles'

const filterProductsByCategory = products => {
  let currentCategory = getCurrentCategory()
  let filteredProducts = []

  if(!currentCategory.get("category")) {
    return products
  }

  for(let i = 0; i < products.length; i++) {
    if (products[i].category.name.replace(/\s+/g, '-').toLowerCase() === currentCategory.get("category")) {
      filteredProducts.push(products[i])
    }
  }

  return filteredProducts
}

const Aisle = products => {
  const filteredProducts = filterProductsByCategory(products.products)
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
