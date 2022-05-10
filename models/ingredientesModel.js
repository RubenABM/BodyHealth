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

module.exports.saveIngrediente = async function(ingrediente) {
    console.log("[recipesModel.saveRecipe] exercise = " + JSON.stringify(ingrediente));
    /* checks all fields needed and ignores other fields
    if (typeof user != "object" || failUser(user)) {
        if (user.errMsg)
            return { status: 400, data: { msg: user.errMsg } };
        else
            return { status: 400, data: { msg: "Malformed data" } };
    }*/
    try {

        let sql =
            "INSERT " +
            "INTO ingrediente " +
            "(ingrediente_nome, ingrediente_cal, ingrediente_carbohidratos, ingrediente_proteina, ingrediente_fibra, ingrediente_acucares) " +
            "VALUES ($1, $2, $3, $4, $5, $6) " +
            "RETURNING ingrediente_id";

        let result = await pool.query(sql, [ingrediente.ingrediente_nome, ingrediente.ingrediente_cal, ingrediente.ingrediente_carbohidratos, ingrediente.ingrediente_proteina, ingrediente.ingrediente_fibra, ingrediente.ingrediente_acucares]);
        let ingredienteeee = result.rows[0].ingrediente_id;
        return { status: 200, data: ingredienteeee };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}