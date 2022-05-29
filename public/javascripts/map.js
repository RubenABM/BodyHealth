///////////////////////////////////// VER LINHA 57 ////////////////////////////////////


window.onload = async function(){

   navigator.geolocation.getCurrentPosition(

    function (position) {
      initMap(position.coords.latitude, position.coords.longitude)
    },
    function errorCallback(error) {
      console.log(error)
    }

   );

}

async function filterplacescoffee(){

  if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(showPositionForCoffees);

  } else {

    console.log("Erro");

  }

}

function showPositionForCoffees(position){

  console.log("Latitude: " + position.coords.latitude);

  console.log("Longitude: " + position.coords.longitude);

  var coordinates = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  const PORTUGAL5_MAPBOUNDS = {
    //PONTO 1 -> NORTH E WEST
    //PONTO 2 -> SOUTH E EAST
    north:  42.138649,
    south: 36.346396,
    west: -10.031045,
    east: -6.353972,

  }

  var options = { //Customização do mapa
        
    zoom: 15, //Zoom no mapa
    center:{lat:  position.coords.latitude, lng:  position.coords.longitude}, //Centro do mapa quando este é aberto (Lisboa)
    restriction: {

        latLngBounds: PORTUGAL5_MAPBOUNDS,
        strictBounds: false,

    },
    disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
    

  }

  var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA

  var request = {

    location: coordinates,
    radius: '5000',
    type: ['restaurant']

};

var service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);

}

async function filterplacesrestaurantes(){

  if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(showPositionForRestaurantes);

  } else {

    console.log("Erro");

  }

}

function showPositionForRestaurantes(position){

  console.log("Latitude: " + position.coords.latitude);

  console.log("Longitude: " + position.coords.longitude);

  var coordinates = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  const PORTUGAL5_MAPBOUNDS = {
    //PONTO 1 -> NORTH E WEST
    //PONTO 2 -> SOUTH E EAST
    north:  42.138649,
    south: 36.346396,
    west: -10.031045,
    east: -6.353972,

  }

  var options = { //Customização do mapa
        
    zoom: 15, //Zoom no mapa
    center:{lat:  position.coords.latitude, lng:  position.coords.longitude}, //Centro do mapa quando este é aberto (Lisboa)
    restriction: {

        latLngBounds: PORTUGAL5_MAPBOUNDS,
        strictBounds: false,

    },
    disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
    

  }

  var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA

  var request = {

    location: coordinates,
    radius: '5000',
    type: ['restaurant']

};

var service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);

}

async function filterplacesbares(){

  if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(showPositionForBares);

  } else {

    console.log("Erro");

  }

}

function showPositionForBares(position){

  console.log("Latitude: " + position.coords.latitude);

  console.log("Longitude: " + position.coords.longitude);

  var coordinates = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  const PORTUGAL5_MAPBOUNDS = {
    //PONTO 1 -> NORTH E WEST
    //PONTO 2 -> SOUTH E EAST
    north:  42.138649,
    south: 36.346396,
    west: -10.031045,
    east: -6.353972,

  }

  var options = { //Customização do mapa
        
    zoom: 15, //Zoom no mapa
    center:{lat:  position.coords.latitude, lng:  position.coords.longitude}, //Centro do mapa quando este é aberto (Lisboa)
    restriction: {

        latLngBounds: PORTUGAL5_MAPBOUNDS,
        strictBounds: false,

    },
    disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
    

  }

  var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA

  var request = {

    location: coordinates,
    radius: '5000',
    type: ['bar']

};

var service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);

}

async function filterplacesginasios(){

  if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(showPositionForGinasios);

  } else {

    console.log("Erro");

  }

}

function showPositionForGinasios(position){

  console.log("Latitude: " + position.coords.latitude);

  console.log("Longitude: " + position.coords.longitude);

  var coordinates = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  const PORTUGAL5_MAPBOUNDS = {
    //PONTO 1 -> NORTH E WEST
    //PONTO 2 -> SOUTH E EAST
    north:  42.138649,
    south: 36.346396,
    west: -10.031045,
    east: -6.353972,

  }

  var options = { //Customização do mapa
        
    zoom: 15, //Zoom no mapa
    center:{lat:  position.coords.latitude, lng:  position.coords.longitude}, //Centro do mapa quando este é aberto (Lisboa)
    restriction: {

        latLngBounds: PORTUGAL5_MAPBOUNDS,
        strictBounds: false,

    },
    disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
    

  }

  var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA

  var request = {

    location: coordinates,
    radius: '5000',
    type: ['gym']

};

var service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);

}

