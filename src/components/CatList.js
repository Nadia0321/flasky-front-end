import React from "react";
import Cat from "./Cat.js"
import propTypes from 'prop-types';

const CatList = ({ catData, onPetCat, onUnregisterCat, onDeleteAll }) => {
    // cats is input parameter that is the data of cats(catData)
    const getCatListJSX = (cats) => {
        return cats.map((cat) => {
            return (
                <Cat
                    id={cat.id}
                    name={cat.name}
                    caretaker={cat.caretaker}
                    color={cat.color}
                    personality={cat.personality}
                    pets={cat.petCount}
                    // we have to add keys in addition to id
                    key={cat.id}
                    // if I would use props i should have used props.onPetCat
                    onPetCat={onPetCat}
                    onUnregisterCat={onUnregisterCat}
                    onDeleteAll={onDeleteAll} />
            )
        })
    }
    return (
        <div>
            <h3> This is CatList, length is: {catData.length} </h3>
            <ul>
                {getCatListJSX(catData)}
            </ul>
        </div>

    );
}
// arrayOf is for arrays, shape of for objects
CatList.propTypes = {
    catData: propTypes.arrayOf(propTypes.shape({
        name: propTypes.string.isRequired,
        caretaker: propTypes.string.isRequired,
        color: propTypes.string.isRequired,
        personality: propTypes.string.isRequired,
        // please note that this is the input one not pets which is the defined variable here
        petCount: propTypes.number.isRequired,
        id: propTypes.number.isRequired
    }

    )).isRequired,

    onPetCat: propTypes.func.isRequired,
    onUnregisterCat: propTypes.func.isRequired,
    onDeleteAll: propTypes.func.isRequired

}







export default CatList;