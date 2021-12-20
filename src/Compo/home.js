import React  from 'react';
import './home.css'

function Home(){
    const [toggleMenu, setToggleMenu] = React.useState(false)
    const [largeur, setLargeur] = React.useState(window.innerWidth)

    const toggleNavSmall =() => {
        setToggleMenu(!toggleMenu);
    }

    React.useEffect(()=>{

        const changeWidth = () =>{
            setLargeur(window.innerWidth);
            
            if (window.innerWidth > 500){
                setToggleMenu(false)
           }
       }
        
        window.addEventListener('resize', changeWidth);

        return ( () => {
            window.removeEventListener('resize', changeWidth)
        })
    }, [])

    return <header className="home">
        <nav >
        {(toggleMenu  || largeur > 500) && (
            <ul className='liste'>
            <li className="items">Formulaire</li>
            <li className="items">Image</li>
            <li className="items">Surprise</li>
            </ul>
        )}
            <button className='bouts' onClick={toggleNavSmall}> C'est cablé?</button>
        </nav>
        
    </header>
}

export default Home;