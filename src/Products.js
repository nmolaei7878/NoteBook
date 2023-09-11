import  Api  from "./Service/Api.js";


// fetching products and add it to our global variable 
export async function fetchProducts() {
 window.app.store.products = await Api.fetchProducts()
}