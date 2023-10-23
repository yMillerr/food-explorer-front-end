import { TagsContainer } from './styles'

import { FiX, FiPlus } from 'react-icons/fi'

export function Ingredients({ isnew = false, value, onClick, ...rest }) {
  return (
    <TagsContainer isnew={isnew ? 1 : 0}>
      <input type="text" value={value} readOnly={isnew} {...rest} />

      <button onClick={onClick} type="button">
        {isnew ? <FiX size={10} /> : <FiPlus size={10} />}
      </button>
    </TagsContainer>
  )
}