function callback(results, status){

  const directionsRenderer = new google.maps.DirectionsRenderer(); //CONSTANTE PARA RENDERIZAR A ROTA

  const directionsService = new google.maps.DirectionsService(); //CONSTANTE DO SERVIÇO DE ROTAS PARA O MAPA

  directionsRenderer.setMap(map);

  const PORTUGAL3_MAPBOUNDS = {
    //PONTO 1 -> NORTH E WEST
    //PONTO 2 -> SOUTH E EAST
    north:  42.138649,
    south: 36.346396,
    west: -10.031045,
    east: -6.353972,

  }

  window.alert("Getting places...")

  var options = { //Customização do mapa
      zoom: 15, //Zoom no mapa
      center:{lat:  38.769653 ,  lng:  -9.170325}, //Centro do mapa quando este é aberto (Lisboa)
      restriction: {

          latLngBounds: PORTUGAL3_MAPBOUNDS,
          strictBounds: false,

      },
      disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação

  }

  var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA

  console.log("Posting places");

if(status == google.maps.places.PlacesServiceStatus.OK) {

  for(var i = 0; i < results.length; i++){

     //  console.log(results[i].name);

       const marker = new google.maps.Marker({
          map: map,
          position: results[i].geometry.location,
          title: results[i].name,
        });

        const infotoshow = results[i].name;

        const infowindow = new google.maps.InfoWindow({

          content: infotoshow,

        });
        
        //CRIAR A ROTA

        marker.addListener("click", () => {

          console.log("clicked");

           //GET LOCATION
             if(navigator.geolocation) {

              navigator.geolocation.getCurrentPosition(showRotaForPlace);

             } else {

              console.log("Erro");

             }
          
             });

  }

}

}

//TERMINAR MÉTODO DE CLIQUE PARA CADA MARCADOR

function showRotaForPlace(position){

  const directionsRenderer = new google.maps.DirectionsRenderer(); //CONSTANTE PARA RENDERIZAR A ROTA

  const directionsService = new google.maps.DirectionsService(); //CONSTANTE DO SERVIÇO DE ROTAS PARA O MAPA

  directionsRenderer.setMap(map);

  console.log("Latitude: " + position.coords.latitude);

  console.log("Longitude: " + position.coords.longitude);

  var coordinates = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


  const PORTUGAL5_MAPBOUNDS = {
    //PONTO 1 -> NORTH E WEST
    //PONTO 2 -> SOUTH E EAST
    north:  42.138649,
    south: 36.346396,
    west: -10.031045,
    east: -6.353972,

  }

  calculateAndDisplayRoute(directionsService, directionsRenderer);

  var options = { //Customização do mapa
        
    zoom: 15, //Zoom no mapa
    center:{lat:  position.coords.latitude, lng:  position.coords.longitude}, //Centro do mapa quando este é aberto (Lisboa)
    restriction: {

        latLngBounds: PORTUGAL5_MAPBOUNDS,
        strictBounds: false,

    },
    disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
    

  }

  var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA


}

function calculateAndDisplayRoute(directionsService, directionsRenderer){


  const selectedMode = "DRIVING"; //EXEMPLO COM MODO ESTATICO

  directionsService
    .route({

        //SUBSTITUIR ORIGEM E DESTINO (ORIGEM -> POSICAO ATUAL | DESTINO -> POSICAO DO MARCADOR SELECIONADO OU LOCAL DA CONSULTA/EVENTO QUANDO CLICADO)
        origin: { lat: 38.7621624, lng: -9.1788412 },
        destination: { lat: 38.767832, lng: -9.169247 },
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode],


    })
    .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));

}


