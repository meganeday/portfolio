import React from 'react';
import Impasta from '../images/thumbnails/impasta-app.png';
import Groomsmart from '../images/thumbnails/appointment-app.png'
import Garden from '../images/thumbnails/garden-app.png';
import Books from '../images/thumbnails/books-app.png';
import Plant from '../images/hanging-plant-1.png'

const ProjectPage = () => {

    return (
        <div id="project-collection">
            <img src={Plant} alt="houseplant" id="home-plant-2" />
            <h1>portfolio</h1>
            <div className="project">
                <img src={Impasta} alt="thumbnail of project" className="thumbnail" />
                <h2>impasta syndrome</h2>
                <p>an app for storing and sorting through gluten-free recipes</p>
                <ul>
                    <li className="lang">HTML</li>
                    <li className="lang">CSS</li>
                    <li className="lang">React.js</li>
                    <li className="lang">Ruby</li>
                    <li className="lang">Rails</li>
                    <li className="lang">Postgres</li>
                </ul>
                <div className="button-wrapper">
                    <button className="demo">demo</button>
                    <button className="github"></button>
                </div>
            </div>
            <div className="project">
                <img src={Groomsmart} alt="thumbnail of project" className="thumbnail" />
                <h2>groomsmart</h2>
                <p>an app for managing your pets' grooming appointments</p>
                <ul>
                    <li className="lang">HTML</li>
                    <li className="lang">CSS</li>
                    <li className="lang">React.js</li>
                    <li className="lang">Ruby</li>
                    <li className="lang">Rails</li>
                    <li className="lang">Postgres</li>
                </ul>
                <div className="button-wrapper">
                    <button className="demo">demo</button>
                    <button className="github"></button>
                </div>
            </div>
            <div className="project">
                <img src={Garden} alt="thumbnail of project" className="thumbnail" />
                <h2>my garden app</h2>
                <p>an app for keeping track of your houseplants and organizing their care instructions</p>
                <ul>
                    <li className="lang">HTML</li>
                    <li className="lang">CSS</li>
                    <li className="lang">React.js</li>
                    <li className="lang">Ruby</li>
                    <li className="lang">Sinatra</li>
                </ul>
                <div className="button-wrapper">
                    <button className="demo">demo</button>
                    <button className="github"></button>
                </div>
            </div>
            {/* <div className="project">
                <img src={Books} alt="thumbnail of project" className="thumbnail" />
                <h2>my library</h2>
                <p>Impasta Syndrome is a recipe app for gluten-intolerant folks where they can store and sort through their favorite gluten free recipes.</p>
                <ul>
                    <li className="lang">HTML</li>
                    <li className="lang">CSS</li>
                    <li className="lang">JavaScript</li>
                    <li className="lang">JSON</li>
                </ul>
                <div className="button-wrapper">
                    <button className="demo">demo</button>
                    <button className="github"></button>
                </div>
            </div> */}
        </div>
    )

}

export default ProjectPage;
