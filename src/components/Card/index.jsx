import { CardContainer, ControlsContainer } from './styles'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { BsPencil } from 'react-icons/bs'
import { FiMinus, FiPlus } from 'react-icons/fi'

import parmaFood from '../../assets/food/food-parma.png'
import { Button } from '../Button'

export function Card({ isAdmin = false }) {
  return (
    <CardContainer>
      {isAdmin ? (
        <a className="button-top">
          <BsPencil size={24} />
        </a>
      ) : (
        <button className="button-top">
          <MdFavoriteBorder size={24} />
        </button>
      )}

      <img src={parmaFood} alt="" />

      <h3>Torradas de Parma </h3>

      <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>

      <span>R$ 25,50</span>

      {!isAdmin && (
        <ControlsContainer>
          <div>
            <button>
              <FiMinus size={24} />
            </button>

            <span>0</span>

            <button>
              <FiPlus size={24} />
            </button>
          </div>

          <Button title="incluir" />
        </ControlsContainer>
      )}
    </CardContainer>
  )
}
