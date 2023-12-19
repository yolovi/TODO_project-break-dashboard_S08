const indexBody = document.getElementById("body-index")
//const indexBody = document.body

console.log(indexBody)

//funcion que al pasarle un array con imagenes > haga un random (las imagenes estan en una carpeta) Es para ponerla en el body como background-image

//recoger el id-contenedor > se lo pasaremos como parametro y dentro de la funcion le diremos > al id-contenedor le aplique un style="background image: url(&quot;./assets/img/nebulosa.jpg&quot;)"


const routeImgWhite = "./assets/img/wallpapers/white/bnw";
const routeImgArq = "./assets/img/wallpapers/arq/arq-bnw"

const arrImgs = []

//TODO:exportar la función para poder usarla en los demas js segun conveniencia
const arrImgPush = (route) => {
    const imageQty = 10

    for (let i = 0; i < imageQty; i++) {
        const routeImg = `${route}${i}.jpg`
        arrImgs.push(routeImg)
    }

    //const randomImg = 
    console.log(arrImgs)
}

arrImgPush(routeImgWhite)

//TODO:exportar la función para poder usarla en los demas js segun conveniencia
const changeBackground = (element, route) => {
    const randomNumber = Math.floor(Math.random() * arrImgs.length)
    const randomBackground = `${route}${[randomNumber]}.jpg`

    element.style.backgroundImage = `url(${randomBackground})`

console.log(randomBackground)
}

changeBackground(indexBody, routeImgWhite) //si no la llamo, la primera vez el background es un color liso

setInterval(() => {
    changeBackground(indexBody, routeImgWhite)
}, 10000);


