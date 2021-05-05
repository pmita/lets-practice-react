import React from 'react';
//Let's import everything fontawesome related
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({toggleNav, setToggleNav}) => {
    /*-----------Event Handlers-----------*/
    const toggleNavHandler = () => {
        console.log(toggleNav);
        if(!toggleNav) { 
            setToggleNav(true);
        } else {
            setToggleNav(false);
        }
    }
    return(
        <nav>
            <h2>Musico.co</h2>
            <button onClick={toggleNavHandler}>
                <FontAwesomeIcon className="library-icon" icon={faMusic} />
                <span>Library</span>
            </button>
            
        </nav>
    );
}

export default Nav;