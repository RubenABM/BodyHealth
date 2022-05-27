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

  /*
    console.log("Getting user location...");

    x = navigator.geolocation; //Criar variavel X para a geolocalização

    x.getCurrentPosition(initMap, failure); //Obter localizacao atual

    //window.alert("CALLING INITMAP()")
    */


    //initMap();
}


async function initMap(lat, lng){

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
<<<<<<< Updated upstream
=======
      position: coords
 
    });
 
 }
 
 function failure(){}


 //IMPLEMENTAÇÃO DE ROTAS COM DIRECTIONS API -> AMANHÃ (1º PARTE)

 //FUNCAO PARA FILTRAR GINÁSIOS

 async function filterplacesginasios(){

    console.log("Working");

    x = navigator.geolocation; //Criar variavel X para a geolocalização

    x.getCurrentPosition(filterginasios, failure);

    filterginasios();
   
}

function filterginasios(position){

    var myLatitude = position.coords.latitude;
    var myLongitude = position.coords.longitude;

    var coordinates = new google.maps.LatLng(myLatitude, myLongitude);
    
    const PORTUGAL5_MAPBOUNDS = {
        //PONTO 1 -> NORTH E WEST
        //PONTO 2 -> SOUTH E EAST
        north:  42.138649,
        south: 36.346396,
        west: -10.031045,
        east: -6.353972,

    }

    /*ESCONDER OUTROS MARCADORES DEFAULT (EXIBINDO SOMENTE OS FILTRADOS NO RAIO DEFINIDO)
    var myStyles =[
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                  { visibility: "off" }
            ]
        }
    ];*/

    var options = { //Customização do mapa
        
        zoom: 15, //Zoom no mapa
        center:{lat:  myLatitude, lng:  myLongitude}, //Centro do mapa quando este é aberto (Lisboa)
        restriction: {

            latLngBounds: PORTUGAL5_MAPBOUNDS,
            strictBounds: false,

        },
        disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
        

    }

    var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA

    const marker = new google.maps.Marker({
 
        map: map,
        position: coordinates,
        icon: {

           url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"

        },
   
      });

    var request = {

        location: coordinates,
        radius: '5000',
        type: ['gym']

    };

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);


}

//CALLBACK JÁ FUNCIONA
function callback(results, status){

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

          marker.addListener("click", () => {

            infowindow.open({

              anchor: marker,
              map: map,
              shouldFocus: false,

            });
            
          });

    }

  }

}

 //FUNCAO PARA FILTRAR RESTAURANTES

 async function filterplacesrestaurantes(){

    console.log("Working");

    x = navigator.geolocation; //Criar variavel X para a geolocalização

    x.getCurrentPosition(filterrestaurantes, failure);

    filterrestaurantes();
   
}

function filterrestaurantes(position){

    var myLatitude = position.coords.latitude;
    var myLongitude = position.coords.longitude;

    var coordinates = new google.maps.LatLng(myLatitude, myLongitude);
    
    const PORTUGAL4_MAPBOUNDS = {
        //PONTO 1 -> NORTH E WEST
        //PONTO 2 -> SOUTH E EAST
        north:  42.138649,
        south: 36.346396,
        west: -10.031045,
        east: -6.353972,

    }

    /*ESCONDER OUTROS MARCADORES DEFAULT (EXIBINDO SOMENTE OS FILTRADOS NO RAIO DEFINIDO)
    var myStyles =[
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                  { visibility: "off" }
            ]
        }
    ];*/

    var options = { //Customização do mapa
        
        zoom: 15, //Zoom no mapa
        center:{lat:  myLatitude, lng:  myLongitude}, //Centro do mapa quando este é aberto (Lisboa)
        restriction: {

            latLngBounds: PORTUGAL4_MAPBOUNDS,
            strictBounds: false,

        },
        disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação
        

    }

    var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA

    const marker = new google.maps.Marker({
 
        map: map,
        position: coordinates,
        icon: {

           url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"

        }
   
      });

    var request = {

        location: coordinates,
        radius: '5000',
        type: ['restaurant']

    };

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);


}

//CALLBACK JÁ FUNCIONA
function callback(results, status){

    window.alert("Getting places...")

    var options = { //Customização do mapa
        zoom: 15, //Zoom no mapa
        center:{lat:  38.769653 ,  lng:  -9.170325}, //Centro do mapa quando este é aberto (Lisboa)
        restriction: {

            latLngBounds: PORTUGAL4_MAPBOUNDS,
            strictBounds: false,

        },
        disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação

    }

    var map = new google.maps.Map(document.getElementById('map'), options); //VoARIAVEL QUE ARMAZENA O MAPA


  if(status == google.maps.places.PlacesServiceStatus.OK) {

    for(var i = 0; i < results.length; i++){

       //  console.log(results[i].name);

         const marker = new google.maps.Marker({
            map: map,
            position: results[i].geometry.location,
          });

          const infotoshow = results[i].name;

          const infowindow = new google.maps.InfoWindow({

            content: infotoshow,

          });

          marker.addListener("click", () => {

            infowindow.open({

              anchor: marker,
              map: map,
              shouldFocus: false,

            });
            
          });


    }

  }

}

 //FUNCAO PARA FILTRAR BARES

 async function filterplacesbares(){

    console.log("Working");

    x = navigator.geolocation; //Criar variavel X para a geolocalização

    x.getCurrentPosition(filterbares, failure);
>>>>>>> Stashed changes

    });

    
  }

  );

  /////////// NOVO CÓDIGO ///////////

  



}


   
