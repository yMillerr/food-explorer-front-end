import { useEffect, useState } from 'react'
import { api } from '../../../../utils/axios'

import { IngredientsWrapperContainer } from './styles'

import { Ingredients } from '../../../../components/Ingredients'

import { useProductsContext } from '../../../../context/ProductsContext'
import { useParams } from 'react-router-dom'

export function IngredientsWrapper() {
  const { deleteIngredient } = useProductsContext()

  const [ingredients, setIngredients] = useState([])
  const [ingredientsText, setIngredientsText] = useState('')

  const { id } = useParams({})

  async function handleDeleteIngredient(ingredientRemoved) {
    const ingredientsFilter = ingredients.filter(
      (ingredient) => ingredient.id !== ingredientRemoved.id,
    )

    await deleteIngredient(ingredientRemoved.id)

    setIngredients(ingredientsFilter)
  }

  function handleAddIngredient() {
    if (!ingredientsText) return

    setIngredients((prev) => {
      const allIngredients = [
        ...prev,
        { id: new Date().getMilliseconds(), name: ingredientsText },
      ]

      if (allIngredients.length > 0) {
        localStorage.setItem(
          '@foodexplorer:ingredients',
          JSON.stringify(allIngredients),
        )

        return allIngredients
      }

      return []
    })

    setIngredientsText('')
  }

  async function fetchIngredients() {
    const { data } = await api.get(`/ingredients/${id}`)

    return setIngredients(data)
  }

  useEffect(() => {
    fetchIngredients()
  }, [])

  return (
    <IngredientsWrapperContainer>
      <Ingredients
        onChange={(event) => setIngredientsText(event.target.value)}
        value={ingredientsText}
        onClick={handleAddIngredient}
        placeholder="Adicionar"
      />

      {ingredients.length > 0 &&
        ingredients.map((ingredient) => {
          return (
            <Ingredients
              key={ingredient.id}
              isnew
              value={ingredient.name}
              onClick={() => handleDeleteIngredient(ingredient)}
            />
          )
        })}
    </IngredientsWrapperContainer>
  )
}
