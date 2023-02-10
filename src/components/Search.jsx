import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Buscar un Usuario' />
      </div>
      <div className="userChat">
        <img src="https://alfabetajuega.com/hero/2023/01/pikachu-pokemon.1673862418.9289.jpg?width=1200&aspect_ratio=16:9" alt="" />
        <div className="userChatInfo">
          <span>Jhon</span>
        </div>
      </div>
    </div>
  )
}

export default Search