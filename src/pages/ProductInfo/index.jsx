import { Content, ProductInfoContainer, TagsWrapper } from './styles'

import parmaFood from '../../assets/food/food-parma.png'

import { Link } from 'react-router-dom'

import { IconArrowLeft } from '../../assets/icons/icon-arrow-left.svg'

import { Button } from '../../components/Button'
import { Stepper } from '../../components/Stepper'
import { ButtonLink } from '../../components/ButtonLink'
import { Tag } from '../../components/Tag'

export function ProductInfo({ isAdmin = false }) {
  const tags = [
    {
      id: 1,
      title: 'Bom',
    },
    {
      id: 2,
      title: 'Italia',
    },
    {
      id: 3,
      title: 'Salgado',
    },
    {
      id: 4,
      title: 'Salgado',
    },
    {
      id: 5,
      title: 'Salgado',
    },
  ]

  return (
    <ProductInfoContainer>
      <Content>
        <header>
          <Link to="/">
            <IconArrowLeft size={16} />
            voltar
          </Link>

          <img src={parmaFood} alt="" />
        </header>

        <main>
          <h3>Salada Ravanello</h3>

          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <TagsWrapper>
            {tags && tags.map((tag) => <Tag title={tag.title} key={tag.id} />)}
          </TagsWrapper>

          <section>
            {isAdmin ? (
              <ButtonLink title="Editar Prato" to="/" />
            ) : (
              <>
                <Stepper />
                <Button title="Adicionar" />
              </>
            )}
          </section>
        </main>
      </Content>
    </ProductInfoContainer>
  )
}
