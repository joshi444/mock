import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";

function Card() {
    const [data, setData] = useState([]);

    const handleClick = (url) => {
        window.open(url);
    };

    useEffect(() => {
        axios.get("https://run.mocky.io/v3/cb39edad-e67f-43f2-8e37-221251a7ea62")
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="card">
            {data.map((card, index) => (
                <div className="card-body" key={index}>
                    <p>{card.eye}</p>
                    <h1>{card.head}</h1>
                    <p>{card.desc}</p>
                    <button className="card-button" onClick={() => handleClick(card.link)}>
                        Learn More
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Card;
