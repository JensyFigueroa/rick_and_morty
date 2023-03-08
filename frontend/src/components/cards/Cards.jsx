import {Card} from '../card/Card';
import styled from 'styled-components';

const BoxCards = styled.div`
margin-top:60px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`

const PCards = styled.p`
margin-top: 400px;
color: #33ff5c;
font-size: 35px;
` 

export default function Cards(props) {
   const { characters } = props;
   // console.log(characters)
   let i = 0
   return <BoxCards>
      {characters.length === 0 ? (
         <PCards>Ingrese un ID o haga click en Random para mostrar los personajes</PCards>
      ) : (
         characters.map((e) =>
         <Card 
            id={e.id}
            name={e.name} 
            species={e.species} 
            gender={e.gender}
            image={e.image} 
            // onClose={()=> alert('Emulamos que se cierra la card')} 
            onClose={()=> props.onClose(e.id)}
            key={i++}/>
            
      ))}
   </BoxCards>;
}
