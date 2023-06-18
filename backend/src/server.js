// Servidor con express
const express = require('express');
//const server = express();
const app = require('./app')
const PORT = 3001;
// const router = require('./routes/index.js')
// const cors = require('cors')

// const corsOption = {
//     origin: '*',
//     credentials: true, //Access-Control-Allow-Origin: true
//     optionSuccessStatus: 200
// };
// server.use(cors(corsOption))

// server.use(express.json());
// server.use('/', router);

// server.listen(PORT,()=>console.log('listening Port: '+ PORT))

/* Sequalezer sincronizacion de las rutas */
const {conn} = require('./DB_conection.js')

conn.sync({force: false}).then(()=>{
    app.listen(PORT,()=>console.log('listening Port: '+ PORT))
})


// app.listen(PORT,()=>console.log('listening Port: '+ PORT))



// Servidor con NODE puro.

/* var fs = require('fs');
var http = require('http')
// var characters = require('./utils/data.js')
var {getCharById} = require('./controllers/getCharById.js')
var {getCharDetails} = require('./controllers/getCharDetails.js')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    //ESTO ES DE OTRA HOMEWORK
    // if (req.url.includes('rickandmorty/')) {
    //     let idCharacter = req.url.split('/').pop()
    //     let character = characters.find((e)=> e.id === Number(idCharacter) )
    //     res.writeHead(200, {'Content-Type':'application/json'});
    //     res.end(JSON.stringify(character))
    // }

    if (req.url.includes('onSearch/')) {
        console.log(req.url.includes('onSearch/'));
        let idCharacter = req.url.split('/').pop()
        getCharById(res, idCharacter);  
    }

    if (req.url.includes('detail/')) {
        let idCharacter = req.url.split('/').pop()
        getCharDetails(res, idCharacter);
        
    }

}).listen(3001,'localhost') */