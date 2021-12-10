// Write your Character component here
import React from 'react';
import styled from "styled-components";

const Styling = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    button{
        margin-left: 10px;
        background-color: lightgray;
        border-radius: 5px;
    }
`

export default function Character ({info, action}) {
    // console.log("Info url: ", info.name)
    return (
        <Styling>
            <p>{info.name}</p>
            <button onClick={() => action(info.url)}>
                See Details
            </button>
        </Styling>
        
    )
}