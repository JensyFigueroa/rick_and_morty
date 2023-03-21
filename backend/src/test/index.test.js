const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe('Test de Rutas (get) onsearch y detail',()=>{
    describe('Get /rickandmorty/onsearch/{id}',()=>{
        it('Responde con status 200', async()=>{
           await agent.get('/rickandmorty/onsearch/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', async()=>{
            const {body} = await agent.get('/rickandmorty/onsearch/1');
            const keys = Object.keys(body)
            expect(keys).toContain('id')
            expect(keys).toContain('name')
            expect(keys).toContain('species')
            expect(keys).toContain('gender')
            expect(keys).toContain('image')
          })
        it('Responde con status 500 si hay un error', async()=>{
            await agent.get('/rickandmorty/onsearch/1000').expect(500);
         })
    })

    describe('Get /rickandmorty/detail/{id}',()=>{
        it('Responde con status 200', async()=>{
           await agent.get('/rickandmorty/detail/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "image","status" y "origin"', async()=>{
            const {body} = await agent.get('/rickandmorty/detail/1');
            const keys = Object.keys(body)
            expect(keys).toContain('id')
            expect(keys).toContain('name')
            expect(keys).toContain('species')
            expect(keys).toContain('gender')
            expect(keys).toContain('image')
            expect(keys).toContain('status')
            expect(keys).toContain('origin')
          })
        it('Responde con status 500 si hay un error', async()=>{
            await agent.get('/rickandmorty/detail/1000').expect(500);
         })
    })
})

describe('TEST de Ruta /Favorites', ()=>{
    it('Responde con status 200 y un array de favorites', async()=>{
        const {body} = await agent.get('/rickandmorty/favorites')
        expect(200)
        expect(body).toBeDefined();
        expect(body).toBeInstanceOf(Array);
        expect(body).toEqual([]);
        expect(body).toMatchObject([])
    })

    it('Responde un status 200 y con un objeto con los datos del personaje', async ()=>{
        const char = {
                id: 1,
                name: "Rick Sanchez",
                species: "Human",
                gender: "Male",
                image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              }
        
        const data = await agent.post('/rickandmorty/favorites').send(char)
        expect(200)
        expect(data.body).toMatchObject(char)
    })

    it('Responde con un status 200 y un objeto con una propiedad success en TRUE', async ()=>{
        const data = await agent.delete('/rickandmorty/favorites/1')
        expect(200)
        expect(data.body.success).toBe(true)
    })
})