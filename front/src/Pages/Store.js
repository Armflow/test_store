import React from 'react';
import Logo from '../img_src/logo.png'
import './styles.css'
import CList from '../buildCandy/CList'

export default function Store(props) {
const [ ,setCandies] = React.useState(props.state.candies)

function  toggleCandy(id) {
  setCandies(props.state.candies.map(candy =>{
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
        <input className='input' readOnly={true} value={(props.state.candies.filter(({ordered}) => ordered === true)).length} />&nbsp;
        <font color='white'>
          <strong>items.</strong>
        </font>
      </div>
      <div className = 'wrapper'>
        <img src={Logo} alt="Plastic Store"></img>
      </div>
      <div className="list">
        <CList candies={props.state.candies.slice(0, 4)} onToggle={toggleCandy} />
      </div>
      <div className="list">
        <CList candies={props.state.candies.slice(-4)} onToggle={toggleCandy} />
      </div>
    </div>
  )
}
