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


