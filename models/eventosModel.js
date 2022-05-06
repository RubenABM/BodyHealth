var pool = require("./database");

module.exports.getAllEventos = async function() {
    try {
        let sql = "SELECT evento_titulo, evento_data, place.local_nome, place.local_morada, place.geometry_info_point ,utilizador.user_name FROM evento " + "INNER JOIN  place ON place.local_id = evento.evento_local_id " + "INNER JOIN  utilizador ON utilizador.user_id = evento.evento_criador_id";
        let result = await pool.query(sql);
        let eventosfound = result.rows;
        console.log("[eventosModel.getAllEventos] eventos = " + JSON.stringify(eventosfound));
        return { status: 200, data: eventosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getEventosUser = async function(uti_id) {
    try {
        let sql = "SELECT evento_titulo, evento_data, place.local_nome, place.local_morada, place.geometry_info_point ,utilizador.user_name FROM evento " + "INNER JOIN  place ON place.local_id = evento.evento_local_id " + "INNER JOIN  utilizador ON utilizador.user_id = evento.evento_criador_id  " + "WHERE utilizador.user_id = " + uti_id;
        let result = await pool.query(sql);
        let eventosfound = result.rows;
        console.log("[eventosModel.getEventosUser] eventos = " + JSON.stringify(eventosfound));
        return { status: 200, data: eventosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getEventosOrdenadosUser = async function(uti_id) {
    try {
        let sql = "SELECT evento_titulo, evento_data, place.local_nome, place.local_morada, place.geometry_info_point ,utilizador.user_name FROM evento " + "INNER JOIN  place ON place.local_id = evento.evento_local_id " + "INNER JOIN  utilizador ON utilizador.user_id = evento.evento_criador_id  " + "WHERE utilizador.user_id = " + uti_id + " ORDER BY evento.evento_data DESC";
        let result = await pool.query(sql);
        let eventosfound = result.rows;
        console.log("[eventosModel.getEventosUser] eventos = " + JSON.stringify(eventosfound));
        return { status: 200, data: eventosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.saveEvento = async function(evento) {
    console.log("[eventosModel.saveEvento] evento = " + JSON.stringify(evento));
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
            "INTO evento " +
            "(evento_titulo, evento_descricao, evento_local_id, evento_data, evento_criador_id, evento_terminado) " +
            "VALUES ($1, $2, $3, $4, $5, $6) " +
            "RETURNING evento_id";

            console.log(evento.evento_titulo + "|" + evento.evento_descricao + "|" + evento.evento_local_id + "|" + evento.evento_data + "|" + evento.evento_criador_id + "|" + evento.evento_terminado);
        let result = await pool.query(sql, [evento.evento_titulo, evento.evento_descricao, evento.evento_local_id, evento.evento_data, evento.evento_criador_id , evento.evento_terminado]);
        let eventooo = result.rows[0].evento_id;
        return { status: 200, data: eventooo };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}



