import React from 'react';
import { BrowserRouter as Router , Link} from 'react-router-dom'

import './home.css'

function Home({affiche}) {
    console.log(affiche)
    const [toggleMenu, setToggleMenu] = React.useState(false)
    const [largeur, setLargeur] = React.useState(window.innerWidth)
    

    const toggleNavSmall = () => {
        setToggleMenu(!toggleMenu);
    }
    

    React.useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if (window.innerWidth > 500) {
                setToggleMenu(false)
            }
        }
        window.addEventListener('resize', changeWidth);

        return (() => {
            window.removeEventListener('resize', changeWidth)
        })
    }, [])

    return(<header className="home">
        <Router>
        <nav >
            {(toggleMenu || largeur > 500) && (
                <ul className='liste'>
                <li className='items'><Link to='/formulaire'>formulaire</Link></li>
                <li className='items'><Link to='/image'>Image</Link></li>
                <li className='items'><Link to='/surprise'>surprise</Link></li>
                </ul>
            )}
            <button className='bouts' onClick={toggleNavSmall}> C'est cablé?</button>
        </nav>
        </Router>

    </header>


)
}

export default Home;