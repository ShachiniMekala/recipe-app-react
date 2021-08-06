import React from 'react';
import './App.css';

const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className="recipe_header">
            <h2>Name : {title}</h2>
            <h2>Ingredients :</h2>
            <p>
                {ingredients.map(ing=>(
                    <li>{ing.text}</li>
                ))}
            </p>
            <h2>Calories : {calories}</h2>
            <img src={image} className="image" alt=""/>
        </div>
    );

}

export default Recipe;