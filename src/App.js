import React, {useState, useEffect} from "react";
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios'
import * as yup from 'yup'

import Pizza from './Pizza'
import Home from './Home'
import formSchema from "./formSchema";

const initialFormValues = {
  custName: "",
  size: "",
  toppings: {
    olives: false,
    peppers: false,
    pepperoni: false,
    sausage: false,
  },
  special: "",
  
}

const initialFormErrors= {
  custName: '',
  size: '',
}

const initialOrders = []
const initialDisabled = true;

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

const getOrders = ()=>{
  axios.get('http://localhost:3000/Orders')
    .then(res =>{
      setOrders(res.data)
    })
    .catch(err =>{
      debugger
    })
}

const sendOrder = newOrder =>{
  axios.post('http:localhost:3000/Orders', newOrder)
    .then(res=>{
      setOrders([res.data, ...orders])
    })
    .catch(err =>{
      debugger
    })
    .finally(()=>{
      setFormValues(initialFormValues)
    })
}

const onInputChange = evt =>{
  const name = evt.target.name
  const value = evt.target.value

  yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid =>{
      setFormErrors({
        ...formErrors, [name]: ''
      })
    })
    .catch(err=>{
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    })

}

const onCheckboxChange = evt =>{
  const {name} = evt.target
  const {checked} = evt.target
  setFormValues({
    ...formValues,
    toppings: {
      ...formValues.toppings, [name]: checked,
    }
  })

  }

  const onSubmit = evt =>{
    evt.preventDefault()
    const newOrder = {
      custName: formValues.custName,
      size: formValues.size,
      special: formValues.special,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping]===true)
    }
    sendOrder(newOrder)
  }
  useEffect(()=>{
    getOrders()
  }, [])
  useEffect(()=>{
    formSchema.isValid(formValues)
      .then(valid =>{
        setDisabled(!valid)
      })
  }, [formValues])  


  return (
    <div className='App'>
      <nav>
        <h1>Lambda Eats</h1>
        <p>It's Friday! You know what that means... PIZZA NIGHT!</p>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link className='orderLink' to='/pizza'>Order Your Pizza!</Link>
        </div>
      </nav>
      <Switch>

        <Route path='/pizza'>
          <Pizza values={formValues} onInputChange={onInputChange} onSubmit={onSubmit} disabled={disabled} errors={formErrors} onCheckboxChange={onCheckboxChange} />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
