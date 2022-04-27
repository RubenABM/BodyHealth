var pool = require("./database");

module.exports.getIngredientes = async function() {
    try {
        let sql = "select * from ingrediente";
        let result = await pool.query(sql);
        let ingredientes = result.rows;
        console.log("[ingredientesModel.getIngredientes] ingredientes = " + JSON.stringify(ingredientes));
        return { status: 200, data: ingredientes };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}