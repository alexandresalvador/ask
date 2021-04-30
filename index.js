const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/perguntas', function(req, res) {
    res.render('perguntas');
});

app.listen(5100, (erro) => {
    if(erro) {
        console.log(erro, 'Erro, servidor fora do ar!');
    } else {
        console.log('Servidor rodando aqui: http://localhost:5100');
    }
});
