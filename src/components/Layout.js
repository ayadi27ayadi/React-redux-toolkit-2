import React from 'react';
import NavBar from './NavBar';
import Home from '../pages/Home';

const Layout =({children}) =>{
    return(
        <>
        <div>
           <NavBar />
           <Home />
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;