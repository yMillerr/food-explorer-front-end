import { InputFileContainer } from './styles'
import { MdOutlineFileUpload } from 'react-icons/md'

import { forwardRef } from 'react'

export const FileInput = forwardRef(function FileInput(
  { title, ...rest },
  ref,
) {
  return (
    <InputFileContainer>
      <label htmlFor="file-input">
        <MdOutlineFileUpload size={24} />
        {title ?? 'Selecione um imagem'}
      </label>

      <input
        type="file"
        id="file-input"
        accept="image/png, image/jpeg"
        ref={ref}
        {...rest}
      />
    </InputFileContainer>
  )
})
