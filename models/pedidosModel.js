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
