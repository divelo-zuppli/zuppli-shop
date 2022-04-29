import React from 'react'
import { Container } from './styles.js'
import logo from '../../assets/logo.svg'
import Searchbox from '../Searchbox/index.jsx'
import CartTrigger from '../CartTrigger/index.jsx'
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi'

const Header = ({ user, searchQuery, setSearchQuery }) => {

  return (
    <Container>
      <Link to="/" className="logo">
        <img src={logo} alt="Zuppli"/>
      </Link>
      <Searchbox 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className='right-container'>
        <CartTrigger cartItems={1} />
        <Link to={!user ? "/login" : "/profile"} className='link'>
          <FiUser size={26} />
          <span>{!user ? "Ingresar" : `${user.displayName ? '¡Hola, ' + user.displayName.split(" ")[0] + '!' : '¡Hola!'}`}</span>
        </Link>
      </div>
    </Container>
  )
}

export default Header