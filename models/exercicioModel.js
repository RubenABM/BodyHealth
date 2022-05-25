var pool = require("./database");

module.exports.getExerciseById = async function(exercise_id) {
    try {
        let sql = "SELECT exercicio.exercicio_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_num_series, exercicio.exercicio_num_repeticoes, utilizador.user_id, utilizador.user_name FROM exercicio " + "INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id  " + "WHERE exercicio_id =  " + exercise_id;
        let result = await pool.query(sql);
        let exercisefound = result.rows;
        console.log("[exercicioModel.getExerciseById] exercicio = " + JSON.stringify(exercisefound));
        return { status: 200, data: exercisefound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getExerciseByCategory = async function(cat_id) {
    try {
        let sql = "SELECT exercicio.exercicio_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_num_series, exercicio.exercicio_num_repeticoes, exercicio_dificuldade.exercicio_dificuldade, exercicio_tipo.exercicio_tipo_titulo, utilizador.user_name, exercicio.aprovacao_pt FROM exercicio " + "INNER JOIN exercicio_dificuldade ON exercicio_dificuldade.exercicio_dificuldade_id = exercicio.exercicio_dificuldade_id " + "INNER JOIN exercicio_tipo ON exercicio_tipo.exercicio_tipo_id = exercicio.exercicio_tipo_id " + "INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id " + "WHERE exercicio.exercicio_dificuldade_id = " + cat_id + " LIMIT 6";
        let result = await pool.query(sql);
        let exerciciosfound = result.rows;
        console.log("[recipesModel.getAllRecipes] recipes = " + JSON.stringify(exerciciosfound));
        return { status: 200, data: exerciciosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getExerciseByCategoryy = async function(cat_id) {
    try {
        let sql = "SELECT exercicio.exercicio_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_num_series, exercicio.exercicio_num_repeticoes, exercicio_dificuldade.exercicio_dificuldade, exercicio_tipo.exercicio_tipo_titulo, utilizador.user_name, exercicio.aprovacao_pt FROM exercicio " + "INNER JOIN exercicio_dificuldade ON exercicio_dificuldade.exercicio_dificuldade_id = exercicio.exercicio_dificuldade_id " + "INNER JOIN exercicio_tipo ON exercicio_tipo.exercicio_tipo_id = exercicio.exercicio_tipo_id " + "INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id " + "WHERE exercicio.exercicio_tipo_id = " + cat_id + " LIMIT 6";
        let result = await pool.query(sql);
        let exerciciosfound = result.rows;
        console.log("[recipesModel.getAllRecipes] recipes = " + JSON.stringify(exerciciosfound));
        return { status: 200, data: exerciciosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllExercise = async function() {
    try {
        let sql = "SELECT exercicio.exercicio_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_num_series, exercicio.exercicio_num_repeticoes, exercicio_dificuldade.exercicio_dificuldade, exercicio_tipo.exercicio_tipo_titulo, utilizador.user_name, exercicio.aprovacao_pt FROM exercicio " + "INNER JOIN exercicio_dificuldade ON exercicio_dificuldade.exercicio_dificuldade_id = exercicio.exercicio_dificuldade_id " + "INNER JOIN exercicio_tipo ON exercicio_tipo.exercicio_tipo_id = exercicio.exercicio_tipo_id " + "INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id";
        let result = await pool.query(sql);
        let exerciciosfound = result.rows;
        console.log("[recipesModel.getAllRecipes] recipes = " + JSON.stringify(exerciciosfound));
        return { status: 200, data: exerciciosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.getAllExercise2 = async function() {
    try {
        let sql = "SELECT exercicio.exercicio_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_num_series, exercicio.exercicio_num_repeticoes, exercicio_dificuldade.exercicio_dificuldade, exercicio_tipo.exercicio_tipo_titulo, utilizador.user_name, exercicio.aprovacao_pt FROM exercicio " + "INNER JOIN exercicio_dificuldade ON exercicio_dificuldade.exercicio_dificuldade_id = exercicio.exercicio_dificuldade_id " + "INNER JOIN exercicio_tipo ON exercicio_tipo.exercicio_tipo_id = exercicio.exercicio_tipo_id " + "INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id " + "ORDER BY RANDOM() " + "LIMIT 9"; 
        let result = await pool.query(sql);
        let exerciciosfound = result.rows;
        console.log("[recipesModel.getAllRecipes] recipes = " + JSON.stringify(exerciciosfound));
        return { status: 200, data: exerciciosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getAllExerciseUtilizador = async function(id_utilizador) {
    try {
        let sql = "SELECT exercicio.exercicio_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_num_series, exercicio.exercicio_num_repeticoes, exercicio_dificuldade.exercicio_dificuldade, exercicio_tipo.exercicio_tipo_titulo, utilizador.user_name, exercicio.aprovacao_pt FROM exercicio " + "INNER JOIN exercicio_dificuldade ON exercicio_dificuldade.exercicio_dificuldade_id = exercicio.exercicio_dificuldade_id " + "INNER JOIN exercicio_tipo ON exercicio_tipo.exercicio_tipo_id = exercicio.exercicio_tipo_id " + "INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id " + "WHERE exercicio.exercicio_utilizador_id = " + id_utilizador; 
        let result = await pool.query(sql);
        let exerciciosfound = result.rows;
        console.log("[recipesModel.getAllRecipes] recipes = " + JSON.stringify(exerciciosfound));
        return { status: 200, data: exerciciosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getSomeExercicios = async function() {
    try {
        let sql = "SELECT exercicio.exercicio_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_num_series, exercicio.exercicio_num_repeticoes, exercicio_dificuldade.exercicio_dificuldade, exercicio_tipo.exercicio_tipo_titulo, utilizador.user_name, exercicio.aprovacao_pt FROM exercicio " + "INNER JOIN exercicio_dificuldade ON exercicio_dificuldade.exercicio_dificuldade_id = exercicio.exercicio_dificuldade_id " + "INNER JOIN exercicio_tipo ON exercicio_tipo.exercicio_tipo_id = exercicio.exercicio_tipo_id " + "INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id " + "ORDER BY RANDOM() " + "LIMIT 4 ";
        let result = await pool.query(sql);
        let exerciciosfound = result.rows;
        console.log("[recipesModel.getAllRecipes] recipes = " + JSON.stringify(exerciciosfound));
        return { status: 200, data: exerciciosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getExercisesUser = async function(uti_id) {
    try {
        let sql = "SELECT exercicio.exercicio_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_utilizador_id,exercicio_tipo.exercicio_tipo_titulo, exercicio.exercicio_num_series, exercicio.exercicio_num_repeticoes,exercicio_dificuldade.exercicio_dificuldade, utilizador.user_name FROM exercicio " + "INNER JOIN exercicio_dificuldade ON exercicio_dificuldade.exercicio_dificuldade_id = exercicio.exercicio_dificuldade_id " + "INNER JOIN exercicio_tipo ON exercicio_tipo.exercicio_tipo_id = exercicio.exercicio_tipo_id " + "INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id " + "WHERE exercicio.exercicio_utilizador_id = " + uti_id;
        let result = await pool.query(sql);
        let exercisefound = result.rows;
        console.log("[exercicioModel.getExercisesUser] exercises = " + JSON.stringify(exercisefound));
        return { status: 200, data: exercisefound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}


module.exports.getExercisesUserByCategory = async function(uti_id, cat_id) {
    try {
        let sql = "SELECT exercicio.exercicio_id, exercicio.exercicio_titulo, exercicio.exercicio_desc, exercicio.exercicio_utilizador_id,exercicio_tipo.exercicio_tipo_titulo, exercicio.exercicio_num_series, exercicio.exercicio_num_repeticoes,exercicio_dificuldade.exercicio_dificuldade, utilizador.user_name FROM exercicio " + "INNER JOIN exercicio_dificuldade ON exercicio_dificuldade.exercicio_dificuldade_id = exercicio.exercicio_dificuldade_id " + "INNER JOIN exercicio_tipo ON exercicio_tipo.exercicio_tipo_id = exercicio.exercicio_tipo_id " + "INNER JOIN utilizador ON utilizador.user_id = exercicio.exercicio_utilizador_id " + "WHERE exercicio.exercicio_utilizador_id = "+ uti_id +" AND exercicio.exercicio_tipo_id = " + cat_id;
        let result = await pool.query(sql);
        let exercisesfoundcategory = result.rows;
        console.log("[exercicioModel.getExercisesUserByCategory] exercisesbycategoryofuser = " + JSON.stringify(exercisesfoundcategory));
        return { status: 200, data: exercisesfoundcategory };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

//CRIAR UM EXERCICIO

module.exports.saveExercise = async function(exercise) {
    console.log("[recipesModel.saveRecipe] exercise = " + JSON.stringify(exercise));
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
            "INTO exercicio " +
            "(exercicio_titulo, exercicio_desc, exercicio_num_series, exercicio_num_repeticoes, exercicio_dificuldade_id, exercicio_tipo_id, exercicio_utilizador_id, aprovacao_pt) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7, $8) " +
            "RETURNING exercicio_id";

            console.log(exercise.exercicio_titulo + "|" + exercise.exercicio_desc + "|" + exercise.exercicio_num_series + "|" + exercise.exercicio_num_repeticoes + "|" + exercise.exercicio_dificuldade_id + "|" + exercise. exercicio_tipo_id + "|" + exercise.exercicio_utilizador_id + "|" + exercise.aprovacao_pt);
        let result = await pool.query(sql, [exercise.exercicio_titulo, exercise.exercicio_desc, exercise.exercicio_num_series, exercise.exercicio_num_repeticoes, exercise.exercicio_dificuldade_id, exercise. exercicio_tipo_id, exercise.exercicio_utilizador_id, exercise.aprovacao_pt]);
        let exerciciooo = result.rows[0].exercicio_id;
        return { status: 200, data: exerciciooo };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}

module.exports.DeleteExercise = async function(exercicio_id){

    try{
        let sql = "DELETE FROM exercicio " + "WHERE exercicio_id = " + exercicio_id;
        let result = await pool.query(sql);
        let exerciciofound = result.rows;
        console.log("[artigoModel.getArtigoCategory] exercise = " + JSON.stringify(exerciciofound));
        return { status: 200, data: exerciciofound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}


module.exports.saveExerciseFavorito = async function(exercicio) {
    console.log("[ementasModel.saveEmenta] ementa = " + JSON.stringify(exercicio));
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
            "INTO marcacao_favorito_exercicio " +
            "(utilizador_id, exercicio_id, is_exercicio_favorito) " +
            "VALUES ($1, $2, '1') " +
            "RETURNING favorito_exercicio_id";

            console.log(exercicio.utilizador_id + "|" + exercicio.exercicio_id + "|" + exercicio.is_exercicio_favorito);
        let result = await pool.query(sql, [exercicio.utilizador_id, exercicio.exercicio_id, exercicio.is_exercicio_favorito]);
        let exercicioooo = result.rows[0].favorito_exercicio_id;
        return { status: 200, data: exercicioooo };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}

module.exports.UpdateFavorito = async function(exercicio_id, utilizador_id){

    try {
        let sql = "UPDATE marcacao_favorito_exercicio " + "SET is_exercicio_favorito = '0' " + "WHERE marcacao_favorito_exercicio.utilizador_id = " + utilizador_id + " AND marcacao_favorito_exercicio.exercicio_id = " + exercicio_id;
        let result = await pool.query(sql);
        let exerciciosfound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(exerciciosfound));
        return { status: 200, data: exerciciosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}

module.exports.UpdateFavoritoRemarcar = async function(exercicio_id, utilizador_id){

    try {
        let sql = "UPDATE marcacao_favorito_exercicio " + "SET is_exercicio_favorito = '1' " + "WHERE marcacao_favorito_exercicio.utilizador_id = " + utilizador_id + " AND marcacao_favorito_exercicio.exercicio_id = " + exercicio_id;
        let result = await pool.query(sql);
        let exercisefound = result.rows;
        console.log("[ementasModel.getEmentasUser] recipes = " + JSON.stringify(exercisefound));
        return { status: 200, data: exercisefound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }

}
