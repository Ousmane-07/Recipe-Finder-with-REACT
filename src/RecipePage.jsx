import { useState } from 'react'
import Card from './Card.jsx'

import './RecipePage.css'
import { data } from './data.jsx'
import Search from './images/icon-search.svg'

function Recipe() { 
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");

    const filteredData = data.filter((recipe) =>
  recipe.name.toLowerCase().includes(search.toLowerCase())
);

    return( 
        <>
        <div className="recipe-wrapper">
            <div className="recipe-container">
            <h1>Explore our simple, healthy recipes</h1>
            <p>Discover eight quick, whole-food dishes 
                that fit real-life schedules and taste
                 amazing. Use the search bar to find a 
                 recipe by name or ingredient, or simply
                  scroll the list and let something
                   delicious catch your eye.</p>
            </div>
        </div>
        <div className="selector-and-input-wrapper">
            <div className="selector-and-input-container">
        <div className="selectors-container">
            <select onChange ={(e) => setCategory(e.target.value)}>
            <option value="">Max Prep Time</option>
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="clear">Clear</option>
          </select>
          <select onChange ={(e) => setCategory(e.target.value)}>
            <option value="">Max Cook Time</option>
            <option value="0">0 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
            <option value="clear">Clear</option>
          </select>

        </div>
        <div className="input-container">
        <img src={Search} alt="" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or ingrendient..." />
        </div>
        </div>
        </div>
        <div className="recipe-grid-container-wrapper">
            <div className="recipe-grid-container">
                {filteredData.map(recipe => (
                    <Card key={recipe.id} recipe={recipe} />
                ))}
               
            </div>
        </div>
        
        
        

        </>
    )
}

export default Recipe