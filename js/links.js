const nameLinK = document.getElementById("name-link");
const pasteLink = document.getElementById("paste-link");
const btnAddLink = document.getElementById("btn-add-link");
const linksSavedDiv = document.getElementById("links-saved-div");
const linksSavedUl = document.getElementById("links-saved-ul");

let linkName;
let linkUrl;
let indexLink;
const localStorageGet = JSON.parse(localStorage.getItem("link")) || [];

const printLinkUl = () => {
  linksSavedUl.innerHTML = "";

  //con un bucle recorre el array localStorageGet crea el li con un a y un button
  localStorageGet.forEach((link, i) => {
    linksSavedUl.innerHTML += `<li><a href=${link.url} target="_blank"> ${link.name}  </a> <button class="btn-delete" id= "index${i}">x</button></li>`;
  });
};

printLinkUl();

//funcion que guarda los valores de los inputs en el local storage
const addLinkLocalStorage = () => {
  //recoger los valores de "link" de local storage en una variable > si no existe array vacio.
  //hacer un push de los valores de los inputs
  //setear lo que hemos pusheado en la variable al local storage
  localStorageGet.push({ name: linkName, url: linkUrl });
  localStorage.setItem("link", JSON.stringify(localStorageGet));
};

// función para guardar el link en el local storage
const addLink = () => {
  //capturamos lo que se ha escrito en el input de nombre
  linkName = nameLinK.value;
  linkUrl = pasteLink.value;

  //evaluar que los campos estén completados
  if (!linkName) return alert("Por favor inserta un nombre para tu enlace");
  if (!linkUrl) return alert("Por favor inserta o pega la URL");

  addLinkLocalStorage();
  location.reload();

  //limpiar los imputs
  nameLinK.value = "";
  pasteLink.value = "";
};

const deleteLink = (indexLink) => {
  //si el indice del elem (numero, ejemplo 0), coincide con el indice del ul (index0)
  localStorageGet.forEach((elem, i) => {
    if (`index${i}` === indexLink) localStorageGet.splice(i, 1);
    localStorage.setItem("link", JSON.stringify(localStorageGet));
    printLinkUl();
    return; //para salir de la función después de encontrar la coincidencia
  });

};

//hacer un addEventListener a un elemento del html para comprobar si contiene la clase bnt-delete
linksSavedUl.addEventListener("click", (e) => {
  if (e.target.className === "btn-delete") {
    indexLink = e.target.id;
    deleteLink(indexLink);
  }
});

btnAddLink.addEventListener("click", addLink);
