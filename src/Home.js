import React from 'react'
import {useHistory} from 'react-router-dom'
import Orders from './Orders'

export default function Home(props){
    const {orders} = props
    const history = useHistory()
    const routeToOrder =()=>{
        history.push('/pizza')
    }

    return(
        <div className='home-container'>
            <h2>Your Orders</h2>
            <Orders details = {orders}/>
            <button onClick={routeToOrder} className='toOrder'>
                New Order
            </button>
        </div>
    )
}