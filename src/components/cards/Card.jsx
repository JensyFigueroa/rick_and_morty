import styled from 'styled-components';

const DivCard = styled.div`
   position: relative;
   width: 15em;
   border-radius: 1em;
   box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
   overflow: hidden;
   margin-top: 6em;
   margin-right: auto;
   margin-left: auto;
   text-align: center;
   transition: all 0.25s;
   background-color: rgba(181, 231, 162);

   &:hover{
      transform: translateY(-3px);
      box-shadow: 7px 7px 7px #33ff5c;
  }
   
 }
`
const Button = styled.button`
   width:20px;
   height: 20px;
   background-color: red;
   color: white;
   border-radius: 5px;
   border: 0px;
   margin-top: 10px ;
   margin-bottom: 10px;
   margin-left: 85%;


   &:hover {
      border: 1px solid rgba(0, 0, 0, 0.5);
      background-color: rgba(255, 131, 131, 0.8);
   }
`

const Name = styled.h2`
   position: absolute;
   bottom: 15%;
   width: 8em;
   background-color: rgb(0, 0, 0, 0.6);
   color: white;
   font-size: 20px;
   
`

const Clases = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
`

const H2 = styled.h2`
   font-weight: normal;
   font-size: 20px;
`

export default function Card(props) {
   return (
      <DivCard>
         <Button onClick={props.onClose}>X</Button>
         <Name>{props.name}</Name>
         <img src={props.image} alt="" />
         <Clases>
            <H2>{props.gender}</H2>
            <H2>{props.species}</H2>
         </Clases>
      </DivCard>
   );
}
