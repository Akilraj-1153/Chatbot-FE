import React from 'react'
import './Home.css'
import Ipbox from './Ipbox.js';
import Content from './Content.js';


function Home() {
  return (
    
    <div class="home">
        <div class="outbox">
          <Content></Content>
          <Ipbox></Ipbox>
        </div>

        <div class="Qbox"></div>
    </div>
  )
}

export default Home;