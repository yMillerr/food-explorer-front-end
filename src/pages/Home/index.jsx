import { HomeContainer, Content, FrameContainer, Carousels } from './styles'

import frameImgDesktop from '../../assets/img-frame-desktop.png'
import frameImgMobile from '../../assets/img-frame-mobile.png'

import { Card } from '../../components/Card'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { Section } from '../../components/Section'

export function Home() {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      '(max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },

      '(min-width: 1024px)': {
        slides: {
          perView: 4,
          spacing: 27,
        },
      },
    },
  })

  return (
    <HomeContainer>
      <main>
        <Content>
          <FrameContainer>
            <img src={frameImgMobile} alt="" className="frame-mobile" />

            <img src={frameImgDesktop} alt="" className="frame-desktop" />

            <div>
              <h3>Sabores inigualáveis</h3>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </FrameContainer>

          <Section title="Refeições">
            <Carousels ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide">
                <Card />
              </div>

              <div className="keen-slider__slide">
                <Card />
              </div>

              <div className="keen-slider__slide">
                <Card />
              </div>

              <div className="keen-slider__slide">
                <Card />
              </div>

              <div className="keen-slider__slide">
                <Card />
              </div>

              <div className="keen-slider__slide">
                <Card />
              </div>

              <div className="keen-slider__slide">
                <Card />
              </div>
            </Carousels>
          </Section>

          <Section title="Bebidas">
            <Carousels ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide">
                <Card />
              </div>

              <div className="keen-slider__slide">
                <Card />
              </div>

              <div className="keen-slider__slide">
                <Card />
              </div>
            </Carousels>
          </Section>

          <Section title="Sobremesas">
            <Carousels ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide">
                <Card />
              </div>

              <div className="keen-slider__slide">
                <Card />
              </div>

              <div className="keen-slider__slide">
                <Card />
              </div>
            </Carousels>
          </Section>
        </Content>
      </main>
    </HomeContainer>
  )
}
