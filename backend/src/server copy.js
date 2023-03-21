// var fs = require('fs');
// var http = require('http')
// var characters = require('./utils/data.js')

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if (req.url.includes('rickandmorty/')) {
//         let idCharacter = req.url.split('/').pop()
//         let character = characters.find((e)=> e.id === Number(idCharacter) )
//         res.writeHead(200, {'Content-Type':'application/json'});
//         res.end(JSON.stringify(character))
//     }
// }).listen(3001,'localhost')