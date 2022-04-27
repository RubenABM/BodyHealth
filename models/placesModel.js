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
