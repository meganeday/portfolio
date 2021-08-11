import React from 'react';
import HomeImg from '../images/self-home.svg';
import Plant from '../images/hanging-plant-2.png';
import Cat from '../images/jump-cat.png'


const Home = () => {

    return (
        <div>
            <img src={Plant} alt="houseplant" id="home-plant" />
            <nav>
                <a href="#">about</a>
                <a href="#">portfolio</a>
                <a href="#">resume</a>
            </nav>
            <main>
                <h1>Hi, I'm <br />Megan Elizabeth!</h1>
                <h2>I'm a software developer located in Chicago, IL</h2>
                <img src={HomeImg} alt="girl sitting in a hammock working on a computer while a blue cat sleeps in her lap" className="home" />
            </main>
            <footer>
                <img src={Cat} alt="jumping orange tabby cat" className="jump" />
                <ul>
                    <li><a href="https://twitter.com/codewithmeg" className="social" id="twitter" target="_blank"></a></li>
                    <li><a href="https://www.linkedin.com/in/meganeday/" className="social" id="linkedin" target="_blank"></a></li>
                    <li><a href="https://github.com/meganeday" className="social" id="github"target="_blank"></a></li>
                    <li><a href="mailto:meganeday7@gmail.com" className="social" id="email"target="_blank"></a></li>
                    <li><a href="https://codewithmeg.medium.com/" className="social" id="medium"target="_blank"></a></li>
                </ul>
                <p className="copyright">Copyright 2021, Megan Elizabeth Day</p>
            </footer>
        </div>
    )
}

export default Home;
