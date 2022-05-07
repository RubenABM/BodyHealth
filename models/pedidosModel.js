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

//MÉTODO POST DA RECEITA

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
            "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) " +
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




