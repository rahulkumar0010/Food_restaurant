import React from 'react';
import Navbar1 from './Navbar1';
import {Button} from 'react-bootstrap';
import {browserHistory } from 'react-router'


function FoodApp() {
    const handleMenu = () =>{
           browserHistory.push('/Component/FoodItems')
        }
    return (
        <div>
            <Navbar1 />
            <div className="welcome">
                <h1>Welcome to Food's <br /> Kitchen</h1>
                <br/>
                <p>
                    <Button variant="primary" onClick={handleMenu}>GO TO MENU</Button>
                </p>
            </div>
            
        </div>
    )
}
export default FoodApp