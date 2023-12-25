import { useState } from 'react'

import { Ingredients } from '../../../../components/Ingredients'
import { IngredientsWrapperContainer } from './styles'

import { useNotificationContext } from '../../../../context/NotificationContext'

export function IngredientsWrapper() {
  const [ingredients, setIngredients] = useState([])
  const [ingredientsText, setIngredientsText] = useState('')

  const { createNotification } = useNotificationContext()

  function handleDeleteIngredient(removed) {
    const ingredientsFilter = ingredients.filter(
      (ingredient) => ingredient !== removed,
    )

    localStorage.setItem(
      '@foodexplorer:ingredients',
      JSON.stringify(ingredientsFilter),
    )

    setIngredients(ingredientsFilter)
  }

  function handleAddIngredient() {
    if (!ingredientsText) {
      return createNotification({
        title: 'Você precisa inserir no minímo 1 caracter',
      })
    }

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
      }

      return allIngredients
    })

    setIngredientsText('')
  }

  return (
    <IngredientsWrapperContainer>
      <Ingredients
        onChange={(e) => setIngredientsText(e.target.value)}
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
