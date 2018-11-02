import React from 'react';

import {NavLink} from 'react-router-dom';

const Nav = () => {
    return(
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <NavLink to={'/'} className='navbar-brand'>
                    Clasificados Online
                </NavLink>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav mr-auto'>
                        {/* <li className='nav-item'>
                            <NavLink to={'/'} activeClassName='active' className='nav-link'>Inicio</NavLink>
                        </li> */}
                        {/* <li className='nav-item'>
                            <NavLink to={'/contacto'} activeClassName='active' className='nav-link'>Contacto</NavLink>
                        </li> */}
                    </ul>
                    <NavLink to={'/formulario'} className='btn btn-outline-danger my-2 my-sm-0 pt-3 pb-3 pr-5 pl-5'>
                        Crear tu anuncio
                    </NavLink>
                </div>
                
            </nav>            
        </header>
    )
}

export default Nav;