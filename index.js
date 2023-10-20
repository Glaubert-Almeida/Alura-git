const express = require("express");//Importando o Expres
const app = express();//Iniciando o express e passando para a variável app


app.get("/",function(req, res){
    //Devolvendo uma resposta a requisição da rota
    res.send("<h1>Bem vindo a minha aplicação Node.Js!<h1>");//Resposta somente uma vez
});

app.get("/blog/:artigo?",function(req, res){
    //Devolvendo uma resposta a requisição da rota
    

    var artigo = req.params.artigo;

if (artigo) {
    res.send("Seu artigo foi selecionado: "+ artigo.toUpperCase());
}else{
    res.send("<h3>Bem vindo ao meu blog: www.peritoglaubert.com.br<h3>");
}
    
});

// Adicionar ? ao final do parametro para torna-lo opcional

app.get("/canal/youtube",function(req, res){
    //Devolvendo uma resposta a requisição da rota
    var canal = req.query["canal"];
    if (canal) {
        res.send(canal);
    }else{
        res.send("Nenhum canal fornecido");
    }

});

app.get("/ola/:nome/:empresa",function(req, res){
    // res -> São os dados enviados pelo usuário
    var nome = req.params.nome;
    var empresa = req.params.empresa;

    var teste = nome.toUpperCase();
    var testeEmp = empresa.toUpperCase();

    res.send('<h1>Olá, '+teste+' do '+testeEmp+'! <h1>');
});

// Executando o servidor
app.listen(4000, function(erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciando com sucesso");
    }
})

