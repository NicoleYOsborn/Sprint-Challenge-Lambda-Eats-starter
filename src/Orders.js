import React from 'react'

function Orders({details}){
    if(!details){
        return <h3>Getting your orders...</h3>
    }

    return(
        <div className='orders container'>
            <h2>{details.custName}</h2>
            <p>Pizza size: {details.size}</p>
            <p>Toppings: </p>
            {!!details.toppings && !!details.toppings.length &&
        <div>
          <ul>
            {details.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
          </ul>
        </div>
      }
        </div>
    )
}

export default Orders