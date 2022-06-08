var pool = require("./database");

module.exports.getPlaces = async function() {
    try {
        let sql = "SELECT * ,ST_X(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Longitude, ST_Y(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Latitude FROM place";
        let result = await pool.query(sql);
        let places = result.rows;
        console.log("[placesModel.getPlaces] places = " + JSON.stringify(places));
        return { status: 200, data: places };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getPlacesCafes = async function() {
    try {
        let sql = "select * from place " + "where place.local_category_id = 1";
        let result = await pool.query(sql);
        let places = result.rows;
        console.log("[placesModel.getPlaces] places = " + JSON.stringify(places));
        return { status: 200, data: places };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getPlacesBares = async function() {
    try {
        let sql = "select * from place " + "where place.local_category_id = 2";
        let result = await pool.query(sql);
        let places = result.rows;
        console.log("[placesModel.getPlaces] places = " + JSON.stringify(places));
        return { status: 200, data: places };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getPlacesRestaurantes = async function() {
    try {
        let sql = "select * from place " + "where place.local_category_id = 3";
        let result = await pool.query(sql);
        let places = result.rows;
        console.log("[placesModel.getPlaces] places = " + JSON.stringify(places));
        return { status: 200, data: places };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getOnlyOnePlace = async function(address) {
    try {
        let sql = "SELECT * FROM place WHERE local_morada = '"+ address + "'";
        let result = await pool.query(sql);
        let places = result.rows[0];
        console.log("[placesModel.getPlaces] places = " + JSON.stringify(places));
        return { status: 200, data: places };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getPlacesGinasios = async function() {
    try {
        let sql = "select * from place " + "where place.local_category_id = 4";
        let result = await pool.query(sql);
        let places = result.rows;
        console.log("[placesModel.getPlaces] places = " + JSON.stringify(places));
        return { status: 200, data: places };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getPlace = async function(id){


    console.log("[placesModel.getPlace] id = " + JSON.stringify(id));

    try{

        let sql =
            "SELECT * " +
            "FROM place p " +
            "WHERE p.local_id = $1;";

        let result = await pool.query(sql, [id]);

        let places = result.rows;

        if (places.length > 0) {
            console.log("[placesModel.getPlace] place = " + JSON.stringify(places[0]));
            return { status: 200, data: places[0] };
        } else {
            return { status: 404, data: { msg: "Place not found." } };
        }

    } catch (err){

      console.log(err);
      return {status: 500, data: err};

    }

}

module.exports.getPlacesCategory = async function(cat_id) {
    try {
        let sql = "select * from place " + "where local_category_id = " + cat_id;
        let result = await pool.query(sql);
        let placesfound = result.rows;
        console.log("[placesModel.getPlaces] places = " + JSON.stringify(placesfound));
        return { status: 200, data: placesfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

/*
module.exports.getTextPlace = async function(text){


    console.log("[placesModel.getTextPlace] text = " + JSON.stringify(text));

    try{

        let sql =  "https://api.mapbox.com/geocoding/v5/mapbox.places/" + text +  "20%" + "/portugal.json?accessToken=pk.eyJ1IjoibWlndWVsY3J1eiIsImEiOiJjbDI1djBzdmcwODhwM2RudTlleGRlZ2tpIn0.u31STaJqnZkr5QFGTgVD8w";

        let result = await pool.query(sql, [text]);

        let placesfound = result.rows;

        if (places.length > 0) {
            console.log("[placesModel.getTextPlace] place = " + JSON.stringify(placesfound[0]));
            return { status: 200, data: placesfound[0] };
        } else {
            return { status: 404, data: { msg: "Place not found." } };
        }

    } catch (err){

      console.log(err);
      return {status: 500, data: err};

    }

}*/

//FILTRAR LOCAIS PELA SUA CATEGORIA (ATUALMENTE NA BASE DE DADOS)


//POST METHOD

module.exports.savePlace = async function(local){

  
    console.log("[placesModel.savePlace] local = " + JSON.stringify(local));

    try {
        let sql =
            "INSERT " +
            "INTO place " +
            "(local_morada, local_category_id, local_nome, ref_system_id, geometry_info_point) " +
            "VALUES ($1, $2, $3, $4, $5) " +
            "RETURNING local_id";
        let result = await pool.query(sql, [local.local_morada, local.local_category_id, local.local_nome, local.ref_system_id, local.geometry_info_point]);
        let place = result.rows;
        console.log("[placesModel.savePlace] place = " + JSON.stringify(place));
        return { status: 200, data: place };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }


}
