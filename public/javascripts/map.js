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

    });

    
  }

  );

  /////////// NOVO CÓDIGO ///////////

  



}


   
