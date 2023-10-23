import { HomeContainer, Content, FrameContainer } from './styles'

import frameImgDesktop from '../../assets/img-frame-desktop.png'
import frameImgMobile from '../../assets/img-frame-mobile.png'

import { Carousel } from '../../components/Carousel'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'

import { useProductsContext } from '../../context/ProductsContext'

export function Home() {
  const { products } = useProductsContext()

  const categories = products.reduce((acc, product) => {
    const productCategoryToLowerCase = product.category.toLowerCase()

    if (!acc.includes(productCategoryToLowerCase)) {
      acc.push(productCategoryToLowerCase)
    }

    return acc
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
          {categories.map((category) => {
            return (
              <Section
                key={category}
                title={category.replace(category[0], category[0].toUpperCase())}
              >
                <Carousel>
                  {products
                    .filter(
                      (productCategory) =>
                        productCategory.category === category,
                    )
                    .map((product) => {
                      return (
                        <Card
                          product={product}
                          key={product.id}
                          className="keen-slider__slide"
                        />
                      )
                    })}
                </Carousel>
              </Section>
            )
          })}
        </Content>
      </main>
    </HomeContainer>
  )
}
