import { useState } from 'react'

import { CarouselContainer } from './styles'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { IconCarouselArrows } from '../../assets/icons/icon-carousel-arrows.svg'
import { Card } from '../Card'

export function Carousel({ products, category }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [maxIndex, setMaxIndex] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 27,
    },
    drag: false,
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 16,
        },
        drag: true,
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created(slider) {
      setLoaded(true)
      setMaxIndex(slider.track.details.maxIdx)
    },
  })

  return (
    <CarouselContainer>
      <div ref={sliderRef} className="keen-slider">
        {products
          .filter((product) => product.category === category)
          .map((product) => (
            <div key={product.id} className="keen-slider__slide">
              <Card product={product} />
            </div>
          ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <button
            className="arrow-left"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          >
            <IconCarouselArrows left size={40} />
          </button>

          <button
            className="arrow-right"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={maxIndex === currentSlide}
          >
            <IconCarouselArrows size={40} />
          </button>
        </>
      )}
    </CarouselContainer>
  )
}
