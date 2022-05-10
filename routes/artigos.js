var express = require('express');
var router = express.Router();
var artigoModel = require('../models/artigoModel');

/* POST a new article */
router.post('/insertnewartigo', async function(req, res, next) {
    let newArtigo = req.body;
    console.log("[artigosRoutes] Saving artigo " + JSON.stringify(newArtigo));
    let result = await artigoModel.saveArtigo(newArtigo);
    res.sendStatus(result.status).send(result.data);
});

/*FILTRAR ARTIGOS POR TIPO*/
router.get('/filterartigos/:artigo_categoria_id', async function(req, res, next) {

    let categoria_id = req.params.artigo_categoria_id;
    console.log("[artigosRoutes] Retrieving artigos from class with category id: " + categoria_id);
    let result = await artigoModel.getArtigoCategory(categoria_id);
    res.status(result.status).send(result.data);

  });

/*OBTER OS DETALHES DE UM ARTIGO*/

router.get('/detalheartigo/:idartigo', async function(req, res, next) {

  let artigo_id = req.params.idartigo;
  console.log("[artigosRoutes] Getting artigo with id: " + artigo_id);
  let result = await artigoModel.getArtigoDetails(artigo_id);
  res.status(result.status).send(result.data);


});

/*APAGAR UM ARTIGO*/
router.delete('/deleteartigo/:idartigo', async function(req, res, next){

  let artigo_id = req.params.idartigo;
  console.log("[artigosRoutes] Deleting artigo with id: " + artigo_id);
  let result = await artigoModel.DeleteArtigo(artigo_id);
  res.status(result.status).send(result.data);

});



module.exports = router;