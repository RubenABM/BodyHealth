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

module.exports.getIngredient = async function(ing_id) {
    try {
        let sql = "select * from ingrediente " +  "where ingrediente.ingrediente_id = " + ing_id;
        let result = await pool.query(sql);
        let ingredient = result.rows;
        console.log("[ingredientesModel.getIngredient] ingredient = " + JSON.stringify(ingredient));
        return { status: 200, data: ingredient };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}