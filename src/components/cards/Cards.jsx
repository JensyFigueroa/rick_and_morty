import Card from './Card';
import styled from 'styled-components';

const BoxCards = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

export default function Cards(props) {
   const { characters } = props;
   let i = 0
   return <BoxCards>
      {characters.map((e) =>
         <Card 
            name={e.name} 
            species={e.species} 
            gender={e.gender}
            image={e.image} 
            onClose={()=> alert('Emulamos que se cierra la card')} 
            key={i++}/>
      )}
   </BoxCards>;
}
