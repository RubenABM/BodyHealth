var pool = require("./database");

module.exports.getPlaces = async function() {
    try {
        let sql = "select * from place";
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
        let place = result.rows[0];
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
