import React, { setState, setEffect } from "react";
import axios from "axios";

export default function Detail(props) {
    const { curChar, close } = props;
    const [ details, setDetails] = setState([]);
    const page = 1;
    setEffect(()=>{
        axios.get(`https://swapi.dev/api/people/?page=${page}`)
        .then(res => {
            console.log(res.data);
            setDetails(res.data);
        })
        .catch(err => {
            console.error(err);
        })
    },[])

    return (
        <div className="App">
            {
                details && 
                <>
                    <p>{details.name}
                    {details.height}
                    </p>
                    <button onClick={close}>Close</button>
                </>
            }
        </div>
    )
}