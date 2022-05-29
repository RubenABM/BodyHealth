var pool = require("./database")

module.exports.getAllPedidos = async function(uti_id) {
    try {
        let sql = "SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, pedido.pedido_local_id, pedido.pedido_data, utilizador.user_id, pedido.pedido_tipo_id, pedido.pedido_estado_id, pedido.pedido_profissional_id, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM pedido " + "INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_utilizador_id " + "INNER JOIN place ON place.local_id = pedido.pedido_local_id " + "WHERE utilizador.user_id = " + uti_id;
        let result = await pool.query(sql);
        let pedidosfound = result.rows;
        console.log("[pedidosModel.getAllPedidos] pedidos = " + JSON.stringify(pedidosfound));
        return { status: 200, data: pedidosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllPedidosLimit = async function(uti_id) {
    try {
        let sql = "SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, pedido.pedido_local_id, pedido.pedido_data, utilizador.user_id, pedido.pedido_tipo_id, pedido.pedido_estado_id, pedido.pedido_profissional_id, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM pedido LIMIT 20 " + "INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_utilizador_id " + "INNER JOIN place ON place.local_id = pedido.pedido_local_id " + "WHERE utilizador.user_id = " + uti_id + "ORDER BY pedido.pedido_data DESC";
        let result = await pool.query(sql);
        let pedidosfound = result.rows;
        console.log("[pedidosModel.getAllPedidos] pedidos = " + JSON.stringify(pedidosfound));
        return { status: 200, data: pedidosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllPedidosList = async function(uti_id) {
    try {
        let sql = "SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, place.local_nome, place.local_morada, place.geometry_info_point, ST_X(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Longitude, ST_Y(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Latitude, utilizador.user_name, utilizador.user_admin, utilizador.user_pt, utilizador.user_nutri, pedido.pedido_data, pedido_tipo.pedido_type, pedido_estado.pedido_estado, pedido.pedido_hora FROM pedido " + "INNER JOIN place ON place.local_id = pedido.pedido_local_id " + "INNER JOIN pedido_tipo ON pedido_tipo.pedido_type_id = pedido.pedido_tipo_id " + "INNER JOIN pedido_estado ON pedido_estado.pedido_estado_id = pedido.pedido_estado_id " + "INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_profissional_id " + "WHERE pedido.pedido_utilizador_id = " + uti_id;
        let result = await pool.query(sql);
        let pedidosfound = result.rows;
        console.log("[pedidosModel.getAllPedidos] pedidos = " + JSON.stringify(pedidosfound));
        return { status: 200, data: pedidosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllEventosMarcados = async function(uti_id) {
    try {
        let sql = "SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, place.local_nome, place.local_morada, place.geometry_info_point, ST_X(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Longitude, ST_Y(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Latitude, utilizador.user_name, utilizador.user_admin, utilizador.user_pt, utilizador.user_nutri, pedido.pedido_data, pedido_tipo.pedido_type, pedido_estado.pedido_estado, pedido.pedido_hora FROM pedido " + "INNER JOIN place ON place.local_id = pedido.pedido_local_id " + "INNER JOIN pedido_tipo ON pedido_tipo.pedido_type_id = pedido.pedido_tipo_id " + "INNER JOIN pedido_estado ON pedido_estado.pedido_estado_id = pedido.pedido_estado_id " + "INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_profissional_id " + "WHERE pedido.pedido_utilizador_id = " + uti_id + " AND pedido.pedido_estado_id = 2";
        let result = await pool.query(sql);
        let pedidosfound = result.rows;
        console.log("[pedidosModel.getAllPedidos] pedidos = " + JSON.stringify(pedidosfound));
        return { status: 200, data: pedidosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllEventosMarcadosCategory = async function(uti_id, type_id) {
    try {
        let sql = "SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, place.local_nome, place.local_morada, place.geometry_info_point, ST_X(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Longitude, ST_Y(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Latitude, utilizador.user_name, utilizador.user_admin, utilizador.user_pt, utilizador.user_nutri, pedido.pedido_data, pedido_tipo.pedido_type, pedido_estado.pedido_estado, pedido.pedido_hora FROM pedido " + "INNER JOIN place ON place.local_id = pedido.pedido_local_id " + "INNER JOIN pedido_tipo ON pedido_tipo.pedido_type_id = pedido.pedido_tipo_id " + "INNER JOIN pedido_estado ON pedido_estado.pedido_estado_id = pedido.pedido_estado_id " + "INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_profissional_id " + "WHERE pedido.pedido_utilizador_id = " + uti_id + " AND pedido.pedido_tipo_id = " + type_id;
        let result = await pool.query(sql);
        let pedidosfound = result.rows;
        console.log("[pedidosModel.getAllPedidos] pedidos = " + JSON.stringify(pedidosfound));
        return { status: 200, data: pedidosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllEventosMarcadosEstado = async function(uti_id, type_id) {
    try {
        let sql = "SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, place.local_nome, place.local_morada, place.geometry_info_point, ST_X(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Longitude, ST_Y(ST_Transform (ST_SetSRID(geometry_info_point, 4326), 4326)) AS Latitude, utilizador.user_name, utilizador.user_admin, utilizador.user_pt, utilizador.user_nutri, pedido.pedido_data, pedido_tipo.pedido_type, pedido_estado.pedido_estado, pedido.pedido_hora FROM pedido " + "INNER JOIN place ON place.local_id = pedido.pedido_local_id " + "INNER JOIN pedido_tipo ON pedido_tipo.pedido_type_id = pedido.pedido_tipo_id " + "INNER JOIN pedido_estado ON pedido_estado.pedido_estado_id = pedido.pedido_estado_id " + "INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_profissional_id " + "WHERE pedido.pedido_utilizador_id = " + uti_id + " AND pedido.pedido_estado_id = " + type_id;
        let result = await pool.query(sql);
        let pedidosfound = result.rows;
        console.log("[pedidosModel.getAllPedidos] pedidos = " + JSON.stringify(pedidosfound));
        return { status: 200, data: pedidosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllPedidosByCategory = async function(uti_id, cat_id) {
    try {
        let sql = "SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, pedido.pedido_local_id, pedido.pedido_data, utilizador.user_id, pedido.pedido_tipo_id, pedido.pedido_estado_id, pedido.pedido_profissional_id, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM pedido " + "INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_utilizador_id " + "INNER JOIN place ON place.local_id = pedido.pedido_local_id " + "WHERE utilizador.user_id =  " + uti_id +  "AND pedido.pedido_tipo_id = " + cat_id;
        let result = await pool.query(sql);
        let pedidosfound = result.rows;
        console.log("[pedidosModel.getAllPedidos] pedidos = " + JSON.stringify(pedidosfound));
        return { status: 200, data: pedidosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllPedidosByCategoryOrdered = async function(uti_id, cat_id) {
    try {
        let sql = "SELECT pedido.pedido_id, pedido.pedido_titulo, pedido.pedido_desc, pedido.pedido_local_id, pedido.pedido_data, utilizador.user_id, pedido.pedido_tipo_id, pedido.pedido_estado_id, pedido.pedido_profissional_id, place.local_id, place.local_nome, place.local_morada ,place.geometry_info_point FROM pedido " + "INNER JOIN utilizador ON utilizador.user_id = pedido.pedido_utilizador_id " + "INNER JOIN place ON place.local_id = pedido.pedido_local_id " + "WHERE utilizador.user_id =  " + uti_id +  "AND pedido.pedido_tipo_id = " + cat_id + " ORDER BY pedido.pedido_data DESC";
        let result = await pool.query(sql);
        let pedidosfound = result.rows;
        console.log("[pedidosModel.getAllPedidos] pedidos = " + JSON.stringify(pedidosfound));
        return { status: 200, data: pedidosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//MÉTODO POST DO PEDIDO

module.exports.savePedido = async function(pedido) {
    console.log("[pedidosModel.savePedido] pedido = " + JSON.stringify(pedido));
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
            "INTO pedido " +
            "(pedido_titulo, pedido_desc, pedido_local_id, pedido_utilizador_id, pedido_terminada, pedido_data, pedido_tipo_id, pedido_estado_id, pedido_profissional_id) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7, 4, $9) " +
            "RETURNING pedido_id";

            console.log(pedido.pedido_titulo + "|" + pedido.pedido_desc + "|" + pedido.pedido_local_id + "|" + pedido.pedido_utilizador_id + "|" + pedido.pedido.pedido_terminada + "|" + pedido.pedido_data + "|" + pedido.pedido_tipo_id + "|" + pedido.pedido_estado_id + "|" + pedido.pedido_profissional_id);
        let result = await pool.query(sql, [pedido.pedido_titulo, pedido.pedido_desc, pedido.pedido_local_id, pedido.pedido_utilizador_id, pedido.pedido.pedido_terminada, pedido.pedido_data, pedido.pedido_tipo_id, pedido.pedido_estado_id, pedido.pedido_profissional_id]);
        let pedidooo = result.rows[0].pedido_id;
        return { status: 200, data: pedidooo };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}




module.exports.DeletePedido = async function(pedido_id){

    try{
        let sql = "DELETE FROM pedido " + "WHERE pedido_id = " + pedido_id;
        let result = await pool.query(sql);
        let pedidofound = result.rows;
        console.log("[artigoModel.getArtigoCategory] pedido = " + JSON.stringify(pedidofound));
        return { status: 200, data: pedidofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

module.exports.UpdateAceitarPedido = async function(pedido_id){

    try {
        let sql = "UPDATE pedido " + "SET pedido.pedido_estado_id = 2 " + "WHERE pedido.pedido_id = " + pedido_id;
        let result = await pool.query(sql);
        let pedidofound = result.rows;
        console.log("[ementasModel.getEmentasUser] pedido = " + JSON.stringify(pedidofound));
        return { status: 200, data: pedidofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

module.exports.UpdateRecusarPedido = async function(pedido_id){

    try {
        let sql = "UPDATE pedido " + "SET pedido.pedido_estado_id = 3 " + "WHERE pedido.pedido_id = " + pedido_id;
        let result = await pool.query(sql);
        let pedidofound = result.rows;
        console.log("[ementasModel.getEmentasUser] pedido = " + JSON.stringify(pedidofound));
        return { status: 200, data: pedidofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}



