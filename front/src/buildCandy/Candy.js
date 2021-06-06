
import React from 'react'

export default function Candy({candy, index, onClick}) {
    return(
        <div className="candy">
        <div className="candy-img">
            <img
              src={candy.img}
              alt={candy.name} />
        </div>
        <h3>{candy.name}</h3>
        <p><font color="#ff0000"><strong><u>SALE:</u>&nbsp;</strong></font>${candy.price}</p>
        <p><button onClick={() => onClick(candy.id)}>{candy.btnTitle}</button></p>
    </div>

    )
}
