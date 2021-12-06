import React from 'react';

import Nutty from '../image/Nutty.webp'
import './image.css'

const Image = () => {
  const [etat, setEtat] = React.useState(true)
  const button = <button className= "bouton" onClick ={handleclic} >Appuye pour afficher</button>
  const image = <img src={Nutty} width= "150" hidden ={etat} alt="hahaha" />

  function handleclic(){
      setEtat(etat => !etat)
  }

  return <div className="container">
    {button}
    {image}
  </div> 
}

export default Image;