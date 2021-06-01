import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const FRIES = 'Fries';
const BURGER = 'Burger';
const COKE ="Coke";
const PEPSI="Pepsi";
const PIZZA="Pizza";


export default function Products({ setCart, cart }) {
    const [products] = useState([
        {
            category: BURGER,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&q=80",
            name: 'Burger',
            cost: 80,

        },
        {
            category: FRIES,
            name: 'Fries',
            cost: 100,
            image:
            "https://images.unsplash.com/photo-1585684277109-f6b0dda7fa54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
        },
        {   
            category: COKE,
            name: "Coke",
            cost: 50,
            image: "https://images.unsplash.com/photo-1615300953611-6c3d20c95a11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=575&q=80"
        },
        {   
            category: PEPSI,
            name: "Pepsi",
            cost:  50,
            image: "https://images.unsplash.com/photo-1546695259-ad30ff3fd643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
        },
        {   
            category: PIZZA,
            name: "Pizza",
            cost: 400,
            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        }
    ]);

    const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
    };

    const [category, setCategory] = useState(FRIES);

    const getProductsInCategory = () => {
        return products.filter(
            (product) => product.category === category
        );
    };

    return (
        <>
            <h1>Products</h1>
             Select Item
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value={FRIES}>{FRIES}</option>
                <option value={BURGER}>{BURGER}</option>
                <option value={COKE}>{COKE}</option>
                <option value={PEPSI}>{PEPSI}</option>
                <option value={PIZZA}>{PIZZA}</option>
            </select>
            <Card  style={{ width: '17rem' }}>
                <div className="products">
                    {getProductsInCategory().map((product, idx) => (
                        <div className="product" key={idx}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <h4>₹{product.cost}</h4>
                            <button onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </Card>
        </>
    );
}