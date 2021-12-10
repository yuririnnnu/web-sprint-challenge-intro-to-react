import React, { useState, useEffect } from "react";
import styled, {keyframes} from "styled-components";
import axios from "axios";


const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`

const StyledDetails = styled.div`
  opacity: 0;
  transform: scale(2) rotateZ(90deg);
  animation: ${kf} 0.5s ease-in-out forwards;
  background-color: white;
  
  
  p {
    color: ${props => props.theme.tertiaryColor};
  }
  h2 {
    color: ${props => props.theme.primaryColor};
  }
`

export default function Detail(props) {
    const { chars, close } = props;
    const [ details, setDetails ] = useState([]);
    
    useEffect(() => { axios.get(`${chars}`)
        .then(res => {console.log("This is printed!", res.data); 
                        console.log(chars)
                        setDetails(res.data);})
        .catch(err => {console.error(err);})
    },[chars])

    return (
        <StyledDetails className="detail">
            <h2>This is the detail!</h2>
            {
                details && 
                <>
                    <p>Name: {details.name} </p>
                    <p>Height: {details.height}</p>
                    <p>Gender: {details.gender}</p>
                    
                </>
            }
            <button onClick={close}>Close</button>
        </StyledDetails>
    )
}