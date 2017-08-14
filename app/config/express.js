// módulo do Express
var app = require('express')();

module.exports = function() {

    // definindo a engine de View
    app.set('view engine', 'ejs');
    // diretório padrão das views
    app.set('views', './app/views');

    // obejto Express configurado
    return app;
};
