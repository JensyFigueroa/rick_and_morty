import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { addFav, removeFav } from '../../redux/actions/index.js'
import { connect } from 'react-redux';

const DivCard = styled.div`
   position: relative;
   width: 15em;
   border-radius: 1em;
   box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
   overflow: hidden;
   margin-top: 5em;
   margin-right: auto;
   margin-left: auto;
   text-align: center;
   transition: all 0.25s;
   // background-color: rgba(181, 231, 162);
   background-color: rgb(147, 0, 192, .6);
   //rgb(101, 219, 93, .9);

   &:hover{
      transform: translateY(-3px);
      box-shadow: 7px 7px 7px #33ff5c;
  }
   
 }
`
const Buttons = styled.div`
   display: flex;
   justify-content: space-around;
   
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
   margin-left: 65%;

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
   color: #33ff5c;
   //rgb(147, 0, 192);
   font-weight: 600;
   font-style: italic;
`

export function Card(props) {
   const dispatch = useDispatch()

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = (character) => {
      if (isFav) {
         setIsFav(false);
         // props.removeFav(id)
         dispatch(removeFav(character.id))
      } else {
         setIsFav(true);
         // props.addFav(id)
         dispatch(addFav(character))
      }
   }

   const myFavorites = useSelector((state) => (state.myFavorites));

   useEffect(() => {
      myFavorites.forEach((character) => {
         console.log(isFav)
         if (character.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <DivCard>
         <Buttons>
            {isFav ? (
               <button style={{backgroundColor: 'transparent', border:'0px'}} onClick={() => handleFavorite(props)}>❤️</button>
            ) : (
               <button style={{backgroundColor: 'transparent', border:'0px'}}  onClick={() => handleFavorite(props)}>🤍</button>
            )
            }
            <Button onClick={props.onClose}>X</Button>
         </Buttons>

         <Link to={`/detail/${props.id}`} style={{textDecoration:'none'}}>
            <Name>{props.name}</Name>
            <img src={props.image} alt="" />
            <Clases>
               <H2>{props.gender}</H2>
               <H2>{props.species}</H2>
            </Clases>
         </Link>
      </DivCard>
   );
}

// export function mapStateToProps(state){
//    return {
//        myFavorites: state.myFavorites
//    }
// }

export function mapDispatchToProps(dispatch) {
   return {
      addFav: function (personaje) {
         dispatch(addFav(personaje))
      },
      removeFav: function (id) {
         dispatch(removeFav(id))
      }
   }
}

export default connect(null, mapDispatchToProps)(Card)
