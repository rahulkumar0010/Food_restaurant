import React from 'react';
import { Navbar } from 'react-bootstrap';
import { BiRestaurant } from "react-icons/bi";


function Navbar1() {
    return (
        <div className="Navbar">
            <Navbar bg="primary" variant="dark">
                
                <Navbar.Brand >
                <BiRestaurant />    Food's Restaurant
            </Navbar.Brand>
            </Navbar>

        </div>
    )
}
export default Navbar1;