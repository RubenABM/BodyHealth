var pool = require("./database");

//COPIAR MÉTODOS DOS EXERCICIOS

module.exports.getPlanoById = async function(plano_id) {
    try {
        let sql = "SELECT plano.plano_titulo, plano.plano_treino_desc, utilizador.user_name , item_aprovacao.tipoaprovacao_nome FROM plano " + "INNER JOIN utilizador ON utilizador.user_id = plano.plano_utilizador_id " + "INNER JOIN item_aprovacao ON item_aprovacao.aprovacao_tipo_id = plano.plano_treino_tipo_aprovacao_id " + "WHERE plano.plano_treino_id = " + plano_id;
        let result = await pool.query(sql);
        let planofound = result.rows;
        console.log("[planosModel.getPlanoById] plano = " + JSON.stringify(planofound));
        console.log("AQUI -> : " + planofound)
        return { status: 200, data: planofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllPlano = async function(){

    try {
        let sql = "SELECT plano.plano_treino_id, plano.plano_titulo, plano.plano_treino_desc, utilizador.user_name, item_aprovacao.tipoaprovacao_nome FROM plano " + "INNER JOIN utilizador ON utilizador.user_id = plano.plano_utilizador_id " + "INNER JOIN item_aprovacao ON item_aprovacao.aprovacao_tipo_id = plano.plano_treino_tipo_aprovacao_id" ;
        let result = await pool.query(sql);
        let planofound = result.rows;
        console.log("[planosModel.getPlanoById] plano = " + JSON.stringify(planofound));
        return { status: 200, data: planofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllPlanoss = async function(){

    try {
        let sql = "SELECT plano.plano_treino_id, plano.plano_titulo, plano.plano_treino_desc, utilizador.user_name, item_aprovacao.tipoaprovacao_nome FROM plano " + "INNER JOIN utilizador ON utilizador.user_id = plano.plano_utilizador_id " + "INNER JOIN item_aprovacao ON item_aprovacao.aprovacao_tipo_id = plano.plano_treino_tipo_aprovacao_id " + "ORDER BY RANDOM() " + "LIMIT 20 ";
        let result = await pool.query(sql);
        let planofound = result.rows;
        console.log("[planosModel.getPlanoById] plano = " + JSON.stringify(planofound));
        return { status: 200, data: planofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAll = async function(){

    try {
        let sql = "SELECT plano.plano_treino_id, plano.plano_titulo, plano.plano_treino_desc, utilizador.user_name, item_aprovacao.tipoaprovacao_nome FROM plano " + "INNER JOIN utilizador ON utilizador.user_id = plano.plano_utilizador_id " + "INNER JOIN item_aprovacao ON item_aprovacao.aprovacao_tipo_id = plano.plano_treino_tipo_aprovacao_id" ;
        let result = await pool.query(sql);
        let planofound = result.rows;
        console.log("[planosModel.getPlanoById] plano = " + JSON.stringify(planofound));
        return { status: 200, data: planofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.getPlanosUser = async function(uti_id) {
    try {
        let sql = "SELECT plano.plano_titulo, plano.plano_treino_desc, utilizador.user_name , item_aprovacao.tipoaprovacao_nome FROM plano " + "INNER JOIN utilizador ON utilizador.user_id = plano.plano_utilizador_id " + "INNER JOIN item_aprovacao ON item_aprovacao.aprovacao_tipo_id = plano.plano_treino_tipo_aprovacao_id " + "WHERE plano.plano_utilizador_id = " + uti_id;
        let result = await pool.query(sql);
        let planofound = result.rows;
        console.log("[exercicioModel.getExercisesUser] planos = " + JSON.stringify(planofound));
        return { status: 200, data: planofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.savePlano = async function(plano) {
    console.log("[recipesModel.saveRecipe] exercise = " + JSON.stringify(plano));
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
            "INTO plano " +
            "(plano_titulo, plano_treino_desc, plano_utilizador_id, plano_treino_aprovacao_pt, plano_treino_tipo_aprovacao_id) " +
            "VALUES ($1, $2, $3, $4, $5) " +
            "RETURNING plano_treino_id";

            console.log(plano_titulo +"|"+ plano_treino_desc + "|" +  plano_utilizador_id + "|" + plano_treino_aprovacao_pt + "|" + plano_treino_tipo_aprovacao_id);
        let result = await pool.query(sql, [plano_titulo, plano_treino_desc, plano_utilizador_id, plano_treino_aprovacao_pt, plano_treino_tipo_aprovacao_id]);
        let planoooo = result.rows[0].plano_treino_id;
        return { status: 200, data: planoooo };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}

module.exports.getPlanosExercises = async function(plan_id) {
    try {
        let sql = "SELECT exercicio_plano.exercicio_plano_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_num_series, exercicio.exercicio_num_repeticoes, exercicio_dificuldade.exercicio_dificuldade, exercicio_tipo.exercicio_tipo_titulo, utilizador.user_name FROM exercicio_plano " + "INNER JOIN exercicio ON exercicio.exercicio_id = exercicio_plano.exercise_id " + "INNER JOIN exercicio_dificuldade ON exercicio_dificuldade.exercicio_dificuldade_id = exercicio.exercicio_dificuldade_id " + "INNER JOIN exercicio_tipo ON exercicio_tipo.exercicio_tipo_id = exercicio.exercicio_tipo_id "+ "INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id " + "WHERE exercicio_plano.p_treino_id = " + plan_id;
        let result = await pool.query(sql);
        let planofound = result.rows;
        console.log("[exercicioModel.getExercisesUser] planos = " + JSON.stringify(planofound));
        return { status: 200, data: planofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


//PRIMEIRA MARCACAO DE FAVORITO

module.exports.savePlanoFavorite = async function(plano) {

    console.log("[recipesModel.saveRecipe] favoriteplano = " + JSON.stringify(plano));
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
            "INTO marcacao_favorito_plano " +
            "(utilizador_id, plano_treino_id, is_plano_favorito) " +
            "VALUES ($1, $2, $3) " +
            "RETURNING favorito_plano_id";

            console.log(utilizador_id +"|"+ plano_treino_id + "|" +  is_plano_favorito);
        let result = await pool.query(sql, [utilizador_id, plano_treino_id, is_plano_favorito]);
        let planoooo = result.rows[0].favorito_plano_id;
        return { status: 200, data: planoooo };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}


module.exports.UpdateMarcacao = async function(plan_id, user_id) {
    try {
        let sql = "UPDATE marcacao_favorito_plano " + "SET is_plano_favorito = '1' " + "WHERE utilizador_id =  " + user_id + "AND plano_treino_id = " + plan_id;
        let result = await pool.query(sql);
        let planofound = result.rows;
        console.log("[exercicioModel.getExercisesUser] planos = " + JSON.stringify(planofound));
        return { status: 200, data: planofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.UpdateDesmarcacao = async function(plan_id, user_id) {
    try {
        let sql = "UPDATE marcacao_favorito_plano " + "SET is_plano_favorito = '0' " + "WHERE utilizador_id =  " + user_id + "AND plano_treino_id = " + plan_id;
        let result = await pool.query(sql);
        let planofound = result.rows;
        console.log("[exercicioModel.getExercisesUser] planos = " + JSON.stringify(planofound));
        return { status: 200, data: planofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.DeletePlano = async function(plano_id){

    try{
        let sql = "DELETE FROM plano " + "WHERE plano_treino_id = " + plano_id;
        let result = await pool.query(sql);
        let planofound = result.rows;
        console.log("[artigoModel.getArtigoCategory] plano = " + JSON.stringify(planofound));
        return { status: 200, data: planofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}



