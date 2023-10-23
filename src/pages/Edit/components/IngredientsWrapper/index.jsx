import { useEffect, useState } from 'react'

import { IngredientsWrapperContainer } from './styles'

import { Ingredients } from '../../../../components/Ingredients'

import { useProductsContext } from '../../../../context/ProductsContext'

export function IngredientsWrapper({ intialIngredients }) {
  const { deleteIngredient } = useProductsContext()

  const [ingredients, setIngredients] = useState(intialIngredients)
  const [ingredientsText, setIngredientsText] = useState('')

  async function handleDeleteIngredient(ingredientRemoved) {
    const ingredientsFilter = ingredients.filter(
      (ingredient) => ingredient.id !== ingredientRemoved.id,
    )

    await deleteIngredient(ingredientRemoved.id)

    setIngredients(ingredientsFilter)
  }

  function handleAddIngredient() {
    if (!ingredientsText) {
      return
    }

    setIngredients((prev) => [
      ...prev,
      { id: new Date().getMilliseconds(), name: ingredientsText },
    ])

    setIngredientsText('')
  }

  useEffect(() => {
    localStorage.setItem(
      '@foodexplorer:ingredients',
      JSON.stringify(ingredients),
    )
  }, [ingredients])

  return (
    <IngredientsWrapperContainer>
      <Ingredients
        onChange={(event) => setIngredientsText(event.target.value)}
        value={ingredientsText}
        onClick={handleAddIngredient}
        placeholder="Adicionar"
      />

      {ingredients &&
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
