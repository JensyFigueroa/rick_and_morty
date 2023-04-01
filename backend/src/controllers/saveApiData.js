const {URL, filterData} =  require('./getCharById')
const axios = require('axios')

const getApiData = async () =>{
    try {
        const { data } = await axios.get(`${URL}$`)
        const char = filterData(data)
        res.status(200).json(char);
    } catch (err) {
        res.status(500).json({message: err})
    }

}