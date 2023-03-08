var axios = require('axios');

const getCharDetails = (res, ID) => {
    // axios.get('https://rickandmortyapi.com/api/character/1')
    axios.get(`http://localhost:3001/rickandmorty/${ID}`)
    .then(({data}) => {
        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            imagen: data.imagen,
            status: data.status,
            origin: data.origin
        }
        // console.log(character)
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(character));
    })
    .catch((err) => {
        res.writeHead(500, {'Content-Type':'text/plain'}).end(err.message)
    })  
}

module.exports = {getCharDetails}