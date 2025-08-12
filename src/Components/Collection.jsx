import React from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';


import { addItem } from '../CartSlice';


const Collection = () => {

    const plantsArray = [

                {
                    name: "Elena in Orange & Magenta",
                    color: ["Burnt Orange", "Magenta"],
                    image: "./assets/products/Elena_Burnt_Orange_Magenta_Artificial_Plant.jpg",
                    image2: "./assets/products/Elena_Burnt_Orange_Magenta_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Elena_Burnt_Orange_Magenta_Artificial_Plant_03.jpg",
                    image4: "./assets/products/Elena_Burnt_Orange_Magenta_Artificial_Plant_04.jpg",
                    description: "",
                    cost: "50",
                    category: "Elena",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Elena in Cobalt & Dark Blue",
                    color: ["Cobalt Blue", "Dark Blue"],
                    image: "./assets/products/Elena_Cobalt_Blue_Dark_Artificial_Plant.jpg",
                    image2: "./assets/products/Elena_Cobalt_Blue_Dark_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Elena_Cobalt_Blue_Dark_Artificial_Plant_03.jpg",
                    image4: "./assets/products/Elena_Cobalt_Blue_Dark_Artificial_Plant_04.jpg",
                    description: "",
                    cost: "50",
                    category: "Elena",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Miranda in Denim",
                    color: ["Denim", "Blue"],
                    image: "./assets/products/Miranda_Blue_Denim_Artificial_Plant.jpg",
                    image2: "./assets/products/Miranda_Blue_Denim_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Miranda_Blue_Denim_Artificial_Plant_03.jpg",
                    image4: "./assets/products/Miranda_Blue_Denim_Artificial_Plant_04.jpg",
                    description: "",
                    cost: "45",
                    category: "Miranda",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Miranda in Purple",
                    color: ["Purple"],
                    image: "./assets/products/Miranda_Purple_Artificial_Plant.jpg",
                    image2: "./assets/products/Miranda_Purple_Artificial_Plant_02.jpg",
                    description: "",
                    cost: "45",
                    category: "Miranda",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Small Olivia in Sand",
                    color: ["Sand"],
                    image: "./assets/products/Olivia_Beige_Small_Artificial_Plant.jpg",
                    description: "",
                    cost: "50",
                    category: "Small Olivia",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Olivia in Chocolate",
                    color: ["Chocolate"],
                    image: "./assets/products/Olivia_Brown_Peach_Large_Artificial_Plant.jpg",
                    description: "",
                    cost: "75",
                    category: "Olivia",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Small Olivia in Chocolate",
                    color: ["Chocolate"],
                    image: "./assets/products/Olivia_Brown_Small_Artificial_Plant.jpg",
                    description: "",
                    cost: "50",
                    category: "Small Olivia",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Olivia in Red Orange",
                    color: ["Red", "Orange"],
                    image: "./assets/products/Olivia_Burnt_Orange_Large_Artificial_Plant.jpg",
                    image2: "./assets/products/Olivia_Red_Orange_Large_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Olivia_Red_Orange_Large_Artificial_Plant_03.jpg",
                    image4: "./assets/products/Olivia_Red_Orange_Large_Artificial_Plant_04.jpg",
                    image5: "./assets/products/Olivia_Red_Orange_Large_Artificial_Plant_05.jpg",                 
                    description: "",
                    cost: "75",
                    category: "Olivia",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Olivia in Dusty Pink",
                    color: ["Dusty Pink"],
                    image: "./assets/products/Olivia_Dusty_Pink_Large_Artificial_Plant.jpg",
                    image2: "./assets/products/Olivia_Dusty_Pink_Large_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Olivia_Dusty_Pink_Large_Artificial_Plant_03.jpg",
                    image4: "./assets/products/Olivia_Dusty_Pink_Large_Artificial_Plant_04.jpg",
                    description: "",
                    cost: "75",
                    category: "Olivia",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Olivia in Lilac",
                    color: ["Lilac"],
                    image: "./assets/products/Olivia_Lilac_Small_Artificial_Plant.jpg",
                    image2: "./assets/products/Olivia_Lilac_Small_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Olivia_Lilac_Small_Artificial_Plant_03.jpg",
                    image4: "./assets/products/Olivia_Lilac_Small_Artificial_Plant_04.jpg",
                    image5: "./assets/products/Olivia_Lilac_Small_Artificial_Plant_05.jpg",                 
                    description: "",
                    cost: "50",
                    category: "Small Olivia",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Olivia in Paint Brush",
                    color: ["Teal", "Blue", "Pink"],
                    image: "./assets/products/Olivia_Teal_Blue_Pink_Large_Artificial_Plant.jpg",
                    image2: "./assets/products/Olivia_Teal_Blue_Pink_Large_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Olivia_Teal_Blue_Pink_Large_Artificial_Plant.jpg",
                    image4: "./assets/products/Olivia_Teal_Blue_Pink_Large_Artificial_Plant_04.jpg",
                    description: "",
                    cost: "75",
                    category: "Olivia",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Olivia in Teal & Gold",
                    color: ["Teal", "Gold"],
                    image: "./assets/products/Olivia_Teal_Gold_Small_Artificial_Plant.jpg",
                    image2: "./assets/products/Olivia_Teal_Gold_Small_Artificial_Plant_02.jpg",            
                    description: "",
                    cost: "50",
                    category: "Small Olivia",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Penny in Purple & Green",
                    color: ["Purple", "Green"],
                    image: "./assets/products/Penny_Purple_Green_Artificial_Plant.jpg",
                    image2: "./assets/products/Penny_Purple_Green_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Penny_Purple_Green_Artificial_Plant.jpg",
                    image4: "./assets/products/Penny_Purple_Green_Artificial_Plant_04.jpg",
                    description: "",
                    cost: "75",
                    category: "Penny",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Raya in Sand",
                    color: ["Sand"],
                    image: "./assets/products/Raya_Beige_Artificial_Plant.jpg",
                    description: "",
                    cost: "50",
                    category: "Raya",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Raya in Cobalt Blue",
                    color: ["Cobalt Blue"],
                    image: "./assets/products/Raya_Cobalt_Blue_Artificial_Plant.jpg",
                    image2: "./assets/products/Raya_Cobalt_Blue_Artificial_Plant_02.jpg",            
                    description: "",
                    cost: "50",
                    category: "Raya",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Raya in Purple & Red",
                    color: ["Purple", "Red"],
                    image: "./assets/products/Raya_Purple_Red_Artificial_Plant.jpg",
                    image2: "./assets/products/Raya_Purple_Red_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Raya_Purple_Red_Artificial_Plant_03.jpg",
                    image4: "./assets/products/Raya_Purple_Red_Artificial_Plant_04.jpg",
                    image5: "./assets/products/Raya_Purple_Red_Artificial_Plant_05.jpg",                 
                    description: "",
                    cost: "50",
                    category: "Raya",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Raya in Shiny Silver",
                    color: ["Silver"],
                    image: "./assets/products/Raya_Shiny_Silver_Artificial_Plant.jpg",
                    image2: "./assets/products/Raya_Shiny_Silver_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Raya_Shiny_Silver_Artificial_Plant_03.jpg",
                    image4: "./assets/products/Raya_Shiny_Silver_Artificial_Plant_04.jpg",
                    description: "",
                    cost: "50",
                    category: "Raya",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Raya in Teal & Gold",
                    color: ["Teal", "Gold"],
                    image: "./assets/products/Raya_Teal_Gold_Artificial_Plant.jpg",
                    image2: "./assets/products/Raya_Teal_Gold_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Raya_Teal_Gold_Artificial_Plant_03.jpg",          
                    description: "",
                    cost: "50",
                    category: "Raya",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Samantha in Sand",
                    color: ["Sand"],
                    image: "./assets/products/Samantha_Beige_Artificial_Plant.jpg",     
                    description: "",
                    cost: "90",
                    category: "Samantha",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Samantha in Red Orange",
                    color: ["Red", "Orange"],
                    image: "./assets/products/Samantha_Burnt_Orange_Artificial_Plant.jpg",
                    image2: "./assets/products/Samantha_Burnt_Orange_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Samantha_Burnt_Orange_Artificial_Plant_03.jpg",
                    image4: "./assets/products/Samantha_Burnt_Orange_Artificial_Plant_04.jpg",
                    description: "",
                    cost: "90",
                    category: "Samantha",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Samantha in Cheetah",
                    color: ["Cheetah"],
                    image: "./assets/products/Samantha_Cheetah_Artificial_Plant_01.jpg",
                    image2: "./assets/products/Samantha_Cheetah_Artificial_Plant_02.jpg",
                    description: "",
                    cost: "90",
                    category: "Samantha",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Samantha in Dusty Pink",
                    color: ["Dusty Pink"],
                    image: "./assets/products/Samantha_Dusty_Pink_Artificial_Plant.jpg",
                    description: "",
                    cost: "90",
                    category: "Samantha",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Samantha in Shiny Silver",
                    color: ["Silver"],
                    image: "./assets/products/Samantha_Shiny_Silver_Artificial_Plant.jpg",
                    image2: "./assets/products/Samantha_Shiny_Silver_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Samantha_Shiny_Silver_Artificial_Plant_03.jpg",
                    image4: "./assets/products/Samantha_Shiny_Silver_Artificial_Plant_04.jpg",
                    description: "",
                    cost: "90",
                    category: "Samantha",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Selena in Light Blue & Lilac",
                    color: ["Light BLue", "Lilac"],
                    image: "./assets/products/Selena_Light_Blue_Lilac_Artificial_Plant.jpg",
                    image2: "./assets/products/Selena_Light_Blue_Lilac_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Selena_Light_Blue_Lilac_Artificial_Plant_03.jpg",
                    image4: "./assets/products/Selena_Light_Blue_Lilac_Artificial_Plant_04.jpg",
                    description: "",
                    cost: "90",
                    category: "Selena",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Selena in Red Wine & Peach",
                    color: ["Red Wine", "Peach"],
                    image: "./assets/products/Selena_Red_Wine_Peach_Artificial_Plant.jpg",
                    image2: "./assets/products/Selena_Red_Wine_Peach_Artificial_Plant_02.jpg",
                    image3: "./assets/products/Selena_Red_Wine_Peach_Artificial_Plant_03.jpg",
                    description: "",
                    cost: "90",
                    category: "Selena",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Zaria in Peach",
                    color: ["Peach"],
                    image: "./assets/products/Zaria_Peach_Artificial_Plant.jpg",
                    description: "",
                    cost: "65",
                    category: "Zaria",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Zaria in Red",
                    color: ["Red"],
                    image: "./assets/products/Zaria_Red_Artificial_Plant_01.jpg",
                    image2: "./assets/products/Zaria_Red_Artificial_Plant_02.jpg",
                    description: "",
                    cost: "45",
                    category: "Zaria",
                    status: "available",
                    quantity: 10
                },
                {
                    name: "Zaria in Shiny Silver",
                    color: [" Silver"],
                    image: "./assets/products/Zaria_Shiny_Silver_Artificial_Plant.jpg",
                    description: "",
                    cost: "45",
                    category: "Zaria",
                    status: "available",
                    quantity: 10
                }
            ];

// Shuffle products once on mount
    const [shuffledProducts, setShuffledProducts] = useState([]);
    useEffect(() => {
        const shuffled = [...plantsArray].sort(() => Math.random() - 0.5);
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
                        {shuffledProducts.map((plant, index) => (
                            <div key={index} className='product-card'>
                                <a className='product-link'                                            >
                                    <figure className='product-image-container'>
                                        <img className="product-image has-overlay" src={plant.image} alt={plant.name}/>
                                        <img className="product-image overlay" src={plant.image2 ? plant.image2 : plant.image} alt={plant.name}/>
                                    </figure>
                                    <div className='product-title'><h2>{plant.name}</h2></div>
                                    <div className='product-cost'>${plant.cost}</div>
                                    <div className='product-availability'>{plant.availability}</div>
                                    <button className='add-to-cart primary-button' onClick={() => handleAddToCart(plant)} disabled={!!addedToCart[plant.name]}>{addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}</button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
        </>
        
    );}

export default Collection;