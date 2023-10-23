import { useState } from 'react'

import { CarouselContainer } from './styles'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { IconCarouselArrows } from '../../assets/icons/icon-carousel-arrows.svg'

export function Carousel({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [maxIndex, setMaxIndex] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 27,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 32,
        },
        drag: false,
      },
      '(max-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 16,
        },
        drag: false,
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
        {children}
      </div>
      {loaded && instanceRef.current && (
        <>
          <button
            className="arrow-left"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          >
            <IconCarouselArrows left size={40} disabled={currentSlide === 0} />
          </button>

          <button
            className="arrow-right"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          >
            <IconCarouselArrows
              size={40}
              disabled={currentSlide === maxIndex}
            />
          </button>
        </>
      )}
    </CarouselContainer>
  )
}
