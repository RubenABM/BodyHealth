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
