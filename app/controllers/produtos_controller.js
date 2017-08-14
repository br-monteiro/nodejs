var database = require('../factory/database_factory');

module.exports = function() {

    var _controller = {};
    var _entity = 'produtos';

    // action de listagem dos produtos!
    _controller.listaProdutos = function(req, res) {

        // abre a conexão com o bando
        var db = database();

        // recebe a conexão com o bando de dados
        db.all(`SELECT * FROM ${_entity}`, function (err, rows) {

            // verifica se houve erro
            if (err) {
                console.log(err);
                rows = [];
            }

            // renderiza a página de lista e passa o resultado como parâmetro
            res.send(rows);//res.render("produtos/lista", {result: rows});
            // fecha a conexão com o banco. =)
            db.close();
        });
    };

    _controller.returnProdutoById = function(req, res) {
        var db = database();

        db.get(`SELECT * FROM ${_entity} WHERE id = ?`, [req.params.id], function (err, row) {

            if (err) {
                console.log(err);
                rows = [];
            }

            res.send(row);
            db.close();
        });
    };

    return _controller;
};