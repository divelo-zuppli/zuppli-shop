import React from "react"
import Carousel, { arrowsPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { CarouselContainer, Card } from './styles'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'

const array = ["1", "2", "3", "4", "5"]

const CardCarousel = () => {
  return (
    <Card color="#FFEFBD">
      <img src="https://i.ibb.co/XSNpN3f/zenubg.png" alt="grocery" />
      <div>
        <p className="title">20% de descuento en verduras</p>
        <p className="description">Siempre frescas y listas para usar.</p>
      </div>
    </Card>
  )
}

const NewsCarousel = () => {
  return (
  <CarouselContainer>
    <Carousel
      plugins={[
        {
          resolve: slidesToShowPlugin,
          options: {
          numberOfSlides: 3
          }
        },
        {
        resolve: arrowsPlugin,
        options: {
          arrowLeft: <button><BsFillArrowLeftCircleFill size={28} /></button>,
          arrowLeftDisabled:<button><BsFillArrowLeftCircleFill size={28} /></button>,
          arrowRight: <button><BsFillArrowRightCircleFill size={28} /></button>,
          arrowRightDisabled: <button><BsFillArrowRightCircleFill size={28} /></button>,
          addArrowClickHandler: true,
        }
      }
      ]}
    >
    {array.map(item => <CardCarousel key={item} />)}
    </Carousel>
  </CarouselContainer>
  )
}

export default NewsCarousel;
