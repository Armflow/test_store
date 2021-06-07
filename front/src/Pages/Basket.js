import React from 'react';
import './styles.css'

export default function Basket(props) {

    const [ ,setCandies] = React.useState(props.state.candies)

    function  deleteCandy(id) {
        setCandies(props.state.candies.map(candy =>{
          if (candy.ordered === true && candy.id === id){
            candy.ordered = false;
          }
          return candy
        })
       )
      }

    return (
        <div className='app'>
            <h3>Basket content ({(props.state.candies.filter( ({ordered}) => ordered === true)).length} items):</h3>
            <div className='wrapper'>
                {React.Children.toArray(
                    props.state.candies.map((candy, index) => {
                    return (
                        <div>
                            {candy.ordered === true ? 
                                <div className='list'>
                                    <tr>
                                        <td width='350px'>
                                            {candy.name}&nbsp;-&nbsp;${candy.price}
                                        </td>
                                        <td>
                                            <button onClick={() => deleteCandy(candy.id)}>{'Delete item'}</button>
                                        </td>
                                    </tr>
                                </div> : null
                            }
                        </div>
                )
            }) 
        )}
            </div>
        </div>
    )
}
