import './App.css';
import Home from './Compo/header.js'
import Formuleaire from './Compo/formulaire';
import Image from './Compo/image';
import Surprise from './Compo/surprise'


function App() {
  const nutty = "/Nutty.webp"
  const flyppi = "/Flippy.webp"
  return (
    <div className="App">
      
      <Home/>
      <Formuleaire/>
      <Image url={nutty} text='clic ici '/>
      <Image url={flyppi} text='appuyer ici' />
      
      <Surprise/>
    </div>
  )
}

export default App;
