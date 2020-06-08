const express = require( "express")
const server = express()

//pegar o banco de dados

const db = require("./database/db.js")

//configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body na nossa aplicacao
server.use(express.urlencoded({ extended: true }))


// utilizando o template engine
const nunjunks = require("nunjucks")

nunjunks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicacao
//pagina inicial
//req = requisicao
//res = resposta

server.get("/", (req, res) => {
   return res.render("index.html", { title:"Seu marketplace de coleta de residuo" })
})

server.get("/create-point", (req, res) => {


    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    //req.body: O corpo do nosso formulario
    //inserir dados no banco de dados
    //inserir dados na tabela
    const query = `
        INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err){
        if(err) {
            console.log(err)
            return res.send("Erro no Cadastro")
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)  

   
})

server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == ""){
        //pesquisa vazia
        return res.render("search-results.html", { total: 0 }) 
    }



    //pegar os dados do banco de dados 

    db.all(`SELECT * FROM places WHERE city LIKE  '%${ search }%'`, function(err, rows){
       if(err) {
           return console.log(err)
     }

     const total = rows.length

        //mostrar a pagina html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total })
    })



    
})

//ligar servidor
server.listen(3000)
