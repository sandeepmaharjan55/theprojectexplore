// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { Star } from 'react-feather'
import { CardText } from 'reactstrap'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// ** Related products images
import img1 from '@src/assets/images/elements/tatootest.png'


// ** Styles
import '@styles/react/libs/swiper/swiper.scss'

const RelatedDesigns = () => {
  SwiperCore.use([Navigation])

  // ** Related products Slides
  const slides = [
    {
      name: 'Tatoo First',
      artist: 'Ashik',
      price: 399.98,
      img: img1
    },
    {
      name: 'Tatoo First',
      artist: 'Ashik',
      price: 2449.49,
      img: img1
    },
    {
      name: 'Tatoo First',
      artist: 'Ashik',
      price: 229.29,
      img: img1
    },
    {
      name: 'Tatoo First',
      artist: 'Ashik',
      price: 90.98,
      img: img1
    },
    {
      name: 'Tatoo First',
      artist: 'Ashik',
      price: 1559.99,
      img: img1
    }
  ]

  // ** Slider params
  const params = {
    className: 'swiper-responsive-breakpoints swiper-container px-4 py-2',
    slidesPerView: 5,
    spaceBetween: 55,
    navigation: true,
    breakpoints: {
      1600: {
        slidesPerView: 4,
        spaceBetween: 55
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 55
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 55
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 55
      }
    }
  }

  return (
    <Fragment>
      <div className='mt-4 mb-2 text-center'>
        <h4>Related Designs</h4>
        <CardText>People also search for this items</CardText>
      </div>
      <Swiper {...params}>
        {slides.map(slide => {
          return (
            <SwiperSlide key={slide.name}>
              <a href='/' onClick={e => e.preventDefault()}>
                <div className='item-heading'>
                  <h5 className='text-truncate mb-0'>{slide.name}</h5>
                  <small className='text-body'>by {slide.artist}</small>
                </div>
                <div className='img-container w-50 mx-auto py-75'>
                  <img src={slide.img} alt='swiper 1' className='img-fluid' />
                </div>
                <div className='item-meta'>
                  <CardText className='text-primary mb-0 ml-5'>${slide.price}</CardText>
                </div>
              </a>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Fragment>
  )
}

export default RelatedDesigns
