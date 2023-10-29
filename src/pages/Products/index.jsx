import { Content, ProductsContainer, TagsWrapper } from './styles'

import notFoundPicture from '../../assets/img-notfound.png'

import { Link, useParams } from 'react-router-dom'

import { IconArrowLeft } from '../../assets/icons/icon-arrow-left.svg'

import { Button } from '../../components/Button'
import { Stepper } from '../../components/Stepper'
import { ButtonLink } from '../../components/ButtonLink'
import { Tag } from '../../components/Tag'

import { useEffect } from 'react'

import { useAuthContext } from '../../context/AuthContext'
import { useProductsContext } from '../../context/ProductsContext'

export function Products() {
  const { isAdmin } = useAuthContext()
  const { fetchProduct, product } = useProductsContext()

  const { id } = useParams()

  const productPicture = !product.picture
    ? notFoundPicture
    : `https://foodexplorer-api-fs1b.onrender.com/files/${product.picture}`

  useEffect(() => {
    fetchProduct(id)
  }, [])

  return (
    <ProductsContainer>
      <Content>
        <header>
          <Link to="/">
            <IconArrowLeft size={16} />
            voltar
          </Link>

          <img src={productPicture} alt="" />
        </header>

        <main>
          <h3>{product.title}</h3>

          <p>{product.description}</p>

          <TagsWrapper>
            {product.ingredients &&
              product.ingredients.map((ingredient) => (
                <Tag title={ingredient.name} key={ingredient.id} />
              ))}
          </TagsWrapper>

          <section>
            {isAdmin ? (
              <ButtonLink title="Editar Prato" to={`/edit/${product.id}`} />
            ) : (
              <>
                <Stepper />
                <Button title="Adicionar" />
              </>
            )}
          </section>
        </main>
      </Content>
    </ProductsContainer>
  )
}
