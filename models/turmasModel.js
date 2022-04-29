var pool = require("./database");

//MÉTODO POST 

module.exports.saveClass = async function(turma) {
    console.log("[turmasModel.saveClass] turma = " + JSON.stringify(turma));
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
        let classss = result.rows[0].turma_id;
        return { status: 200, data: classss };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}
