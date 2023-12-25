import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useNavigate } from 'react-router-dom'

import * as z from 'zod'

import { FormContainer, InputWrapper } from './styles'

import { SelectInput } from '../../../../components/SelectInput'
import { FileInput } from '../../../../components/FileInput'
import { TextArea } from '../../../../components/TextArea'
import { IngredientsWrapper } from '../IngredientsWrapper'
import { Button } from '../../../../components/Button'

import { useProductsContext } from '../../../../context/ProductsContext'

import { CurrencyInput } from 'react-currency-mask'

export const productFormValidationSchema = z.object({
  title: z.string().min(1),
  category: z.string(),
  price: z.number(),
  description: z.string().min(1),
  picture: z.custom(),
})

export function Form() {
  const { createNewProduct } = useProductsContext()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productFormValidationSchema),
  })

  async function handleCreateProduct(event) {
    const { title, price, description, picture, category } = event

    const ingredients = JSON.parse(
      localStorage.getItem('@foodexplorer:ingredients'),
    )

    const product = {
      title,
      price,
      description,
      category,
      ingredients:
        ingredients.length > 0
          ? ingredients.map((ingredient) => ingredient.name)
          : [],
    }

    await createNewProduct({
      product,
      picture,
    })

    navigate(-1)
    reset()

    return localStorage.removeItem('@foodexplorer:ingredients')
  }

  const errorsInputNameInArray = Object.entries(errors).map((error) => error[0])
  return (
    <FormContainer
      onSubmit={handleSubmit(handleCreateProduct)}
      errors={errorsInputNameInArray}
    >
      <InputWrapper>
        <label htmlFor="">Imagem do prato</label>

        <Controller
          control={control}
          name="picture"
          render={({ field }) => (
            <FileInput
              {...field}
              title={field?.value?.name}
              value={''}
              onChange={(e) => field.onChange(e.target.files[0])}
            />
          )}
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="title">Nome</label>

        <input
          type="text"
          id="title"
          placeholder="Adicone o nome do produto"
          {...register('title')}
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="category">Categoria</label>

        <Controller
          control={control}
          name="category"
          render={({ field }) => {
            return (
              <SelectInput
                {...field}
                onChange={field.onChange}
                value={field.value}
                ref={field.ref()}
                data-error={!!errors.category}
                options={[
                  { value: 'bebidas', label: 'Bebidas' },
                  { value: 'refeições', label: 'Refeições' },
                  { value: 'sobremesas', label: 'Sobremesas' },
                ]}
              />
            )
          }}
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="">Ingredientes</label>

        <IngredientsWrapper />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="price">Preço</label>

        <Controller
          control={control}
          name="price"
          render={({ field }) => (
            <CurrencyInput
              {...field}
              value={field.value}
              onChangeValue={(_, value) => field.onChange(value)}
              placeholder="R$ 00,00"
              id="price"
            />
          )}
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="description">Descrição</label>

        <TextArea {...register('description')} id="description" />
      </InputWrapper>

      <Button title="Salvar alterações" type="submit" />
    </FormContainer>
  )
}
