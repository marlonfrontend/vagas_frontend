const getProducts = ($axios) => { return $axios.$get('1gnnec') }
const getStores = ($axios) => { return $axios.$get('nher8') }

const getProductsWithStores = async ($axios, {skip = 0, limit = 4} = {}) => {
  const [products, stores] = await Promise.all([
    getProducts($axios),
    getStores($axios)
  ])
  const data = products.map(product => ({
    ...product,
    store: stores.find(({ id }) => product.storeid === id)
  }))
  .filter((_, index) => index < limit && index >= skip)
  return data
}

export {
  getProducts,
  getStores,
  getProductsWithStores
}