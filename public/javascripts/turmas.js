//POSSUI ERRO

async function adicionarturma() {
    var iddocriador = 21;
   
    let data = {
        turma_titulo: document.getElementById("ftituloturma").value,
        turma_desc: document.getElementById("ftitulodescricao").value,
        criador_id: iddocriador
    }
    console.log("[ptdashboard] data = " + JSON.stringify(data));
    try {
        let newTurma = await $.ajax({
            url: "/turmas/insertnewturma",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });
        console.log("Inserted new class with id: " + newTurma.turma_id)
    } catch (err) {
        console.log(err);
        if (err.responseJSON) {
          console.log(err.responseJSON.msg);
        } else {
            console.log("Was not able to adde class");
        }
    }
}
