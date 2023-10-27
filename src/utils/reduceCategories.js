export function reduceCategories(products) {
  const categories = products.reduce((acc, product) => {
    const productCategoryToLowerCase = product.category.toLowerCase()

    if (!acc.includes(productCategoryToLowerCase)) {
      acc.push(productCategoryToLowerCase)
    }

    return acc
  }, [])

  return categories
}
