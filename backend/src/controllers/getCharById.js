var axios = require('axios');

const getCharById = (res, ID) => {
    axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
    // axios.get(`http://localhost:3001/rickandmorty/${ID}`)
    .then(({data}) => {
        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }
        // console.log(character)
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(character));
    })
    .catch((err) => {
        res.writeHead(500, {'Content-Type':'text/plain'}).end(err.message)
    })  
}

module.exports = { getCharById }