import React from 'react';


export const Card = (props) => {
    console.log(props)
    return (
        <div>
            <h1 id={props.key}> {props.user.name} </h1>
        </div>
    )
}