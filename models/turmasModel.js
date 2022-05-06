var pool = require("./database")

//MÉTODO POST DA TURMA

module.exports.saveTurma = async function(turma) {
    console.log("[turmasModel.saveTurma] turma = " + JSON.stringify(turma));
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
            "INTO turma " +
            "(turma_titulo, turma_desc, criador_id) " +
            "VALUES ($1, $2, $3) " +
            "RETURNING turma_id";

            console.log(turma.turma_titulo + "|" + turma.turma_desc + "|" + turma.criador_id);
        let result = await pool.query(sql, [turma.turma_titulo, turma.turma_desc, turma.criador_id]);
        let turmaaaa = result.rows[0].turma_id;
        return { status: 200, data: turmaaaa };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}

module.exports.getTurmasUser = async function(uti_id) {
    try {
        let sql = "SELECT turma.turma_id, turma.turma_titulo, turma.turma_desc, utilizador_turma.aluno_id, utilizador.user_name, utilizador.user_id FROM turma  " + "INNER JOIN utilizador_turma ON utilizador_turma.turma_identifier = turma.turma_id   " + "INNER JOIN utilizador ON utilizador.user_id = utilizador_turma.utilizador_id " + "WHERE utilizador.user_id =  " + uti_id;
        let result = await pool.query(sql);
        let turmasfound = result.rows;
        console.log("[turmasModel.getTurmasUser] turmas = " + JSON.stringify(turmasfound));
        return { status: 200, data: turmasfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getParticipantTurma = async function(turma_id){

     try{
         let sql = "SELECT turma.turma_id, turma.turma_titulo, turma.turma_desc, utilizador_turma.aluno_id, utilizador_turma.utilizador_id, utilizador.user_name FROM turma " + "INNER JOIN utilizador_turma ON utilizador_turma.turma_identifier = turma.turma_id " + "INNER JOIN utilizador ON utilizador.user_id = utilizador_turma.turma_identifier " + "WHERE turma.turma_id = " + turma_id;
         let result = await pool.query(sql);
         let participantesfound = result.rows;
         console.log("[turmasModel.getParticipantTurma] participantes = " + JSON.stringify(participantesfound));
         return {status: 200, data: participantesfound };

     } catch(err){
         console.log(err);
         return { status: 500, data: err };
     }

}

module.exports.saveParticipantTurma = async function(participante) {
    console.log("[turmasModel.saveParticipantTurma] turma = " + JSON.stringify(participante));
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
            "INTO utilizador_turma " +
            "(utilizador_id, turma_identifier) " +
            "VALUES ($1, $2) " +
            "RETURNING aluno_id";

            console.log(participante.utilizador_id + "|" + participante.turma_identifier);
        let result = await pool.query(sql, [participante.utilizador_id, participante.turma_identifier]);
        let participanteeee = result.rows[0].aluno_id;
        return { status: 200, data: participanteeee };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}





