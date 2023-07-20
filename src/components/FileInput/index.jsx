/* eslint-disable react/prop-types */
import { InputFileContainer } from './styles'
import { MdOutlineFileUpload } from 'react-icons/md'

export function FileInput({ title }) {
  return (
    <InputFileContainer>
      <label htmlFor="input-file">
        <MdOutlineFileUpload size={24} />
        {title}
      </label>

      <input type="file" id="input-file" />
    </InputFileContainer>
  )
}
