import React from 'react';
import { NavLink } from 'react-router-dom'

const links = [{
    to:'/hw-23-redux-intro/',
    label:'Home'
},
{
    to:'/hw-23-redux-intro/feed',
    label:'Feed'
},
]

const NavBar = () => (
    <nav className="navigation">
        <ul className="flex">
            {links.map(link => (
               <li className="navigation-item" key={link.to}>
                   <NavLink exact to={link.to}>{link.label}</NavLink>
               </li> 
            ))}
        </ul>
    </nav>
)

export default NavBar;