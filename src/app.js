import { fetchProducts } from "./Products.js";
import Store from "./Service/Store.js";
import Router from "./Service/Router.js";

// creating a global variable app and attach it to the window object
window.app = {}

// add our Store Object to the window to have singleton store
app.store = Store;

// add our Router Object to the window to have singelton router
app.router = Router



window.addEventListener('DOMContentLoaded',()=>{
    // initializing router
    app.router.init()

    fetchProducts()
})

window.addEventListener('productsupdated',()=>{
    var mainEl = document.querySelector('main')
    const elementsList = []
    for (const product of app.store.products) {
    const listEl = document.createElement('li')
    listEl.innerHTML = `
    <h4>${product.title}</h4>
    `    
    elementsList.push(listEl)
    }
    console.log(elementsList);
        for (let index = 0; index < elementsList.length; index++) {
            mainEl.appendChild(elementsList[index])
        }
  
})

