import React from 'react';
import './image.css'

const Image = ({url ,text}) => {
  console.log(url)
  const [etat, setEtat] = React.useState(true)
  const button = <button className= "bouton" onClick ={handleclic} >{text}</button>
  const image = <img src={url} width= "150" hidden ={etat} alt="hahaha" />



  function handleclic(){
      setEtat(etat => !etat)
  }

  return <div className="container">
    {button}
    {image}
  </div> 
}

export default Image;