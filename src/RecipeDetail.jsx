import { useParams } from 'react-router-dom';
import { data } from './data';
import './RecipeDetail.css'

function Detail() { 
    
    const { id } = useParams();
    
    const recipe = data.find(item => item.id === Number(id))
    
    return ( 
        <>
        <div className="recipe-detail-wrapper">
            <div className="recipe-detail-container">
                <img src={recipe.image} alt="" />
            </div>
        </div>
        </>
    )
}

export default Detail