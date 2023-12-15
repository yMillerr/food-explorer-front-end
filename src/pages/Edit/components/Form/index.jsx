import { useNavigate, useParams } from 'react-router-dom'

import { FormContainer, InputWrapper } from './styles'

import { SelectInput } from '../../../../components/SelectInput'
import { FileInput } from '../../../../components/FileInput'
import { TextArea } from '../../../../components/TextArea'
import { IngredientsWrapper } from '../IngredientsWrapper'
import { Button } from '../../../../components/Button'

import { useForm, Controller } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { productFormValidationSchema } from '../../../New/components/Form'

import { useProductsContext } from '../../../../context/ProductsContext'

import { CurrencyInput } from 'react-currency-mask'
import { useEffect } from 'react'

export function Form() {
  const { updateProduct, deleteProduct, products } = useProductsContext()

  const navigate = useNavigate()
  const { id } = useParams()

  const product =
    products.find((product) => product.id === Number(id)) ??
    JSON.parse(localStorage.getItem('@foodexplorer:product'))

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
    },
    resolver: zodResolver(productFormValidationSchema),
  })

  async function handleUpdateProduct(event) {
    const ingredients = JSON.parse(
      localStorage.getItem('@foodexplorer:ingredients'),
    )

    const { title, description, category, price, picture } = event

    const product = {
      title,
      description,
      category,
      price,
    }

    if (ingredients) {
      const ingredientsMap = ingredients.reduce((acc, ingredient) => {
        if (!ingredient.product_id) {
          acc.push(ingredient.name)
        }

        return acc
      }, [])

      const haveIngredient =
        ingredientsMap.length > 0 ? { ingredients: ingredientsMap } : {}

      Object.assign(product, haveIngredient)
    }

    await updateProduct({
      product,
      picture,
      id,
    })

    localStorage.removeItem('@foodexplrer:product')
    localStorage.removeItem('@foodexplorer:ingredients')
    return navigate(-1)
  }

  async function handleDeleteProduct() {
    const confirmation = window.confirm('Você deseja deletar esse produto?')

    if (confirmation) {
      await deleteProduct(id)

      return navigate(-1)
    }
  }

  const errorsInputNameInArray = Object.entries(errors).map((error) => error[0])

  const shortPictureName = product?.picture?.substring(0, 15).concat('...')

  useEffect(() => {
    localStorage.setItem('@foodexplorer:product', JSON.stringify(product))
  }, [])
  return (
    <FormContainer
      onSubmit={handleSubmit(handleUpdateProduct)}
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
              title={field?.value?.name ?? shortPictureName}
              value={''}
              onChange={(e) => field.onChange(e.target.files[0])}
            />
          )}
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="">Nome</label>

        <input
          type="text"
          {...register('title')}
          placeholder="Ex... Risoto de camarão"
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="">Categoria</label>

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

        <IngredientsWrapper intialIngredients={product.ingredients ?? []} />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="">Preço</label>

        <Controller
          control={control}
          name="price"
          render={({ field }) => (
            <CurrencyInput
              value={field.value}
              onChangeValue={(_, value) => {
                field.onChange(value)
              }}
              placeholder="R$ 00,00"
            />
          )}
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="">Descrição</label>

        <TextArea
          {...register('description')}
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        />
      </InputWrapper>

      <Button title="Salvar alterações" type="submit" />

      <Button title="Excluir" onClick={handleDeleteProduct} />
    </FormContainer>
  )
}
