import React from 'react';
import Person from './Person'

const Persons = (props) => {
    return (
        <div>          
            {props.persons.map(person =>                  
                <Person key={person.name} person = {person} handleClick={props.handleClick}/>        
            )}         
        </div>
    )
}

export default Persons