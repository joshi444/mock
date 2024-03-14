import React from "react";
import "./Card.css";

function Card({ eye, head, desc, link }) {
    const handleClick = () => {
        window.open(link, '_blank'); 
    };

    return (
        <div className="card"  onClick={handleClick}>
            <div className="card-body" >
                <p>{eye}</p>
                <h1>{head}</h1>
                <p>{desc}</p>
                <button className="card-button" onClick={handleClick}>
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default Card;
