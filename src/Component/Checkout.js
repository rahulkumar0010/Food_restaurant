import React from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import Navbar1 from './Navbar1'

function Checkout(){
    const handleShop =()=>{
        browserHistory.push('/Component/FoodItems')
    }
    return(<div>
        <Navbar1/>
        <div className="container Thanks">
            <h1 >Checkout</h1>
            <p >Thank you for your order</p>
            <div>
                <Button onClick={handleShop} align="center">Go To Shop</Button>
            </div>
        </div>
        </div>
    )
}
export default Checkout