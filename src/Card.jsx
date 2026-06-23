
import './Card.css'
import user from './images/user.svg'
import timer from './images/Timer.svg'
import cook from './images/cook.svg'
function Card({recipe}) { 
    return ( 
    <>
    <div className="card">
        <div className="img-container">
        <img src={recipe.image} alt="" />
        </div>
        <h1>{recipe.name}</h1>
        <p className="recipe-description">{recipe.description}</p>
        <div className="serving-and-prep-and-cook-container">
            <div className="serving-and-prep-container">
                <div className="serving-container">
                <img src={user} alt="" />
                <p>Servings: {recipe.servings}</p>
                </div>
                <div className="prep-container">
                <img src={timer} alt="" />
                <p>Prep: {recipe.prepTime}</p>
                </div>
            </div>
            <div className="cook-container">
            <img src={cook} className="cook" alt="" />
            <p>Cook: {recipe.cookTime}</p>
            </div>
        </div>


    </div>

    </>
    )
}

export default Card