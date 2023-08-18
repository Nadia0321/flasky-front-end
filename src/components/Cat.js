import React, { useState } from 'react';
import propTypes from 'prop-types';

// the captal letter shows it is a component
const Cat = (props) => {


    return (

        <div>
            <h3> name: {props.name} </h3>
            <h3> caretaker: {props.caretaker} </h3>
            <h3> color: {props.color} </h3>
            <h3> personality: {props.personality} </h3>
            <h3> pets: {props.pets} </h3>
            <h3> id: {props.id} </h3>


            {/* we can use increasePets instead of the whole things */}
            <button onClick={() => props.onPetCat(props.id)}> Pet Cat</button>
            <button onClick={() => props.onUnregisterCat(props.id)}> Delete Cat</button>
            <button onClick={() => props.onDeleteAll(props.id)}> Delete all Cats</button>
        </div>
    );
}

// fnc_name.propTypes
Cat.propTypes = {
    name: propTypes.string.isRequired,
    caretaker: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
    personality: propTypes.string.isRequired,
    pets: propTypes.number.isRequired,
    id: propTypes.number.isRequired,
    onPetCat: propTypes.func.isRequired,
    onUnregisterCat: propTypes.func.isRequired,
    onDeleteAll: propTypes.func.isRequired
}

export default Cat;