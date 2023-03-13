// NODE PURO
/* var axios = require('axios');

const getCharById = (res, ID) => {
    console.log(ID)
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

module.exports = { getCharById } */

// EXPRESS REQ.PARAMS
var axios = require('axios')

const URL = 'https://rickandmortyapi.com/api/character/'

function filterData (data){
    // console.log(data)
    return {
        id: data.id,
        name: data.name,
        species: data.species,
        image: data.image,
        gender: data.gender
    }
}

const getCharById = (req, res) => {
    const params = req.params;
    console.log('Obtenemos el ID: ', params.id)
    axios.get(`${URL}${params.id}`)
        .then(({ data }) => {
            const char = filterData(data)
            res.status(200).json(char);
        })
        .catch((err) =>{
            res.status(500).json({message: err})
        })
}

module.exports = {getCharById, filterData, URL};

