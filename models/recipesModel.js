var pool = require("./database");

module.exports.getRecipesUser = async function(uti_id) {
    try {
        let sql = "SELECT receita.receita_id, receita.receita_titulo, receita.receita_desc, receita.receita_utilizador_id, utilizador.user_name FROM receita " + "INNER JOIN utilizador ON utilizador.user_id = receita.receita_utilizador_id " + "WHERE receita.receita_utilizador_id =  " + uti_id;
        let result = await pool.query(sql);
        let recipesfound = result.rows;
        console.log("[recipesModel.getRecipesUser] recipes = " + JSON.stringify(recipesfound));
        return { status: 200, data: recipesfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}



module.exports.getRecipesUserByCategory = async function(uti_id, cat_id) {
    try {
        let sql = "SELECT receita.receita_id, receita.receita_titulo, receita.receita_desc, receita.receita_utilizador_id, utilizador.user_name FROM receita " + "INNER JOIN utilizador ON utilizador.user_id = receita.receita_utilizador_id " + "WHERE receita.receita_utilizador_id =  " + uti_id + " AND receita.receita_categoriaa_id =  " + cat_id;
        let result = await pool.query(sql);
        let recipesfoundcategory = result.rows;
        console.log("[recipesModel.getRecipesUserByCategory] recipesbycategoryofuser = " + JSON.stringify(recipesfoundcategory));
        return { status: 200, data: recipesfoundcategory };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//OBTER OS INGREDIENTES DE UMA RECEITA ESPECIFICA 

module.exports.getRecipesIngredients = async function(recipe_id) {
    try {
        let sql = "SELECT receita_ingrediente.receita_ingrediente_id, receita_ingrediente.recipe_id, receita.receita_titulo,receita_ingrediente.ingredient_id, receita_ingrediente.ingrediente_qnt, ingrediente.ingrediente_nome FROM receita_ingrediente " + "INNER JOIN receita ON receita.receita_id = receita_ingrediente.recipe_id "+ "INNER JOIN ingrediente ON ingrediente.ingrediente_id = receita_ingrediente.ingredient_id " + "WHERE receita.receita_id =   " + recipe_id;
        let result = await pool.query(sql);
        let ingredientesfound = result.rows;
        console.log("[recipesModel.getRecipesUser] ingredients = " + JSON.stringify(ingredientesfound));
        return { status: 200, data: ingredientesfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}



