export class Router {

    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
        
        this.handle()

        this.MudarFundo()
       
    }
    

    handle() {
        const pathname = window.location.pathname
        const route = this.routes[pathname] || this.routes[404]
    
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html            
        })
    
    }

    MudarFundo() {
        var RotaUrl = (window.location.pathname)
        
        var corpo = document.getElementById("corpo")

        if (RotaUrl == '/') {
            corpo.style.backgroundImage = 'url(/img/mountains-universe-1.png)'
        }
        if (RotaUrl == '/universo'){
            corpo.style.backgroundImage = 'url(/img/mountains-universe02.png)'
        }
        if (RotaUrl == '/exploracao'){
            corpo.style.backgroundImage = 'url(/img/mountains-universe-3.png)'
        }
    }
}



