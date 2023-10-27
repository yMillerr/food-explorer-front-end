import { HomeContainer, Content, FrameContainer } from './styles'

import frameImgDesktop from '../../assets/img-frame-desktop.png'
import frameImgMobile from '../../assets/img-frame-mobile.png'

import { Section } from '../../components/Section'

import { useProductsContext } from '../../context/ProductsContext'
import { useEffect } from 'react'

import { Carousel } from '../../components/Carousel'
import { reduceCategories } from '../../utils/reduceCategories'

export function Home() {
  const { products, productSearched, fetchProducts } = useProductsContext()

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <HomeContainer>
      <main>
        <FrameContainer>
          <img src={frameImgMobile} alt="" className="frame-mobile" />

          <img src={frameImgDesktop} alt="" className="frame-desktop" />

          <div>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </FrameContainer>

        <Content>
          {productSearched.length <= 0 &&
            reduceCategories(products).map((category) => {
              return (
                <Section
                  key={category}
                  title={category.replace(
                    category[0],
                    category[0].toUpperCase(),
                  )}
                >
                  <Carousel products={products} category={category} />
                </Section>
              )
            })}

          {productSearched.length > 0 &&
            reduceCategories(productSearched).map((category) => {
              return (
                <Section
                  key={category}
                  title={category.replace(
                    category[0],
                    category[0].toUpperCase(),
                  )}
                >
                  <Carousel products={productSearched} category={category} />
                </Section>
              )
            })}
        </Content>
      </main>
    </HomeContainer>
  )
}
