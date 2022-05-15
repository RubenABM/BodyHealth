///////////////////////////////////// VER LINHA 84 ////////////////////////////////////

window.onload = async function(){

    console.log("Getting user location...");

    x = navigator.geolocation; //Criar variavel X para a geolocalização

    x.getCurrentPosition(initMap, failure); //Obter localizacao atual

    //window.alert("CALLING INITMAP()")
    initMap();
}


async function initMap(position){

    //PREPARAR OS SERVIÇOS DE DIRECTIONS

    const directionsRenderer = new google.maps.DirectionsRenderer(); //CONSTANTE PARA RENDERIZAR A ROTA

    const directionsService = new google.maps.DirectionsService(); //CONSTANTE DO SERVIÇO DE ROTAS PARA O MAPA

    var myLat = position.coords.latitude;
    var myLong = position.coords.longitude;
 
    var coords = new google.maps.LatLng(myLat, myLong);

    //RESTRICOES DE LIMITES DO MAPA

    const PORTUGAL_MAPBOUNDS = {
        //PONTO 1 -> NORTH E WEST
        //PONTO 2 -> SOUTH E EAST
        north:  42.138649,
        south: 36.346396,
        west: -10.031045,
        east: -6.353972,

    }

    var options = { //Customização do mapa
        
        zoom: 15, //Zoom no mapa
        center:{lat:  myLat, lng:  myLong}, //Centro do mapa quando este é aberto (Lisboa)
        restriction: {

            latLngBounds: PORTUGAL_MAPBOUNDS,
            strictBounds: false,

        },
        disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação

    }

    var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA

    directionsRenderer.setMap(map); //Atribuir o serviço de renderização de rotas ao mapa
    
    ///////////////////////////////   SERÁ NECESSÁRIO MOVER O PROXIMO CODIGO PARA O LISTENER DO MARCADOR //////////////////////////
    //FUNCAO PARA CALCULAR ROTAS QUANDO UM DETERMINADO MARCADOR É CLICADO

    calculateAndDisplayRoute(directionsService, directionsRenderer); //CHAMAR A FUNCAO PARA CALCULAR A DISTANCIA E MOSTRAR A ROTA (SERÁ SOMENTE ATIVADA NUM LISTENER DE UM MARCADOR)

    //FUNCAO PARA CALCULAR E EXIBIR UMA ROTA

    function calculateAndDisplayRoute(directionsService, directionsRenderer){

      const selectedMode = "DRIVING"; //EXEMPLO COM MODO ESTATICO

      directionsService
        .route({

            //SUBSTITUIR ORIGEM E DESTINO (ORIGEM -> POSICAO ATUAL | DESTINO -> POSICAO DO MARCADOR SELECIONADO OU LOCAL DA CONSULTA/EVENTO QUANDO CLICADO)
            origin: { lat: 38.769680, lng: -9.170248 },
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

    //INPUT DO GEOCODER

    const defaultBoundsPlaces = { //Mostrar locais com proximidade | Definição de um raio á posição atual do utilizador

       north: options.center.lat + 2.5,
       south: options.center.lat - 2.5,
       east: options.center.lng + 2.5,
       west: options.center.lng - 2.5,

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

    let marcadores = [];
//COMO REMOVER O MARCADOR ANTIGO PARA MARCAR UM NOVO? ***********************************************************************

    autocomplete2.addListener("place_changed", () => {

        
      const local = autocomplete2.getPlace();
      const markerplace = new google.maps.Marker({

        position: local.geometry.location,
        title: local.name,
        map: map,

      });

      
    }

    );

    
    
    try{

       // window.alert("SUCESS GETTING INFO")
 
        let place = await $.ajax({
  
          url: "/places/",
  //        url: "/users/" + user_id,
         // url: "/users/" + user_id,
          method: "get",
          dataType: "json",
  
        });
  
        console.log("Receiving: " + JSON.stringify(place));

          for(let placee of place){        
      //  for(let placee of place.rows){

            //VERIFICACAO DO TIPO DE LOCAL

            if(placee.local_category_id == 1){

                const markercoffee = new google.maps.Marker({

                    position:{lat: placee.longitude, lng: placee.latitude},
                    map: map,
                    title: 'Hello',
                    label: placee.local_nome,
                    icon: {
                       url: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                    }
                   // title: "' " + placee.local_morada + "' ",
                });

            } else if (placee.local_category_id == 2) {

                const markerbares = new google.maps.Marker({

                    position:{lat: placee.longitude, lng: placee.latitude},
                    map: map,
                    title: 'Hello',
                    label: placee.local_nome,
                    icon: {
                       url: "https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png"
                    }
                   // title: "' " + placee.local_morada + "' ",
                });

            } else if (placee.local_category_id == 3) {

                const markerrestaurantes = new google.maps.Marker({

                    position:{lat: placee.longitude, lng: placee.latitude},
                    map: map,
                    title: 'Hello',
                    label: placee.local_nome,
                    icon: {
                       url: "https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png"
                    }
                   // title: "' " + placee.local_morada + "' ",
                });


            } else if (placee.local_category_id == 4) {

                const markerginasios = new google.maps.Marker({

                    position:{lat: placee.longitude, lng: placee.latitude},
                    map: map,
                    title: 'Hello',
                    label: placee.local_nome,
                    icon: {
                       url: "https://maps.google.com/mapfiles/ms/icons/purple-dot.png"
                    }
                   // title: "' " + placee.local_morada + "' ",
                });

            } else {

                ///////////////////////////////////////

            console.log("PLACE: " + JSON.stringify(placee));
            const marker = new google.maps.Marker({

                position:{lat: placee.longitude, lng: placee.latitude},
                map: map,
                title: 'Hello',
                label: placee.local_nome,
               // title: "' " + placee.local_morada + "' ",
            });
        }
        

           /* marker.setMap(map);*/

        }
        
     } catch(err){
  
         console.log(err);
  
     }

     //MARCADOR DA LOCALIZAÇÃO ATUAL
     const marker = new google.maps.Marker({
 
        map: map,
        position: coords,
        icon: {

           url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png"

        }
   
      });
     

}

function sucess(position){

    var myLat = position.coords.latitude;
    var myLong = position.coords.longitude;
 
    var coords = new google.maps.LatLng(myLat, myLong);
 
    var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA
    const marker = new google.maps.Marker({
 
      map: map,
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

    var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA


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

    filterbares();
   
}

function filterbares(position){

    var myLatitude = position.coords.latitude;
    var myLongitude = position.coords.longitude;

    var coordinates = new google.maps.LatLng(myLatitude, myLongitude);
    
    const PORTUGAL3_MAPBOUNDS = {
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

            latLngBounds: PORTUGAL_MAPBOUNDS,
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
        type: ['bar']

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


  if(status == google.maps.places.PlacesServiceStatus.OK) {

    for(var i = 0; i < results.length; i++){

        // console.log(results[i].name);

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

///////////////////////////////////////////////////////////////////////////////////////

 //FUNCAO PARA FILTRAR LOCAIS (DO PLACES API) - TERMINAR - CAFES

async function filterplacescoffee(){

    console.log("Working");

    x = navigator.geolocation; //Criar variavel X para a geolocalização

    x.getCurrentPosition(filtercoffee, failure);

    filtercoffee();
   
}

function filtercoffee(position){

    var myLatitude = position.coords.latitude;
    var myLongitude = position.coords.longitude;

    var coordinates = new google.maps.LatLng(myLatitude, myLongitude);

    
    
    const PORTUGAL_MAPBOUNDS = {
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

            latLngBounds: PORTUGAL_MAPBOUNDS,
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
        type: ['cafe']

    };

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);


}

const PORTUGAL_MAPBOUNDS = {
    //PONTO 1 -> NORTH E WEST
    //PONTO 2 -> SOUTH E EAST
    north:  42.138649,
    south: 36.346396,
    west: -10.031045,
    east: -6.353972,

}
//CALLBACK JÁ FUNCIONA
function callback(results, status){

    window.alert("Getting places...")

    var options = { //Customização do mapa
        zoom: 15, //Zoom no mapa
        center:{lat:  38.769653 ,  lng:  -9.170325}, //Centro do mapa quando este é aberto (Lisboa)
        restriction: {

            latLngBounds: PORTUGAL_MAPBOUNDS,
            strictBounds: false,

        },
        disableDefaultUI: true, //Remove os controles default de um mapa Google | Formatação

    }

    var map = new google.maps.Map(document.getElementById('map'), options); //VARIAVEL QUE ARMAZENA O MAPA


  if(status == google.maps.places.PlacesServiceStatus.OK) {

    for(var i = 0; i < results.length; i++){

        // console.log(results[i].name);

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


   
