const data = {
  //currentDate fecha actual
  currentDate: "2023-01-01",
  events: [
    {
      _id: "639c723b992482e5f2834be9",
      name: "Collectivities Party",
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      date: "2022-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
      __v: 0,
    },
    {
      _id: "639c723b992482e5f2834beb",
      name: "Korean style",
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      date: "2023-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      price: 10,
      __v: 0,
      estimate: 42756,
    },
    {
      _id: "639c723c992482e5f2834bed",
      name: "Jurassic Park",
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      date: "2022-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      price: 15,
      __v: 0,
      assistance: 65892,
    },
    {
      _id: "639c723c992482e5f2834bef",
      name: "Parisian Museum",
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      date: "2023-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf1",
      name: "Comicon",
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      date: "2022-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf3",
      name: "Halloween Night",
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      date: "2023-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf5",
      name: "Metallica in concert",
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      date: "2023-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf7",
      name: "Electronic Fest",
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      date: "2022-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bf9",
      name: "10K for life",
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      date: "2022-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bfb",
      name: "15K NY",
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      date: "2023-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      price: 3,
      __v: 0,
      estimate: 2569800,
    },
    {
      _id: "639c723d992482e5f2834bfd",
      name: "School's book fair",
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      date: "2023-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bff",
      name: "Just for your kitchen",
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      date: "2022-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c01",
      name: "Batman",
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      date: "2022-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c03",
      name: "Avengers",
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      date: "2023-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
      __v: 0,
    },
  ],
};

//funcion para pintar las cards que cumplan con la condicion en la que la fecha de los eventos es menor a la courrentDate(fecha actual).
/*
function pastEvents(data) {

  const eventsLength = data.events.length;

  let container = document.getElementById('pastEvents');

  for (let i = 0; i < eventsLength; i++) {
    const event = data.events[i];
    console.log(event.name);

    if (data.events[i].date < data.currentDate) {

      let tarjeta = document.createElement('div');
      tarjeta.className = 'card'
      tarjeta.innerHTML = `
        <img src="${event.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
          </div>
            <div class="d-flex justify-content-around  mb-2 final align-items-center">
              <p class="m-1 fs-3">$${event.price}</p>
               <a href="../pages/details.html" class="btn btn-primary">Details</a>
          </div>
      `
      container.appendChild(tarjeta)
    }
  }
}

pastEvents(data)
*/


// ***** SPRINT 3 ******

//______NUEVA FUNCION PARA PINTAR LAS CARDS DE PAST EVENTS_______/

//FILTRAR LOS EVENTOS PASADOOS
 let arregloPastEvents = data.events.filter( evento => evento.date < data.currentDate)
console.log(arregloPastEvents);

 function pintarCards(arregloEvents){
  const eventsLength = arregloEvents.length;

  let container = document.getElementById('pastEvents');
   // para que quede limpio cada vez que se pintern las tarjetas y muestre solo las que cumplen con la condicion del filto search.
  container.innerHTML = ""
  for (let i = 0; i < eventsLength; i++) {
    const event = data.events[i];
    //console.log(event.name);

    let tarjeta = document.createElement('div');
    tarjeta.className = 'card'
    tarjeta.innerHTML = `
        <img src="${arregloEvents[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${arregloEvents[i].name}</h5>
            <p class="card-text">${arregloEvents[i].description}</p>
          </div>
            <div class="d-flex justify-content-around  mb-2 final align-items-center">
              <p class="m-1 fs-3">$${arregloEvents[i].price}</p>
               <a href="../pages/details.html?id=${arregloEvents[i]._id}" class="btn btn-primary">Details</a>
          </div>
      `
    container.appendChild(tarjeta)
  }

}
// Nueva funcion que pinta las cards
pintarCards(arregloPastEvents)


//__________FILTRO TEXTO___________ /

filtroSearch(arregloPastEvents)

function filtroSearch(arregloEvents){
  let texto = document.getElementById('searchTextPast').value.toLowerCase()
  let arregloFiltro = arregloEvents
    if (texto != null || texto != undefined) {
      arregloFiltro = arregloEvents.filter(evento => evento.name.toLowerCase().includes(texto) || evento.description.toLowerCase().includes(texto) )
    }
  return arregloFiltro;
}

document.getElementById('searchTextPast').addEventListener('keyup', e => {
  let arregloFiltrado =filtroSearch(arregloPastEvents)
  let arregloFiltradoChecks= filtroChecks(arregloFiltrado)
  if (arregloFiltradoChecks.length != 0) {
    pintarCards(arregloFiltradoChecks)   
  }else{
    document.getElementById('pastEvents').innerHTML= ` 
    <div class="error">
      <div class="textError">
        <h2>no hay resultados</h2>
        <h4>Vuelve a intentar</h4>
      </div>
      <div class="oops">
        <img src="../img/oops.png" alt="error">
      </div>
    </div>`
  }
})


//__________FILTRO CHECKBOXS___________ /


function filtroChecks(arregloEvents){
  let checkboxCheckeados = [...document.querySelectorAll('input[type=checkbox]:checked')]
  checkboxCheckeados = checkboxCheckeados.map(e => e.value)
    let arregloFiltra = arregloEvents
    if(checkboxCheckeados.length != 0){
      arregloFiltra = arregloEvents.filter(evento => checkboxCheckeados.includes(evento.category))
    }
  return arregloFiltra
}

document.getElementById('check').addEventListener('change', e => { 
  let arregloFiltradoChecks= filtroChecks(arregloPastEvents)
  let arregloFiltrado =filtroSearch(arregloFiltradoChecks)
  if (arregloFiltrado.length != 0) {
    pintarCards(arregloFiltrado)   
  }else{
    document.getElementById('pastEvents').innerHTML= `
    <div class="error">
      <div class="textError">
        <h2>no hay resultados</h2>
        <h4>Vuelve a intentar</h4>
      </div>
      <div class="oops">
        <img src="../img/oops.png" alt="error">
      </div>
    </div>`
  }
})


function checkboxDinamicos(ArrayCategorias){
  for (let i = 0; i < ArrayCategorias.length; i++) {
    //creo un nuevo checkbox a traves del dom
    let newChecbox = document.createElement('div')
    //Agrego las clases de boostrap a mis div que se van generando dimnamicamente, con .className
    newChecbox.className = "form-check form-check-inline"
    // Agrego la informacion a mis nuevos chechbox con la propiedad innerHTML
    newChecbox.innerHTML = `
      <input class="form-check-input" type="checkbox" id="${ArrayCategorias[i].replace(" ","-")}" value="${ArrayCategorias[i]}">
      <label class="form-check-label" for="${ArrayCategorias[i].replace(" ","-")}">${ArrayCategorias[i]}</label>
    `
    // Agrego los elementos creados a mi coontenedor principal (section con la class = "check")con appedChild
    document.getElementById('check').appendChild(newChecbox)
    
  }
}

let categoriasEventos = data.events.map( evento => evento.category)//me devuelve todas las categorias que encontro pero estan duplicadas
let categoriasUnicas = new Set(categoriasEventos) // me devuelve un set de las categorias pero debo combertirlo en un arreglo con Array.form()
let categoriaUnica = Array.from(categoriasUnicas)


// Llama a la funcion con el arreglo que vamos a recorrer
checkboxDinamicos(categoriaUnica)
filtroChecks(arregloPastEvents)
filtroSearch(arregloPastEvents)