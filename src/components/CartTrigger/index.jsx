import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { Container } from './styles'

const CartTrigger = ({ cartItems }) => {

  const triggerCart = () => {
    alert(`Abre el carrito con ${cartItems} producto${cartItems > 1 ? 's' : ''}`)
  }

  return (
    <Container onClick={() => triggerCart()}>
      <FiShoppingCart size={26}/>
      {cartItems === 0 ? null :
        <div className="number-container">
          {cartItems}
        </div>
      }
      <span>Carrito</span>
    </Container>
  )
}

export default CartTrigger