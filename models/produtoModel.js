var pool = require("./database");

module.exports.getAllProducts = async function() {
    try {
        let sql = "SELECT * FROM produto";
        let result = await pool.query(sql);
        let produtosfound = result.rows;
        console.log("[produtoModel.getAllProducts] produtos = " + JSON.stringify(produtosfound));
        return { status: 200, data: produtosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllCalcado = async function() {
    try {
        let sql = "SELECT produto.produto_id, produto.produto_titulo, produto.produto_desc, produto.produto_preco, produto.produto_points, produto_category.prod_category FROM produto " + "INNER JOIN produto_category ON produto_category.produto_category_id = produto.produto_categoria_id " + "WHERE produto.produto_categoria_id = 5";
        let result = await pool.query(sql);
        let produtosfound = result.rows;
        console.log("[produtoModel.getAllProducts] produtos = " + JSON.stringify(produtosfound));
        return { status: 200, data: produtosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllSportswear = async function() {
    try {
        let sql = "SELECT produto.produto_id, produto.produto_titulo, produto.produto_desc, produto.produto_preco, produto.produto_points, produto_category.prod_category FROM produto " + "INNER JOIN produto_category ON produto_category.produto_category_id = produto.produto_categoria_id " + "WHERE produto.produto_categoria_id = 1";
        let result = await pool.query(sql);
        let produtosfound = result.rows;
        console.log("[produtoModel.getAllProducts] produtos = " + JSON.stringify(produtosfound));
        return { status: 200, data: produtosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllEquipamento = async function() {
    try {
        let sql = "SELECT produto.produto_id, produto.produto_titulo, produto.produto_desc, produto.produto_preco, produto.produto_points, produto_category.prod_category FROM produto " + "INNER JOIN produto_category ON produto_category.produto_category_id = produto.produto_categoria_id " + "WHERE produto.produto_categoria_id = 2";
        let result = await pool.query(sql);
        let produtosfound = result.rows;
        console.log("[produtoModel.getAllProducts] produtos = " + JSON.stringify(produtosfound));
        return { status: 200, data: produtosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllSuplemento = async function() {
    try {
        let sql = "SELECT produto.produto_id, produto.produto_titulo, produto.produto_desc, produto.produto_preco, produto.produto_points, produto_category.prod_category FROM produto " + "INNER JOIN produto_category ON produto_category.produto_category_id = produto.produto_categoria_id " + "WHERE produto.produto_categoria_id = 3";
        let result = await pool.query(sql);
        let produtosfound = result.rows;
        console.log("[produtoModel.getAllProducts] produtos = " + JSON.stringify(produtosfound));
        return { status: 200, data: produtosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getVerifyListProdutos = async function(id_utilizador, id_produto) {
    try {
        let sql = "SELECT * FROM productsgetlist " + "WHERE productsgetlist.utilizador_id = " + id_utilizador + " AND productsgetlist.product_id = " + id_produto;
        let result = await pool.query(sql);
        let produtosfound = result.rows;
        console.log("[produtoModel.getAllProducts] produtos = " + JSON.stringify(produtosfound));
        return { status: 200, data: produtosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.deleteProdutoFromList = async function(id_utilizador, id_produto) {
    try {
        let sql = "DELETE FROM productsgetlist WHERE productsgetlist.utilizador_id = " + id_utilizador + " AND productsgetlist.product_id = " + id_produto;
        let result = await pool.query(sql);
        let produtosfound = result.rows;
        console.log("[produtoModel.getAllProducts] produtos = " + JSON.stringify(produtosfound));
        return { status: 200, data: produtosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getSomeProdutos = async function() {
    try {
        let sql = "SELECT produto.produto_id, produto.produto_titulo, produto.produto_desc, produto.produto_preco, produto.produto_points, produto_category.prod_category FROM produto " + "INNER JOIN produto_category ON produto_category.produto_category_id = produto.produto_categoria_id " + "ORDER BY RANDOM() " + "LIMIT 4 ";
        let result = await pool.query(sql);
        let produtosfound = result.rows;
        console.log("[produtoModel.getAllProducts] produtos = " + JSON.stringify(produtosfound));
        return { status: 200, data: produtosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getProductCategory = async function(cat_id){

    try{
        let sql = "SELECT produto.produto_titulo, produto.produto_desc, produto.produto_preco, produto.produto_points, produto_category.prod_category FROM produto " + "INNER JOIN produto_category ON produto_category.produto_category_id = produto.produto_categoria_id " + "WHERE produto_categoria_id =  " + cat_id;
        let result = await pool.query(sql);
        let productssfound = result.rows;
        console.log("[produtoModel.getProductCategory] produtoscategoria = " + JSON.stringify(productssfound));
        return {status: 200, data: productssfound };

    } catch(err){
        console.log(err);
        return { status: 500, data: err };
    }

}

module.exports.saveProductList = async function(productList) {
    var isget = true;
    console.log("[produtoModel.saveProductList] productList = " + JSON.stringify(productList));
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
            "INTO productsgetlist " +
            "(isget, product_id, utilizador_id) " +
            "VALUES ($1, $2, $3) " +
            "RETURNING get_product_position_id";

            console.log(productList.isget + "|" + productList.product_id + "|" + productList.utilizador_id);
        let result = await pool.query(sql, [productList.isget, productList.product_id, productList.utilizador_id]);
        let prodListt = result.rows[0].get_product_position_id;
        return { status: 200, data: prodListt };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}

module.exports.updatePontosUtilizador = async function(uti_id, pontossobrantes){

    try{
        let sql = "UPDATE utilizador SET user_points = " + pontossobrantes + "WHERE user_id = " + uti_id;
        let result = await pool.query(sql);
        let productssfound = result.rows;
        console.log("[produtoModel.getProductCategory] produtoscategoria = " + JSON.stringify(productssfound));
        return {status: 200, data: productssfound };

    } catch(err){
        console.log(err);
        return { status: 500, data: err };
    }


}
