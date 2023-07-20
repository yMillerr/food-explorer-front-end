import { InputWrapper, NewContainer, Form, TagsWrapper } from './styles'

import { Button } from '../../components/Button'
import { FileInput } from '../../components/FileInput'

import { MdKeyboardArrowLeft } from 'react-icons/md'

import { Link } from 'react-router-dom'
import { SelectInput } from '../../components/SelectInput'
import { Tags } from '../../components/Tags'

export function New() {
  return (
    <NewContainer>
      <main>
        <Link href="/">
          <MdKeyboardArrowLeft size={22} />
          voltar
        </Link>

        <h2>Novo Prato</h2>

        <Form action="">
          <InputWrapper>
            <label htmlFor="">Imagem do prato</label>
            <FileInput title="Selecione imagem" />
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="">Nome</label>
            <input type="text" />
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="">Categoria</label>
            <SelectInput />
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="">Ingredientes</label>
            <TagsWrapper>
              <Tags isNew value="Oi" />
              <Tags />
            </TagsWrapper>
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="">Preço</label>
            <input type="number" />
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="">Descrição</label>
            <textarea />
          </InputWrapper>

          <Button title="Salvar alterações" />
        </Form>
      </main>
    </NewContainer>
  )
}
