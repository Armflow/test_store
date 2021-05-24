import React from 'react';
import './styles.css'

export default function Basket(props) {
    
    let total = 0

    return (
        <div className='app'>
            <h3>Basket content ({(props.state.candies.filter( ({ordered}) => ordered === true)).length} items):</h3>
            <div className='wrapper'>
                {React.Children.toArray(
                    props.state.candies.map((candy, index) => {
                    return (
                        <div>
                            {candy.ordered ? <div className='list'>{candy.name}&nbsp;-&nbsp;${candy.price}</div> : null}
                        </div>
                )
            }) 
        )}
            </div>
        </div>
    )
}