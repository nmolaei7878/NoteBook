
// create a module
const Api = {
    url: 'https://fakestoreapi.com/products',
    fetchProducts: async ()=>{
       const result = await fetch(Api.url)
       return await result.json()
    }
}

export default Api