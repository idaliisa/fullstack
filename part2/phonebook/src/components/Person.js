import React from 'react';

const Person = (props) => {
    return (         
        <p>
        {props.person.name} {props.person.number}<button onClick={props.handleClick} id={props.person.id} name={props.person.name}>delete</button>
        </p>                                   
    )
}

export default Person