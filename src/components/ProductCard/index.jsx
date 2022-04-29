import React from 'react'
import { CardContainer, LegendContainer } from './styles'
import { MdAdd } from 'react-icons/md'

const ProductCard = ({ product }) => {
  const { url } = product.referenceAttachments.attachment
  return (
    <CardContainer>
      <div className='image-container'>
        <img src={url} alt={product.name} />
      </div>
      <div className="add-button">
        <MdAdd size={24}/>
      </div>
      <LegendContainer>
        <p className='price'>$1200</p>
        <p className='title'>{product.name}</p>
        <p className='package-type'>{product.packageType}</p>

      </LegendContainer>
    </CardContainer>
  )  
}

export default ProductCard
