var pool = require("./database");

module.exports.getAllEventos = async function() {
    try {
        let sql = "SELECT evento.evento_id, evento.evento_titulo, evento.evento_descricao, evento.evento_data, place.local_nome, place.local_morada, place.geometry_info_point , place_category.local_category_name, utilizador.user_name, evento.evento_terminado, ST_X(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Longitude, ST_Y(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Latitude FROM evento " + "INNER JOIN place ON place.local_id = evento.evento_local_id " + "INNER JOIN place_category ON place_category.local_category_id = place.local_category_id " + "INNER JOIN utilizador ON evento.evento_criador_id = utilizador.user_id ";
        let result = await pool.query(sql);
        let eventosfound = result.rows;
        console.log("[eventosModel.getAllEventos] eventos = " + JSON.stringify(eventosfound));
        return { status: 200, data: eventosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getEventosRecentes = async function() {
    try {
        let sql = "SELECT evento.evento_id, evento.evento_titulo, evento.evento_descricao, evento.evento_data, place.local_id ,place.local_nome, place.local_morada, ST_X(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Longitude, ST_Y(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Latitude  FROM evento " + "INNER JOIN place ON place.local_id = evento.evento_local_id " + "ORDER BY evento.evento_data DESC " + "LIMIT 4";
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

module.exports.getUltimasAulas = async function(uti_id) {
    try {
        let sql = "SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, place.local_nome, place.local_morada, ST_X(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Longitude, ST_Y(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Latitude, utilizador.user_name, pedido.pedido_data, pedido.pedido_hora, pedido_tipo.pedido_type, pedido_estado.pedido_estado FROM pedido " + "INNER JOIN place ON place.local_id = pedido.pedido_local_id " + "INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_profissional_id " + "INNER JOIN pedido_tipo ON pedido_tipo.pedido_type_id = pedido.pedido_tipo_id " + "INNER JOIN pedido_estado ON pedido_estado.pedido_estado_id = pedido.pedido_estado_id " + "WHERE pedido.pedido_utilizador_id = " + uti_id + " ORDER BY pedido.pedido_data DESC " + " LIMIT 2";
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


module.exports.getEventosOrdenados = async function() {
    try {
        let sql = "SELECT evento_titulo, evento_data, place.local_nome, place.local_morada, place.geometry_info_point ,utilizador.user_name FROM evento " + "INNER JOIN  place ON place.local_id = evento.evento_local_id " + "INNER JOIN  utilizador ON utilizador.user_id = evento.evento_criador_id  " + "ORDER BY evento.evento_data DESC";
        let result = await pool.query(sql);
        let eventosfound = result.rows;
        console.log("[eventosModel.getEventosUser] eventos = " + JSON.stringify(eventosfound));
        return { status: 200, data: eventosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}
