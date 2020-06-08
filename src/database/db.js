//importa a dependencia da sqlite3

const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operacoes no banco de dados 

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o ojeto de banco de dados, para nossas operacoes

/* //db.serialize(() => {
    //criar uma tabela com comandos sql
    //db.run(`
       // CREATE TABLE IF NOT EXISTS places (
           // id INTEGER PRIMARY KEY AUTOINCREMENT,
           // image TEXT,
           //name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    //`)

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
        "https://images.unsplash.com/photo-1567093321629-c23611f44d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardim America",
        "Numero 260",
        "Santa Catarina",
        "Rio do Sul",
        "Residuos Eletronicos, Lampadas"
    ]

    function afterInsertData(err){
        if(err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    //db.run(query, values, afterInsertData)   
  
    //Consultar os dados da tabela
    
     //db.all(`SELECT * FROM places`, function(err, rows){
       // if(err) {
         //   return console.log(err)
     //}

       // console.log("Aqui estao seus Registros")
        //console.log(rows)
    //})
    
    //Deletar um dado da tabela

    //db.run(`DELETE FROM places WHERE ID = ?`, [1], function(err) {
      //  if(err) {
        //    return console.log(err)
        //}
//
  //       console.log("Registro deletado com sucesso")
    //}) 
}) */    
    



    
