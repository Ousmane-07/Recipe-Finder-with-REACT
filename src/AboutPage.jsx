import './AboutPage.css'
import aboutImage from './images/image-about-our-mission-small.webp'
import arrow from './images/arrow.svg'
import missionimage from './images/image-about-beyond-the-plate-small.webp'
import tiktok from './images/tiktok.svg'
import butterfly from './images/butterfly.svg'
import instagram from './images/icon-instagram.svg'
import fork from './images/pattern-fork.svg'
import knife from './images/pattern-knife.svg'
import { Link } from 'react-router-dom'
function About() { 

    return( 
        <>
        <div className="about-wrapper">
            <div className="top-about-container">
                <div className="about-text-section">
                    <p>Our mission</p>
                    <h3>Help more people cook
                        nourishing meals, more often.
                    </h3>
                    <p>Healthy Recipe Finder was created 
                        to prove that healthy eating can 
                        be convenient, affordable, and 
                        genuinely delicious. <br></br><br></br>
                        We showcase quick, whole-food dishes 
                        that anyone can master—no fancy 
                        equipment, no ultra-processed 
                        shortcuts—just honest ingredients 
                        and straightforward steps.</p>
                </div>
                <div className="about-image-section">
                    <img src={aboutImage} alt="" />
                </div>
            </div>
        </div>
        <div className="top-about-middle-wrapper">
        <div className="top-about-middle-container">
            <div className="top-about-middle-flex-left">
                <h1>Why we exist</h1>
            </div>
            <div className="top-about-middle-flex-right">
                <div className="top-about-middle-flex-right-container">
                <div className="arrow-container">
                <img src={arrow} alt="" />
                </div>
                <div className="top-about-middle-text-container">
                    <p>Cut through the noise.</p>
                    <p>The internet is bursting with recipes, 
                        yet most busy cooks still default to 
                        take-away or packaged foods. We curate 
                        a tight collection of fool-proof dishes 
                        so you can skip the scrolling and start 
                        cooking.</p>
                </div>
                </div>
                <div className="top-about-middle-flex-right-container">
                <div className="arrow-container">
                <img src={arrow} alt="" />
                </div>
                <div className="top-about-middle-text-container">
                    <p>Empower home kitchens.</p>
                    <p>When you control what goes into your meals,
                         you control how you feel. Every recipe is
                          built around unrefined ingredients and
                           ready in about half an hour of active 
                           prep.</p>
                </div>
                </div>
                <div className="top-about-middle-flex-right-container">
                <div className="arrow-container">
                <img src={arrow} alt="" />
                </div>
                <div className="top-about-middle-text-container">
                    <p>Make healthy look good.</p>
                    <p>High-resolution imagery shows you exactly 
                        what success looks like—because we eat 
                        with our eyes first, and confidence matters.</p>
                </div>
                </div>

            </div>
        </div>
        </div>
        <div className="bottom-about-middle-wrapper">
        <div className="bottom-about-middle-container">
            <div className="bottom-about-middle-flex-left">
                <h1>Our food philosophy</h1>
            </div>
            <div className="bottom-about-middle-flex-right">
                <div className="bottom-about-middle-flex-right-container">
                <div className="arrow-container">
                <img src={arrow} alt="" />
                </div>
                <div className="bottom-about-middle-text-container">
                    <p>Whole ingredients first.</p>
                    <p>Fresh produce, grains, legumes, herbs, 
                        and quality fats form the backbone of 
                        every recipe.</p>
                </div>
                </div>
                <div className="bottom-about-middle-flex-right-container">
                <div className="arrow-container">
                <img src={arrow} alt="" />
                </div>
                <div className="bottom-about-middle-text-container">
                    <p>Flavor without compromise.</p>
                    <p>Spices, citrus, and natural sweetness 
                        replace excess salt, sugar, and additives.</p>
                </div>
                </div>
                <div className="bottom-about-middle-flex-right-container">
                <div className="arrow-container">
                <img src={arrow} alt="" />
                </div>
                <div className="bottom-about-middle-text-container">
                    <p>Respect for time.</p>
                    <p>Weeknight meals should slot into real schedules;
                         weekend cooking can be leisurely but never wasteful.</p>
                </div>
                </div>
                <div className="bottom-about-middle-flex-right-container">
                <div className="arrow-container">
                <img src={arrow} alt="" />
                </div>
                <div className="bottom-about-middle-text-container">
                    <p>Sustainable choices.</p>
                    <p>Short ingredient lists cut down on food waste and carbon
                         footprint, while plant-forward dishes keep things
                          planet-friendly.</p>
                </div>
                </div>

            </div>
        </div>
        </div>
        <div className="mission-wrapper">
            <div className="mission-container">
                <div className="mission-flex-left">
                    <h1>Beyond the plate</h1>
                    <p> We believe food is a catalyst for community and well-being.
                     By sharing approachable recipes, we hope to:</p>
                     <ul>
                        <li>Encourage family dinners and social cooking.</li>
                        <li>Reduce reliance on single-use packaging and delivery waste.</li>
                        <li>Spark curiosity about seasonal produce and local agriculture.</li>
                     </ul>
                </div>
                <div className="mission-img-container">
                    <img src={missionimage} alt="" />
                </div>

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
        </>
    )
}

export default About