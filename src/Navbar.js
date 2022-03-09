import React from 'react'
import "./App.css"
import home from './home.png'
import sixteen from './sixteen.png'
import search from './search.png'
import notif from './notif.png'
import burger from './burger.png'

console.log(home);
console.log(sixteen);
console.log(search);
console.log(notif);
console.log(burger);

export default function Navbar() {
  return (
    <div className='navbar'>
        <img className='home' src={home} alt="Home" />
        <img className='sixteen' src={sixteen} alt="sixteen" />
        <img className='search' src={search} alt="search" />
        <img className='notif' src={notif} alt="notif" />
        <img className='burger' src={burger} alt="burger" />
    </div>
  )
}
