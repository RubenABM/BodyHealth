var pool = require("./database");

module.exports.getAllMeals = async function() {
    try {
        let sql = "SELECT ementa.ementa_id , ementa.ementa_titulo, ementa.ementa_descricao, item_aprovacao.tipoaprovacao_nome, item_base.basee_nome, ementa_categoria.ementa_categoria_nome , utilizador.user_name, ementa.aprovacao_nutricionista FROM ementa " + "INNER JOIN item_aprovacao ON item_aprovacao.aprovacao_tipo_id = ementa.ementa_tipo_aprovacao_id " + "INNER JOIN item_base ON item_base.basee_id = ementa.ementa_base_id " + "INNER JOIN ementa_categoria ON ementa_categoria.ementa_categoria_id = ementa.ementa_categoriaa_id " + "INNER JOIN utilizador ON utilizador.user_Id = ementa.ementa_utilizador_id " + "LIMIT 6";
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[recipesModel.getAllRecipes] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getMealsByCategory = async function(cat_id) {
    try {
        let sql = "SELECT ementa.ementa_id , ementa.ementa_titulo, ementa.ementa_descricao, item_aprovacao.tipoaprovacao_nome, item_base.basee_nome, ementa_categoria.ementa_categoria_nome , utilizador.user_name, ementa.aprovacao_nutricionista FROM ementa " + "INNER JOIN item_aprovacao ON item_aprovacao.aprovacao_tipo_id = ementa.ementa_tipo_aprovacao_id " + "INNER JOIN item_base ON item_base.basee_id = ementa.ementa_base_id " + "INNER JOIN ementa_categoria ON ementa_categoria.ementa_categoria_id = ementa.ementa_categoriaa_id " + "INNER JOIN utilizador ON utilizador.user_Id = ementa.ementa_utilizador_id " + "WHERE ementa.ementa_categoriaa_id = " + cat_id + " LIMIT 6";
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[recipesModel.getAllRecipes] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getMealsByBase = async function(cat_id) {
    try {
        let sql = "SELECT ementa.ementa_id , ementa.ementa_titulo, ementa.ementa_descricao, item_aprovacao.tipoaprovacao_nome, item_base.basee_nome, ementa_categoria.ementa_categoria_nome , utilizador.user_name, ementa.aprovacao_nutricionista FROM ementa " + "INNER JOIN item_aprovacao ON item_aprovacao.aprovacao_tipo_id = ementa.ementa_tipo_aprovacao_id " + "INNER JOIN item_base ON item_base.basee_id = ementa.ementa_base_id " + "INNER JOIN ementa_categoria ON ementa_categoria.ementa_categoria_id = ementa.ementa_categoriaa_id " + "INNER JOIN utilizador ON utilizador.user_Id = ementa.ementa_utilizador_id " + "WHERE ementa.ementa_base_id = " + cat_id + " LIMIT 6";
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[recipesModel.getAllRecipes] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getEmentasUserByCategory = async function(uti_id, cat_id) {
    try {
        let sql = "SELECT ementa.ementa_id, ementa.ementa_titulo, ementa.ementa_descricao, ementa.ementa_utilizador_id, utilizador.user_name FROM ementa " + "INNER JOIN utilizador ON utilizador.user_id = ementa.ementa_utilizador_id " + " WHERE ementa.ementa_utilizador_id =  " + uti_id + " AND ementa.ementa_categoriaa_id =  " + cat_id;
        let result = await pool.query(sql);
        let ementasfoundcategoryuser = result.rows;
        console.log("[ementasModel.getEmentasUserByCategory] ementasbycategoryofuser = " + JSON.stringify(ementasfoundcategoryuser));
        return { status: 200, data: ementasfoundcategoryuser };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getEmentasUser = async function(uti_id) {
    try {
        let sql = "SELECT ementa.ementa_id, ementa.ementa_titulo, ementa.ementa_descricao, item_aprovacao.tipoaprovacao_nome, item_base.basee_nome, ementa_categoria.ementa_categoria_nome, utilizador.user_name FROM ementa " + "INNER JOIN item_aprovacao ON item_aprovacao.aprovacao_tipo_id = ementa.ementa_tipo_aprovacao_id " + "INNER JOIN item_base ON item_base.basee_id = ementa.ementa_base_id " + "INNER JOIN ementa_categoria ON ementa_categoria.ementa_categoria_id = ementa.ementa_categoriaa_id " + "INNER JOIN utilizador ON utilizador.user_id = ementa.ementa_utilizador_id " + "WHERE utilizador.user_id = " + uti_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getRecipesFromEmenta = async function(ementa_id) {
    try {
        let sql = "SELECT ementa_receita.ementa_receita_id, receita.receita_titulo, item_base.basee_nome, receita_categoria.receita_categoria_nome, utilizador.user_name FROM ementa_receita INNER JOIN receita ON receita.receita_id = ementa_receita.receita_id INNER JOIN item_base ON item_base.basee_id = receita.receita_base_id INNER JOIN receita_categoria ON receita_categoria.receita_categoria_id = receita.receita_categoriaa_id INNER JOIN utilizador ON utilizador.user_id = receita.receita_utilizador_id WHERE ementa_receita.ementa_id = " + ementa_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getEmentasFavorites = async function(user_id) {
    try {
        let sql = "SELECT marcacao_favorito_ementa.favorito_ementa_id ,utilizador.user_name, ementa.ementa_titulo, item_base.basee_nome, ementa_categoria.ementa_categoria_nome FROM marcacao_favorito_ementa " + "INNER JOIN ementa ON ementa.ementa_id = marcacao_favorito_ementa.ementa_id " + "INNER JOIN utilizador ON utilizador.user_id = ementa.ementa_utilizador_id " + "INNER JOIN item_base ON item_base.basee_id = ementa.ementa_base_id " + "INNER JOIN ementa_categoria ON ementa_categoria.ementa_categoria_id = ementa.ementa_categoriaa_id " + "WHERE marcacao_favorito_ementa.utilizador_id = " + user_id;
        let result = await pool.query(sql);
        let recipefound = result.rows;
        console.log("[recipesModel.getRecipeById] recipe = " + JSON.stringify(recipefound));
        return { status: 200, data: recipefound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

/*CRIAR NOVA EMENTA*/

module.exports.saveEmenta = async function(ementa) {
    console.log("[ementasModel.saveEmenta] ementa = " + JSON.stringify(ementa));
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
            "INTO ementa " +
            "(ementa_titulo, ementa_descricao, ementa_tipo_aprovacao_id, ementa_base_id, ementa_categoriaa_id, ementa_utilizador_id, aprovacao_nutricionista) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7) " +
            "RETURNING ementa_id";

            console.log(ementa.ementa_titulo + "|" + ementa.ementa_descricao + "|" + ementa.ementa_tipo_aprovacao_id + "|" + ementa.ementa_base_id + "|" + ementa.ementa_categoriaa_id + "|" + ementa.ementa_utilizador_id + "|" + ementa.aprovacao_nutricionista);
        let result = await pool.query(sql, [ementa.ementa_titulo, ementa.ementa_descricao, ementa.ementa_tipo_aprovacao_id, ementa.ementa_base_id, ementa.ementa_categoriaa_id, ementa.ementa_utilizador_id, ementa.aprovacao_nutricionista]);
        let ementaaa = result.rows[0].ementa_id;
        return { status: 200, data: ementaaa };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}

module.exports.DeleteEmenta = async function(ementa_id){

    try{
        let sql = "DELETE FROM ementa " + "WHERE ementa_id = " + ementa_id;
        let result = await pool.query(sql);
        let ementafound = result.rows;
        console.log("[artigoModel.getArtigoCategory] ementa = " + JSON.stringify(ementafound));
        return { status: 200, data: ementafound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

module.exports.getEmentasRecipes = async function(ementa_id) {
    try {
        let sql = "SELECT ementa_receita.ementa_receita_id, ementa_receita.receita_id, ementa_receita.ementa_id, ementa.ementa_id ,ementa.ementa_titulo, receita.receita_id, receita.receita_titulo, receita.receita_desc, item_aprovacao.tipoaprovacao_nome, item_base.basee_nome, receita_categoria.receita_categoria_nome FROM ementa_receita " + "INNER JOIN ementa ON ementa.ementa_id = ementa_receita.ementa_id " + "INNER JOIN receita ON receita.receita_id = ementa_receita.receita_id " + "INNER JOIN item_aprovacao ON item_aprovacao.aprovacao_tipo_id = receita.receita_tipo_aprovacao_id " + "INNER JOIN item_base ON item_base.basee_id = receita.receita_base_id " + "INNER JOIN receita_categoria ON receita_categoria.receita_categoria_id = receita.receita_categoriaa_id " + "WHERE ementa.ementa_id = " + ementa_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getEmentasDetails = async function(ementa_id) {
    try {
        let sql = "SELECT ementa.ementa_id, ementa.ementa_titulo, ementa.ementa_descricao, item_aprovacao.tipoaprovacao_nome, item_base.basee_nome, ementa_categoria.ementa_categoria_nome, utilizador.user_name FROM ementa " + "INNER JOIN item_aprovacao ON item_aprovacao.aprovacao_tipo_id = ementa.ementa_tipo_aprovacao_id " + "INNER JOIN item_base ON item_base.basee_id = ementa.ementa_base_id " + "INNER JOIN ementa_categoria ON ementa_categoria.ementa_categoria_id = ementa.ementa_categoriaa_id " + "INNER JOIN utilizador ON utilizador.user_id = ementa.ementa_utilizador_id " + "WHERE ementa.ementa_id = " + ementa_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//MARCACAO DE EMENTA FAVORITA

module.exports.saveEmentaFavorito = async function(ementa) {
    console.log("[ementasModel.saveEmenta] ementa = " + JSON.stringify(ementa));
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
            "INTO marcacao_favorito_ementa " +
            "(utilizador_id, ementa_id, is_ementa_favorito) " +
            "VALUES ($1, $2, '1') " +
            "RETURNING favorito_ementa_id";

            console.log(ementa.utilizador_id + "|" + ementa.ementa_id + "|" + ementa.is_ementa_favorito);
        let result = await pool.query(sql, [ementa.utilizador_id, ementa.ementa_id, ementa.is_ementa_favorito]);
        let ementaaa = result.rows[0].favorito_ementa_id;
        return { status: 200, data: ementaaa };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}

module.exports.saveNewEmenta = async function(ementa) {
    console.log("[ementasModel.saveEmenta] ementa = " + JSON.stringify(ementa));
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
            "INTO ementa " +
            "(ementa_titulo, ementa_descricao, ementa_tipo_aprovacao_id, ementa_base_id, ementa_categoriaa_id, ementa_utilizador_id, aprovacao_nutricionista) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7) " +
            "RETURNING ementa_id";

            console.log(ementa.ementa_titulo + "|" + ementa.ementa_descricao + "|" + ementa.ementa_tipo_aprovacao_id + "|" + ementa.ementa_base_id + "|" + ementa.ementa_categoriaa_id + "|" + ementa.ementa_utilizador_id + "|" + ementa.aprovacao_nutricionista);
        let result = await pool.query(sql, [ementa.ementa_titulo, ementa.ementa_descricao, ementa.ementa_tipo_aprovacao_id,+ ementa.ementa_base_id, ementa.ementa_categoriaa_id, ementa.ementa_utilizador_id, ementa.aprovacao_nutricionista]);
        let ementaaa = result.rows[0].ementa_id;
        return { status: 200, data: ementaaa };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}


module.exports.UpdateFavorito = async function(ementa_id, utilizador_id){

    try {
        let sql = "UPDATE marcacao_favorito_ementa " + "SET is_ementa_favorito = '0' " + "WHERE marcacao_favorito_ementa.utilizador_id = " + utilizador_id + " AND marcacao_favorito_ementa.ementa_id = " + ementa_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

module.exports.UpdateFavoritoRemarcar = async function(ementa_id, utilizador_id){

    try {
        let sql = "UPDATE marcacao_favorito_ementa " + "SET is_ementa_favorito = '1' " + "WHERE marcacao_favorito_ementa.utilizador_id = " + utilizador_id + " AND marcacao_favorito_ementa.ementa_id = " + ementa_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}


