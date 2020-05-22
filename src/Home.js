import React from 'react'
import {useHistory} from 'react-router-dom'
import Orders from './Orders'

export default function Home(){
    const history = useHistory()
    const routeToOrder =()=>{
        history.push('/pizza')
    }

    return(
        <div className='home-container'>
            <h2>Your Orders</h2>
            <Orders />
        </div>
    )
}