import React from 'react';

import './card-list.style.css'

export const CardList = (props) => {
    console.log(props)
    return (
        <div className='card-list'>
            {
                props.cards.map(card => (
                    <h1 id={card.id}> {card.name} </h1>
                ))
            }
        </div>
    )
}