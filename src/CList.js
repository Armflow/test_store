import React from 'react'
import Candy from './Candy'

export default function CList(props) {
    return (
            props.candies.map((candy, index) => {
               return (
               <Candy  candy={candy} 
               key={candy.id} 
               onClick={props.onToggle} 
               />
               )
           }) 
        
    )
}