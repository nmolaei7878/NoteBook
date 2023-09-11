const Router = {
    init: ()=>{
        
        document.querySelectorAll('nav a').forEach(a => {
            // we assign an eventListener to every link
            a.addEventListener('click',event => {
            // this block of code will trigger if the user clicks
                event.preventDefault()
                // getting predefiend href properties on our links
                const url = event.target.getAttribute("href")
                // passing it to our custom router
                Router.go(url)
            })
        });
        window.addEventListener('popstate',(event)=>{
            console.log(event.state)
            Router.go(event.state.route,false)
        });


        // redirect user after initialization
        // if they enter specific url path or
        // coming from deepLink
        Router.go(location.pathname)
        console.log('here');
    },
    go: (route, addToHistory=true)=>{
     
        if (addToHistory) {
            history.pushState({route},null,route)
        }
        let pageElement = null
        

        switch (route) {
            case '/':
                pageElement = document.createElement('h1')
                pageElement.textContent = 'Home';
                break;
                    case '/cart':
                        pageElement = document.createElement('h1')
                        pageElement.textContent = 'Cart';
                    break;
                case '/products':
                    pageElement = document.createElement('h1')
                    pageElement.textContent = 'Product';
                break;
            default:
                pageElement = document.createElement('h1')
                pageElement.textContent = 'Home';
                break;
        }
        if (pageElement) {
            const cacheElement = document.querySelector('main')
            cacheElement.innerHTML = ''
            cacheElement.appendChild(pageElement)
            window.screenX = 0
            window.screenY = 0
        }

    },

}
export default Router