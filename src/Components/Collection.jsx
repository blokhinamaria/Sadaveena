import React from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';


import { addItem } from '../CartSlice';

import ProductData from "./ProductData";

const Collection = () => {

// Shuffle products once on mount
    const [shuffledProducts, setShuffledProducts] = useState([]);
    useEffect(() => {
        const shuffled = [...ProductData].sort(() => Math.random() - 0.5);
        setShuffledProducts(shuffled);
    }, []);


//Add to cart
    const dispatch = useDispatch();
    const addedToCart = useSelector((state) => state.cart.addedToCart);
    

    const handleAddToCart = (item) => {
            console.log(item),
            dispatch(addItem(item)); //displatches the plant details to the addItem() reducer function in CartSlice.jsx
        };

    return (
        <>
                <div className='page-intro'>  
                    <div className='page-intro-background'>
                        <img src='./assets/Homepage+Colorful+leaves.jpg' style={{ objectPosition: "49.07353792704111% 68.00850106263283%"}}></img>
                        <div className='page-intro-background-overlay'></div>
                    </div>
                    <div className='page-intro-content-wrapper'>
                        <div className='page-intro-content'>
                            <h1>Choose Your Plants</h1>
                            <p>Our plants are one-of-a-kind, carefully crafted by hand, recycled fabric artworks. Explore the full collection below</p>
                        </div>
                    </div>
                </div>

                <div className="product-grid">
                    <div className='product-list'>
                        {shuffledProducts.map((plant) => (
                            <div key={plant.id} className='product-card'>
                                <a className='product-link'                                            >
                                    <figure className='product-image-container'>
                                        <img className="product-image has-overlay" src={plant.image} alt={plant.name}/>
                                        <img className="product-image overlay" src={plant.image2 ? plant.image2 : plant.image} alt={plant.name}/>
                                    </figure>
                                    <div className='product-title'><h2>{plant.name}</h2></div>
                                    <div className='product-cost'>${plant.cost}</div>
                                    {/* <div className='product-availability'>{plant.status}</div> */}
                                    <button className='add-to-cart primary-button' onClick={() => handleAddToCart(plant)} disabled={addedToCart[plant.name]}>{addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}</button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
        </>
        
    );}

export default Collection;