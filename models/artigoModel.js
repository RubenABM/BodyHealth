var pool = require("./database");

/*CRIAR NOVO ARTIGO*/

module.exports.saveArtigo = async function(artigo) {
    console.log("[artigoModel.saveArtigo] artigo = " + JSON.stringify(artigo));
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
            "INTO artigo " +
            "(artigo_leitura_titulo, artigo_leitura_corpo, artigo_leitura_data, artigo_read_type_id, artigo_category_id, comunidade_utilizador_id) " +
            "VALUES ($1, $2, $3, $4, $5, $6) " +
            "RETURNING artigo_leitura_id";

            console.log(artigo.artigo_leitura_titulo + "|" + artigo.artigo_leitura_corpo + "|" + artigo.artigo_leitura_data + "|" + artigo.artigo_read_type_id + "|" + artigo.artigo_category_id + "|" + artigo.comunidade_utilizador_id);
        let result = await pool.query(sql, [artigo.artigo_leitura_titulo, artigo.artigo_leitura_corpo, artigo.artigo_leitura_data, artigo.artigo_read_type_id, artigo.artigo_category_id, artigo.comunidade_utilizador_id]);
        let artigooo = result.rows[0].artigo_leitura_id;
        return { status: 200, data: artigooo };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}

module.exports.getArtigoCategory = async function(cat_id) {
    try {
        let sql = "SELECT artigo_leitura_titulo, artigo_leitura_corpo, artigo_leitura_data, artigo_read_type.artigo_reader_type, artigo_category.artigo_category, utilizador.user_name FROM artigo " + "INNER JOIN artigo_read_type ON artigo_read_type.artigo_reader_type_id = artigo.artigo_read_type_id " + "INNER JOIN artigo_category ON artigo_category.artigo_category_id = artigo.artigo_category_id " + "INNER JOIN utilizador ON utilizador.user_id = artigo.comunidade_utilizador_id " +"WHERE artigo.artigo_read_type_id =   " + cat_id;
        let result = await pool.query(sql);
        let artigosfound = result.rows;
        console.log("[artigoModel.getArtigoCategory] artigos = " + JSON.stringify(artigosfound));
        return { status: 200, data: artigosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getArtigoDetails = async function(art_id) {
    try {
        let sql = "SELECT artigo.artigo_leitura_id , artigo.artigo_leitura_titulo , artigo.artigo_leitura_corpo , artigo.artigo_leitura_data , artigo_read_type.artigo_reader_type, artigo_category.artigo_category, utilizador.user_name FROM artigo " + "INNER JOIN artigo_read_type ON artigo_read_type.artigo_reader_type_id = artigo.artigo_read_type_id " + "INNER JOIN artigo_category ON artigo_category.artigo_category_id = artigo.artigo_category_id " + "INNER JOIN utilizador ON utilizador.user_id = artigo.artigo_utilizador_id " + "WHERE artigo.artigo_id = " + art_id;
        let result = await pool.query(sql);
        let artigosfound = result.rows;
        console.log("[artigoModel.getArtigoCategory] artigos = " + JSON.stringify(artigosfound));
        return { status: 200, data: artigosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteArtigo = async function(art_id){

    try{
        let sql = "DELETE FROM artigo " + "WHERE artigo_id = " + art_id;
        let result = await pool.query(sql);
        let artigosfound = result.rows;
        console.log("[artigoModel.getArtigoCategory] artigos = " + JSON.stringify(artigosfound));
        return { status: 200, data: artigosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

