// create a module 
const Store = {
    products: null,
    cart: []
}

const proxiedStore = new Proxy(Store,{
    
    set(target,property,value){
        target[property] = value
        if (property == 'products') {
            window.dispatchEvent(new Event('productsupdated'))
        }
        if (property == 'cart') {
            window.dispatchEvent(new Event('cartupdated'))
        }
        return true

    }
})

export default proxiedStore