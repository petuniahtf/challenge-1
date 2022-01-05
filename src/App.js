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

  return (
    <div className="App">
      <Home/>
      <Formuleaire onPersonnageChange = {handlePersonnageChange} />
      <Image  url={nutty} text='clic ici '/>
      <Image  url={flyppi} text='appuyer ici' />
      <Surprise personnage= {selectedPersonage} />
    </div>
  )
}

export default App;
