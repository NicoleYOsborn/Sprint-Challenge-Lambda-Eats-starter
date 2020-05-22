import React from 'react'

function Pizza(props){
    const{
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange
    }=props
    return(
        <form classname='form-container'>
            <div className='submit'>
                <h2>Add to order</h2>
                <button disabled={disabled}>Submit Order</button>

                <div className='errors'>
                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    <div>{errors.custName}</div>
                    <div>{errors.size}</div>
                </div>
            </div>

            <div classname='inputs'>
{/* input for name */}
                <label htmlFor='custNameInput' onSubmit={onSubmit}>
                    Name: &nbsp;
                    <input id='custName' name='custName' value={values.custName} onChange={onInputChange} type="text" placeholder='Name on Order'/>
                </label>
                {/* dropdown for pizza size */}
                <label>Pizza size: &nbsp;
                    <select name='size' value={values.size} onChange={onInputChange}>
                        <option value=''>Select a pizza size</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                {/* checklist for at least 4 toppings */}
                <div className='checkboxes'>
                    <h4>Toppings:</h4>
                    <label>Olives
                        <input type='checkbox' name='olives' checked={values.toppings.olives} onChange={onCheckboxChange}/>
                    </label>
                    <label>Bell Peppers
                        <input type='checkbox' name='peppers' checked={values.toppings.peppers} onChange={onCheckboxChange}/>
                    </label>
                    <label>Pepperoni
                        <input type='checkbox' name='pepperoni' checked={values.toppings.pepperoni} onChange={onCheckboxChange}/>
                    </label>
                    <label>Sausage
                        <input type='checkbox' name='sausage' checked={values.toppings.sausage} onChange={onCheckboxChange}/>
                    </label>
                </div>
                    {/* input for special instructions */}
                <label htmlFor='specialInstructionsInput' onSubmit={onSubmit}>
                    Special Instructions: &nbsp;
                    <input id='special' name='special' value={values.special} onChange={onInputChange} type="text" placeholder='List any special instructions for your order'/>
                </label>
            </div>
         
        </form>
    )
}

export default Pizza;