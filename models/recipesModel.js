var pool = require("./database");

module.exports.getAllRecipes = async function() {
    try {
        let sql = "SELECT * FROM receita";
        let result = await pool.query(sql);
        let recipesfound = result.rows;
        console.log("[recipesModel.getAllRecipes] recipes = " + JSON.stringify(recipesfound));
        return { status: 200, data: recipesfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//TERMINAR A QUERY
module.exports.getRecipesUser = async function(uti_id) {
    try {
        let sql = "SELECT receita.receita_id, receita.receita_titulo, receita.receita_desc, receita.receita_utilizador_id, utilizador.user_name FROM receita " + "INNER JOIN utilizador ON utilizador.user_id = receita.receita_utilizador_id " + "WHERE receita.receita_utilizador_id =  " + uti_id;
        let result = await pool.query(sql);
        let recipesfound = result.rows[0];
        console.log("[recipesModel.getRecipesUser] recipes = " + JSON.stringify(recipesfound));
        return { status: 200, data: recipesfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getRecipeById = async function(recipe_id) {
    try {
        let sql = "SELECT receita.receita_id, receita.receita_titulo, receita.receita_desc, receita.receita_utilizador_id, receita_ingrediente.receita_ingrediente_id, ingrediente.ingrediente_id, ingrediente.ingrediente_nome, utilizador.user_name, receita_categoria.receita_categoria_nome, item_base.basee_nome FROM receita " + "INNER JOIN receita_ingrediente ON receita_ingrediente.recipe_id = receita.receita_id " + "INNER JOIN ingrediente ON ingrediente.ingrediente_id = receita_ingrediente.ingredient_id " + "INNER JOIN utilizador ON receita.receita_utilizador_id = utilizador.user_id " + "INNER JOIN receita_categoria ON receita_categoria.receita_categoria_id = receita.receita_categoriaa_id " + "INNER JOIN item_base ON item_base.basee_id = receita.receita_base_id " + "WHERE receita.receita_id = "+ recipe_id;
        let result = await pool.query(sql);
        let recipefound = result.rows[0];
        console.log("[recipesModel.getRecipeById] recipe = " + JSON.stringify(recipefound));
        return { status: 200, data: recipefound };
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


//MÉTODO POST DA RECEITA

module.exports.saveRecipe = async function(recipe) {
    console.log("[recipesModel.saveRecipe] recipe = " + JSON.stringify(recipe));
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
            "INTO receita " +
            "(receita_titulo, receita_desc, receita_tipo_aprovacao_id, receita_base_id, receita_categoriaa_id, receita_utilizador_id, aprovacao_nutricionista) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7) " +
            "RETURNING receita_id";

            console.log(recipe.receita_titulo + "|" + recipe.receita_desc + "|" + recipe.receita_tipo_aprovacao_id + "|" + recipe.receita_base_id + "|" + recipe.receita_categoriaa_id + "|" + recipe.receita_utilizador_id + "|" + recipe.aprovacao_nutricionista);
        let result = await pool.query(sql, [recipe.receita_titulo, recipe.receita_desc, recipe.receita_tipo_aprovacao_id, recipe.receita_base_id, recipe.receita_categoriaa_id, recipe.receita_utilizador_id, recipe.aprovacao_nutricionista]);
        let receitaaa = result.rows[0].receita_id;
        return { status: 200, data: receitaaa };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}

