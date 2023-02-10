import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>ChatSito</span>
      <div className='user'>
        <img src="https://alfabetajuega.com/hero/2023/01/pikachu-pokemon.1673862418.9289.jpg?width=1200&aspect_ratio=16:9" alt="" />
        <span>Jhon</span>
        <button>Salir</button>
      </div>
    </div>
  )
}

export default Navbar