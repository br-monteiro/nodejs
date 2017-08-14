var produtosController = require('../controllers/produtos_controller')();

module.exports = function(app) {

    app.get('/produtos', function(req, res) {
        produtosController.listaProdutos(req, res);
    });

    app.get('/produto/:id', function(req, res) {
        produtosController.returnProdutoById(req, res);
    });
};