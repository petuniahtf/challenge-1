import logo from './logo.svg';
import './App.css';
import Home from './Compo/header.js'
import Formuleaire from './Compo/formulaire';
import Image from './Compo/image';
import Surprise from './Compo/surprise'

function App() {
  return (
    <div className="App">
      <Home/>
      <Formuleaire/>
      <Image/>
      <Surprise/>

    </div>
  )
}

export default App;
