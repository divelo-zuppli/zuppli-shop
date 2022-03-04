import React from 'react'
import { Link } from 'react-router-dom'
import { getCurrentCategory } from '../../utils/functions'
import { CategoriesContainer } from './styles'

const categories = [{
    name: 'Frutas y verduras',
    icon: 'name'
  },
  {
    name: 'Embutidos',
    icon: 'name'
  },
  {
    name: 'Lácteos y quesos',
    icon: 'name'
  },
  {
    name: 'Panes',
    icon: 'name'
  },
  {
    name: 'papelería',
    icon: 'name'
  }]

const CategoryItem = ({ item }) => {
  let query = getCurrentCategory()

  const category = item.name.replace(/\s+/g, '-').toLowerCase()
  const activeCategory = query.get("category") === category
  return (
    <Link to={`/home?category=${item.name.replace(/\s+/g, '-').toLowerCase()}`} className='item'>
      <p className={`${activeCategory && 'active'}`} >{item.name}</p>
    </Link>
  )
}

const CategoriesSidebar = () => {
  return (
    <CategoriesContainer>
      {categories.map(item => <CategoryItem item={item} />)}
    </CategoriesContainer>
  )
}

export default CategoriesSidebar
