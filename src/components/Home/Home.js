import React from 'react';
import Search from '../Search/Search';
import './HomeStyles.css'

function Home() {
  return (
    <div className='home-container'>
        <h1>Welcome to Campers-App</h1>
        <Search />
    </div>
  )
}

export default Home