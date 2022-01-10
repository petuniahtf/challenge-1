import './App.css';
import React from 'react';
import Home from './Compo/home.js'
import Formuleaire from './Compo/formulaire';
import Image from './Compo/image';
import Surprise from './Compo/surprise'


function App(){
  
  const nutty = "/Nutty.webp"
  const flyppi = "/Flippy.webp"
  const handlePersonnageChange = (personnage) =>{
    console.log(personnage)
    setSelectedPersonage(personnage)
  }
  const [selectedPersonage, setSelectedPersonage]= React.useState('')

  const handleSurnameChange = (surname) => {
    console.log(surname)
    setSurname(surname)
  }
  const [surname, setSurname] = React.useState('')

  return (
    <div className="App">
      <Home/>
      <Formuleaire onPersonnageChange = {handlePersonnageChange} onSurnameChange ={handleSurnameChange}/>
      <Image  url={nutty} text={surname}/>
      <Image  url={flyppi} text={surname}/>
      <Surprise personnage= {selectedPersonage} />
    </div>
  )
}

export default App;
