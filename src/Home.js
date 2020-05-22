import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Home(){
    const history = useHistory()
    const routeToOrder =()=>{
        history.push('/pizza')
    }

    return(
        <div className='home-container'>
            <button className='toOrderForm'
                onClick={routeToOrder}>
                    Order Pizza!
            </button>
        </div>
    )
}