import { TagsContainer } from './styles'

import { FiX, FiPlus } from 'react-icons/fi'

export function Tags({ isNew = false, value, onClick }) {
  return (
    <TagsContainer isNew={isNew}>
      <input type="text" value={value} readOnly={isNew} />

      <button onClick={onClick}>
        {isNew ? <FiX size={10} /> : <FiPlus size={10} />}
      </button>
    </TagsContainer>
  )
}