async function initMap(lat, lng){

  const directionsRenderer = new google.maps.DirectionsRenderer(); //CONSTANTE PARA RENDERIZAR A ROTA

  const directionsService = new google.maps.DirectionsService(); //CONSTANTE DO SERVIÇO DE ROTAS PARA O MAPA

  var myLatLng = {
    lat,
    lng
 };

 //LIMITES DE PORTUGAL
 const PORTUGAL_MAPBOUNDS = {
  //PONTO 1 -> NORTH E WEST
  //PONTO 2 -> SOUTH E EAST
  north:  42.138649,
  south: 36.346396,
  west: -10.031045,
  east: -6.353972,
 }

 
 var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng,
    restriction: {

      latLngBounds: PORTUGAL_MAPBOUNDS,
      strictBounds: false,

  },
  disableDefaultUI: true,
 });

 var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: {

      url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"

   }
 });

    //INPUT DO GEOCODER

    const defaultBoundsPlaces = { //Mostrar locais com proximidade | Definição de um raio á posição atual do utilizador

      north: map.center.lat + 2.5,
      south: map.center.lat - 2.5,
      east: map.center.lng + 2.5,
      west: map.center.lng - 2.5,

   }



   const options2 = {

       //Restrições do aparecimento de locais

       componentRestrictions: {country: "pt"}, //Autocomplete somente com estabelecimentos situados em PORTUGAL.
       fields: ["address_components", "geometry", "icon", "name"], //Dados que queremos obter (morada, nome, geometria -> coordenadas e icone)
       strictBounds: false,
       types: ["establishment"], //Obter locais de estabelecimentos
       bounds: defaultBoundsPlaces,

   };

   const autocomplete2 = new google.maps.places.Autocomplete(document.getElementById("input"), options2);

   autocomplete2.addListener("place_changed", () => {

        
    const local = autocomplete2.getPlace();
    const markerplace = new google.maps.Marker({

      position: local.geometry.location,
      title: local.name,
      map: map,

    });

    
  }

  );

  /////////// NOVO CÓDIGO ///////////

  

   getEventosRecentesss();

   getAulasMarcadasRecentesss();

}

//OBTER AULAS MARCADAS RECENTES (ACABAR A FUNCAO)

async function getAulasMarcadasRecentesss(){

  var user_admin = sessionStorage.getItem("user_admin");
  var user_pt = sessionStorage.getItem("user_pt");
  var user_nutri = sessionStorage.getItem("user_nutri");
  let recipeName = document.getElementById("nome1")
  let eventosrecentesElem = document.getElementById("organize99");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let someeventos = await $.ajax({

       url: "/eventos/eventosrecentes/",
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(someeventos));

     let html = "";

     for(let someuser of someeventos){
       console.log("Recipe: " + someuser);
       html += createeventoHTML(someuser);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     eventosrecentesElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }


}

async function getEventosRecentesss(){

  let recipeName = document.getElementById("nome1")
  let eventosrecentesElem = document.getElementById("organize99");
  var user_id = sessionStorage.getItem("user_id");
  console.log("setItem->userId = " + user_id);

  try{

     let someeventos = await $.ajax({

       url: "/eventos/eventosrecentes/",
       method: "get",
       dataType: "json",

     });

     console.log("[utilizador] utilizador = " + JSON.stringify(someeventos));

     let html = "";

     for(let someuser of someeventos){
       console.log("Recipe: " + someuser);
       html += createeventoHTML(someuser);
     }

     console.log("OBTEVE");
   //  recipeName.innerHTML = html;

     eventosrecentesElem.innerHTML = html;


  } catch(err){
    console.log(err);
  }


}


//TERMINAR O ONCLICK NO EVENTO

function createeventoHTML(evento){
  
  return "<div class='selectbox66' style='cursor: pointer' id='selectbox66' onclick='openmarker('" + evento + "')'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + evento.evento_titulo + "Data: " + evento.evento_data + "</p>" + "</div>"
  //return "<div class='selectbox66' style='cursor: pointer' id='selectbox66' onclick='openmarker( " + evento + " )'>" + "<p name='criador1' id='criador1' style='text-align: center; font-size: 90%; margin-top: 10%;'>" + evento.evento_titulo + "Data: " + evento.evento_data + "</p>" + "</div>"
 

}

async function openmarker(evento){

  console.log("funcao chamada");

  console.log("" + evento);

  //const myLatLng = { lat: evento.latitude, lng: evento.longitude };

  //console.log("clicked");

  /*const marker = new google.maps.Marker({
 
    map: map,
    position: myLatLng,
    icon: {

       url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"

    }

  });*/



}









   
