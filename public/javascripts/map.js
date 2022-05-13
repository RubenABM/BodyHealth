/*async function execute(){

    window.alert("GETTING");

    try{
 
        let place = await $.ajax({
  
          url: "/places/",
  //        url: "/users/" + user_id,
         // url: "/users/" + user_id,
          method: "get",
          dataType: "json"
  
        });
  
        console.log("Receiving: " + JSON.stringify(place));

     } catch(err){
  
        console.log(err);
     
     } 


}*/

window.onload = async function(){

    console.log("Getting user location...");

    x = navigator.geolocation; //Criar variavel X para a geolocalização

    x.getCurrentPosition(initMap, failure); //Obter localizacao atual

    //window.alert("CALLING INITMAP()")
    initMap();
}

//FUNCAO PARA FILTRAR LOCAIS (DO PLACES API) - TERMINAR

async function filterplacescoffee(){

   const urlforfilter = ""

   let place = await $.ajax({

            url: "/places/",   //URL DO GOOGLE PLACES API
    //        url: "/users/" + user_id,
           // url: "/users/" + user_id,
            method: "get",
            dataType: "json",
    
   })

}

async function initMap(position){

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


 

   
