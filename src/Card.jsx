
import './Card.css'

function Card({recipe}) { 
    return ( 
    <>
    <div className="card">
        <div className="img-container">
        <img src={recipe.image} alt="" />
        </div>

    </div>

    </>
    )
}

export default Card