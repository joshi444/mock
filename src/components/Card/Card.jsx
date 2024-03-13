import React from "react";
import "./Card.css";

function Card() {

    const handleClick = () => {
        window.open("https://www.w3schools.com/ai/ai_whatis.asp")
    }


    return(
        <div className="card">
              <div className="card-body">
                <p>ARTIFICIAL INTELLIGENCE</p>
                <h1>Explore AI Solutions</h1>
                <p>Discover how ai can transfrom your business operations and drive 
                    innovation and enhancing the human experiences
                </p>
                <button className="card-button" onClick={handleClick}>Learn More</button>
              </div>
        </div>
    )
}

export default Card;