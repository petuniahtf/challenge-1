import React, {Component} from 'react';
import Nutty from '../image/Nutty.webp'
import './image.css'

const image = <img src={Nutty} width= "100" hidden ={true} />
const button = <button className= "bouton" onClick ={handleclic} >Appuye pour afficher</button>

function handleclic(){
  let etat =(image.hidden == true) ? 'false' : 'true'
  return etat
 }

function Image(){
    return <div className="container">
      {button}
      {image}  
    </div> 
}

export default Image;