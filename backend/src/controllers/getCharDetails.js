var axios = require('axios');
const {filterData, URL} = require('./getCharById.js')

//2da Forma usando EXPRESS - REQ.PARAMS
const getCharDetails = (req, res) => {
    const params = req.params;
    axios(`${URL}${params.id}`)
        .then(({ data }) => {
            const char = filterData(data)
            res.status(200).json({...char, status: data.status, origin: data.origin});
        })
        .catch(err =>{res.status(500).json({message: err})})
}

module.exports = {getCharDetails};

//1era Forma sin usar Express
/* const getCharDetails = (res, ID) => {
    axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
    //axios.get(`http://localhost:3001/rickandmorty/${ID}`)
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
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(character));
    })
    .catch((err) => {
        res.writeHead(500, {'Content-Type':'text/plain'}).end(err.message)
    })  
}

module.exports = {getCharDetails} */
