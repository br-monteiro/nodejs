var app = require('./app/config/express')();

// routas de produtos
require('./app/routes/produtos')(app);

app.listen(3000, function(){
    console.log("Servidor rodando..");
});