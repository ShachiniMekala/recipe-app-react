import React,{useEffect,useState} from 'react';
import Recipe from './recipe-component';
import './App.css';

const App =() => {
  const APP_ID='eed2d898';
  const API_KEY ='703834f3018149cbbee0f9028da9280e';
 
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("chicken");

  useEffect(()=>{
    getRecpies();
  },[query]);

  const getRecpies= async ()=>{
    const response=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch=e=>{
    setSearch(e.target.value);
    //console.log(search);
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange= {updateSearch}/>
        <button className="search-button" type="submit" >
          G O 
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients} />
      ))}
      </div>
    </div>
  )
};

export default App;
