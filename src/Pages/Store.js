import React from 'react';
// eslint-disable-next-line
import { useState } from 'react';
import Logo from '../img_src/logo1.png'
import './styles.css'
import CList from '../buildCandy/CList'


export default function Store(props) {

const [candies, setCandies] = React.useState(props.state.candies)

function  toggleCandy(id) {
  setCandies(candies.map(candy =>{
    if (candy.ordered !== true && candy.id === id){
      candy.ordered = true;
    }
    return candy
  })
 )
}

return (
    <div className="app">
  
      <div className='cascade'>
        <font color='white'>
          <strong>&nbsp;Basket: </strong>
        </font>
        <input className='input' readOnly={true} value={(candies.filter( ({ordered}) => ordered === true)).length} />&nbsp;
        <font color='white'>
          <strong>items.</strong>
        </font>
      </div>
  
      <div className = 'wrapper'>
        <img src={Logo} alt="Plastic Store"></img>
      </div>
  
      <div className="list">
        <CList candies={candies.slice(0, 4)} onToggle={toggleCandy} />
      </div>
  
      <div className="list">
        <CList candies={candies.slice(-4)} onToggle={toggleCandy} />
      </div>
    </div>
  
  )
}
