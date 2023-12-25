import { createContext, useContext, useState } from 'react'

import { api } from '../utils/axios'
import { useNotificationContext } from './NotificationContext'

export const ProductsContext = createContext({})

export function ProductsContextProvider({ children }) {
  const { createNotification, errosNotificationHandler } =
    useNotificationContext()

  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [productSearched, setProductsSearched] = useState([])

  async function createNewProduct({ product, picture }) {
    try {
      const {
        data: { productId },
      } = await api.post('/products', product)

      if (picture) {
        const fileToFormData = new FormData()
        fileToFormData.append('picture', picture)

        const { data } = await api.patch(
          `/products/picture/${productId}`,
          fileToFormData,
        )

        Object.assign(product, data)
      }

      setProducts((prevState) => [...prevState, { id: productId, ...product }])

      return createNotification({
        title: 'Produto criado com sucesso!!',
        status: 'sucess',
      })
    } catch (error) {
      return errosNotificationHandler(
        error,
        'Não foi possível criar o produto!!',
      )
    }
  }

  async function deleteProduct(id) {
    try {
      await api.delete(`/products/${id}`)

      const productNotRemoved = products.filter((product) => product.id !== id)

      setProducts(productNotRemoved)

      return createNotification({
        title: 'Produto deletado com sucesso!!',
        status: 'sucess',
      })
    } catch (error) {
      return errosNotificationHandler(
        error,
        'Não foi possível deletar o produto',
      )
    }
  }

  async function updateProduct({ product, picture, id }) {
    try {
      await api.put(`/products/${id}`, product)

      if (picture) {
        const fileToFormData = new FormData()
        fileToFormData.append('picture', picture)

        const { data } = await api.patch(
          `/products/picture/${id}`,
          fileToFormData,
        )

        Object.assign(product, data)
      }

      const updatedProducts = products.map((oldProduct) => {
        if (oldProduct.id === Number(id)) {
          return { id: Number(id), ...product }
        }

        return oldProduct
      })

      setProducts(updatedProducts)

      return createNotification({
        title: 'Produto atualizado com sucesso!!',
        status: 'sucess',
      })
    } catch (error) {
      return errosNotificationHandler(
        error,
        'Não foi possível atualizar o produto!',
      )
    }
  }

  async function fetchProduct(id) {
    try {
      const { data } = await api.get(`/products/${id}`)

      return setProduct(data)
    } catch (error) {
      return errosNotificationHandler(error)
    }
  }

  async function fetchProducts() {
    try {
      const { data } = await api.get('/products')

      return setProducts(data)
    } catch (error) {
      return errosNotificationHandler(error)
    }
  }

  async function queryProducts(query) {
    try {
      if (!query) {
        return setProductsSearched([])
      }

      const { data } = await api.get('/products', {
        params: {
          query,
        },
      })

      return setProductsSearched(data)
    } catch (error) {
      return errosNotificationHandler(error)
    }
  }

  async function deleteIngredient(ingredientId) {
    try {
      await api.delete(`/ingredients/${ingredientId}`)

      return createNotification({
        title: 'Ingrediente deletado com sucesso!!',
        status: 'sucess',
      })
    } catch (error) {
      return errosNotificationHandler(
        error,
        'Não foi possível remover o ingrediente!',
      )
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        createNewProduct,
        deleteProduct,
        updateProduct,
        deleteIngredient,
        fetchProducts,
        fetchProduct,
        product,
        products,
        productSearched,
        queryProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export function useProductsContext() {
  const context = useContext(ProductsContext)

  return context
}
