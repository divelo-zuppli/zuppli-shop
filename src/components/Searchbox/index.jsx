import React from 'react'
import { Search, SearchContainer } from './styles'
import { FiSearch } from 'react-icons/fi'
import { color } from '../../variables'

const Searchbox = () => {

  return (
    <SearchContainer id="search-container">
    <FiSearch color={color.primary} />
      <Search placeholder='Busca cientos de productos para tu negocio' id="input-search" />
    </SearchContainer>
  )
}

export default Searchbox