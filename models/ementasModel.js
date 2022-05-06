var pool = require("./database");


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
        let sql = "SELECT ementa.ementa_id, ementa.ementa_titulo, ementa.ementa_descricao, ementa.ementa_utilizador_id, utilizador.user_name FROM ementa " + "INNER JOIN utilizador ON utilizador.user_id = ementa.ementa_utilizador_id " + "WHERE ementa.ementa_utilizador_id =  " + uti_id;
        let result = await pool.query(sql);
        let ementasfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(ementasfound));
        return { status: 200, data: ementasfound };
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

