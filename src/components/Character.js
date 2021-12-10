// Write your Character component here
import React from 'react';

export default function Character ({info, action}) {
    return (
        <div>
            {info.name}
            <button onClick={()=>action(info.id)}>
                See Details
            </button>
        </div>
        
    )
}