import { ProductInfoContainer, ContentInfo, FoodTags, Controls } from './styles'

import { Button } from '../../components/Button'

import { MdKeyboardArrowLeft } from 'react-icons/md'
import { FiMinus, FiPlus } from 'react-icons/fi'
import parmaFood from '../../assets/food/food-parma.png'

export function ProductInfo() {
  const tags = [
    {
      id: 1,
      content: 'Bom',
    },
    {
      id: 2,
      content: 'Italia',
    },
    {
      id: 3,
      content: 'Salgado',
    },
    {
      id: 4,
      content: 'Salgado',
    },
    {
      id: 5,
      content: 'Salgado',
    },
  ]

  return (
    <ProductInfoContainer>
      <main>
        <a>
          <MdKeyboardArrowLeft size={32} color="#fff" />
          voltar
        </a>

        <img src={parmaFood} alt="" />

        <ContentInfo>
          <h2>Salada Ravanello</h2>

          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <FoodTags>
            {tags.map((tag) => {
              return <span key={tag.id}>{tag.content}</span>
            })}
          </FoodTags>

          <div className="controls-container">
            <Controls>
              <button>
                <FiMinus size={27} color="#fff" />
              </button>

              <span>0</span>

              <button>
                <FiPlus size={27} color="#fff" />
              </button>
            </Controls>

            <Button className="send-order" title="Pedir" icon={FiPlus} />
          </div>
        </ContentInfo>
      </main>
    </ProductInfoContainer>
  )
}
