import React from 'react'
import './Ipbox.css'

function Ipbox() {
  return (
    <div class="ipbox">
        <input class="ipqbox" type='text' placeholder='     Ask Me Any Questions Regarding My Company'></input>
        <button class="subtn" type='submit'>
            <img src='./assets/search-512.webp' alt="search"></img>
        </button>
    </div>
  )
}

export default Ipbox;