var pool = require("./database");

module.exports.getUsers = async function() {
    try {
        let sql = "select * from utilizador";
        let result = await pool.query(sql);
        let users = result.rows;
        console.log("[usersModel.getUsers] users = " + JSON.stringify(users));
        return { status: 200, data: users };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.getUser = async function(id){

    console.log("[usersModel.getUser] id = " + JSON.stringify(id));

    try{

        let sql =
            "SELECT * " +
            "FROM utilizador u " +
            "WHERE u.user_id = $1;";

        let result = await pool.query(sql, [id]);

        let users = result.rows;

        if (users.length > 0) {
            console.log("[usersModel.getUser] user = " + JSON.stringify(users[0]));
            return { status: 200, data: users[0] };
        } else {
            return { status: 404, data: { msg: "User not found." } };
        }

    } catch (err){

      console.log(err);
      return {status: 500, data: err};

    }

}



//MÉTODO POST 

module.exports.saveUser = async function(user) {
    console.log("[usersModel.saveUser] user = " + JSON.stringify(user));
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
            "INTO utilizador " +
            "(user_name, user_password, user_morada, user_email, user_points, user_admin, user_pt, user_nutri) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7, $8) " +
            "RETURNING user_id";

            console.log(user.user_name + "|" + user.user_password + "|" + user.user_morada + "|" + user.user_email + "|" + user.user_points + "|" + user.user_admin + "|" + user.user_pt + "|" + user.user_nutri);
        let result = await pool.query(sql, [user.user_name, user.user_password, user.user_morada, user.user_email, user.user_points, user.user_admin, user.user_pt, user.user_nutri]);
        let utilizador = result.rows[0].user_id;
        return { status: 200, data: utilizador };
    } catch (err) {
        console.log(err);
        if (err.errno == 23503) // FK error
            return { status: 400, data: { msg: "Type not found" } };
        else
            return { status: 500, data: err };
    }
}

//OBTER DADOS FÍSICOS DE UM UTILIZADOR

module.exports.getUserDados = async function(uti_id) {
    try {
        let sql = "SELECT * FROM dados_utilizador " + "WHERE user.utilizador_id = " + uti_id;
        let result = await pool.query(sql);
        let dadosfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(dadosfound));
        return { status: 200, data: dadosfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}

module.exports.DeleteUser = async function(uti_id) {
    try {
        let sql = "DELETE FROM utilizador " + "WHERE utilizador.user_id = " + uti_id;
        let result = await pool.query(sql);
        let userfound = result.rows;
        console.log("[usersModel.getUserDados] dados_utilizador = " + JSON.stringify(userfound));
        return { status: 200, data: userfound };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}
