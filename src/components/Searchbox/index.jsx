import React from 'react'
import { useNavigate  } from 'react-router-dom';
import { Search, SearchContainer } from './styles'
import { FiSearch } from 'react-icons/fi'
import { color } from '../../variables'

const Searchbox = ({ searchQuery, setSearchQuery }) => {

  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault()
    navigate(`?s=${searchQuery}`, { replace: true });
  };

  return (
    <SearchContainer
      action="/"
      method="get"
      autoComplete="off"
      onSubmit={onSubmit}
      id="search-container"
    >
      <FiSearch color={color.primary} />
        <Search
          placeholder='Busca cientos de productos para tu negocio'
          id="input-search"
          onInput={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
    </SearchContainer>
  )
}

export default Searchbox