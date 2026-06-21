import squiggly_line from './images/pattern-squiggle-1.svg'
import hero_image from './images/image-home-hero-large.webp'
import carrot from './images/Carrots.svg'
import feature from './images/Feature-Icon.svg'
import magnifying from './images/Magnifying-icon.svg'
import footer_picture from './images/image-home-real-life-small.webp'
import fork from './images/pattern-fork.svg'
import knife from './images/pattern-knife.svg'
import tiktok from './images/tiktok.svg'
import butterfly from './images/butterfly.svg'
import instagram from './images/icon-instagram.svg'
import { Link } from 'react-router-dom'

function Home() { 

    return( 
        <>
        <div className="home-container">
            <div className="img-container">
            <img src={squiggly_line} alt="" />
            </div>
            <div className="home-content">
                <h1 className="content-header">
                    Healthy meals, zero fuss
                </h1>
                <p className="content-text">Discover eight quick, whole-food recipes that you can cook tonight<br></br> —no processed junk, no guesswork.</p>
                <button className="explore-btn btn">Start exploring</button>
                <div className="hero-img">
                    <img src={hero_image} alt="" />
                </div>
                <div className="bottom-home-content">
                    <h1 className="bottom-home-header">What you'll get</h1>
                    <div className="bottom-home-grid">
                        <div className="grid-box">
                        <img src={carrot} alt="" />
                        <p className="grid-header">Whole-food recipes</p>
                        <p>Each dish uses everyday, unprocessed ingredients.</p>
                        </div>
                        <div className="grid-box">
                        <img src={feature} alt="" />
                        <p className="grid-header">Minimum fuss</p>
                        <p>All recipes are designed to make eating healthy quick and easy.</p>
                        </div>
                        <div className="grid-box">
                        <img src={magnifying} alt="" />
                        <p className="grid-header">Search in seconds</p>
                        <p>Filter by name or ingredient and jump straight to the recipe you need.</p>
                        </div>
                    </div>
                </div>
                <div className="footer-section-content">
                    <div className="left-container">
                        <h1 className="footer-header">Built for real life</h1>
                        <p>Cooking shouldn't be complicated. These recipes come in 
                            under 30 minutes of active time, fit busy schedules, and 
                            taste good enough to repeat. <br></br><br></br>
                            Whether you're new to the kitchen or just need fresh ideas,
                            we've got you covered.
                        </p>
                    </div>
                    <div className="right-container">
                        <img src={footer_picture} alt="" />
                        
                    </div>
                </div>
                <div className="image-and-text-container">
                <img src={fork} alt="" />
                <div className="bottom-section-text">
                    <h1>Ready to cook smarter?</h1>
                    <p>Hit the button, pick a recipe, and get dinner on the table—fast.</p>
                    <Link to="/recipes" className="browse-btn btn">Browse recipes</Link>
                </div>
                <img src={knife} alt="" />
                </div>
                <div className="footer-bottom">
                    <p>Made with 💗 and 🥑</p>
                    <div className="links">
                    <img src={instagram} alt="" />
                    <img src={butterfly} alt="" />
                    <img src={tiktok} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home