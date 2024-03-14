import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import "./Data.css"

function Data() {
    const [data, setData] = useState([]);

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
        <div className="data">
            {data.map((item) => (
                <Card
                  
                    eye={item.eye}
                    head={item.head}
                    desc={item.desc}
                    link={item.link}
                />
            ))}
        </div>
    );
}

export default Data;
