import React, { useState } from 'react';
import { Form, Navbar } from 'react-bootstrap';
import { BiRestaurant } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import Products from './Products';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function FoodItems() {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const getCartTotal = () => {
        return cart.reduce(
            (sum, { quantity }) => sum + quantity,
            0
        );
    };

    return (
        <div className="App">
            <Navbar bg="primary" variant="dark">

                <Navbar.Brand >
                    <BiRestaurant />    Food's Restaurant
            </Navbar.Brand>
                <Form inline className="Shop">
                    <IoMdCart onClick={() => navigateTo(PAGE_CART)} /> ({getCartTotal()})
                    <button id="shop" onClick={() => navigateTo(PAGE_PRODUCTS)}>
                        Shop
                    </button>
                </Form>
            </Navbar>


            {page === PAGE_PRODUCTS && (
                <Products cart={cart} setCart={setCart} />
            )}
            {page === PAGE_CART && (
                <Cart cart={cart} setCart={setCart} />
            )}
        </div>
    );
}

export default FoodItems;

