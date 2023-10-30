import { Link } from 'react-router-dom'

import { CardContainer } from './styles'

import { Stepper } from '../../components/Stepper'
import { Button } from '../Button'

import notFoundPicture from '../../assets/img-notfound.png'

import { IconHeart } from '../../assets/icons/icon-heart.svg'
import { IconPencil } from '../../assets/icons/icon-pencil.svg'

import { useAuthContext } from '../../context/AuthContext'

import { useState } from 'react'
import { useNotificationContext } from '../../context/NotificationContext'

import { api } from '../../utils/axios'

export function Card({ product, ...rest }) {
  const { isAdmin } = useAuthContext()
  const { createNotification } = useNotificationContext()

  const [favoriteProducts, setFavoriteProducts] = useState(() => {
    const getFavoriteProductsFromLocalStorage = JSON.parse(
      localStorage.getItem('@foodexplorer:favoriteProducts'),
    )

    if (getFavoriteProductsFromLocalStorage) {
      return getFavoriteProductsFromLocalStorage
    }

    return []
  })

  async function handleAddFavoriteProduct(product) {
    setFavoriteProducts((prevState) => {
      const allFavoriteProducts = [...prevState, product]

      localStorage.setItem(
        '@foodexplorer:favoriteProducts',
        JSON.stringify(allFavoriteProducts),
      )

      return allFavoriteProducts
    })
  }

  function handleRemoveFavoriteProduct(removedProduct) {
    const favoriteProductsFiltered = favoriteProducts.filter(
      (product) => product.id !== removedProduct.id,
    )

    localStorage.setItem(
      '@foodexplorer:favoriteProducts',
      JSON.stringify(favoriteProductsFiltered),
    )

    setFavoriteProducts(favoriteProductsFiltered)
  }

  function handleAddProduct(product) {
    const { title } = product

    createNotification({
      title: `${title} foi adicionado ao seu carrinho`,
      status: 'sucess',
    })
  }

  const productPicture = !product.picture
    ? notFoundPicture
    : `${api.defaults.baseURL}/files/${product.picture}`

  const isFavorite = favoriteProducts.find((prod) => prod.id === product.id)

  return (
    <CardContainer {...rest}>
      <header>
        {isAdmin ? (
          <Link to={`/edit/${product.id}`}>
            <IconPencil />
          </Link>
        ) : (
          <button
            onClick={
              isFavorite
                ? () => handleRemoveFavoriteProduct(product)
                : () => handleAddFavoriteProduct(product)
            }
          >
            {isFavorite ? <IconHeart isFavorite /> : <IconHeart />}
          </button>
        )}
      </header>

      <main>
        <img src={productPicture} alt="" />

        <Link to={`/product/${product.id}`} title={`ver ${product.title}`}>
          {product.title}
          <span>&#10095;</span>
        </Link>

        <p>{product.description}</p>

        <span>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Number(product.price))}
        </span>
      </main>

      {!isAdmin && (
        <footer>
          <Stepper />
          <Button title="incluir" onClick={() => handleAddProduct(product)} />
        </footer>
      )}
    </CardContainer>
  )
}
