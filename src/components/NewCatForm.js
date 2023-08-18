import React, { useState } from "react";

const NewCatForm = (props) => {

    const catDefaultState = {
        name: '',
        personality: '',
        color: '',
        petCount: 0
    }
    const [formData, setformData] = useState(catDefaultState)

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const newFormData = { ...formData, [fieldName]: fieldValue }
        setformData(newFormData)

    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const newcat = {
            name: formData.name,
            personality: formData.personality,
            color: formData.color,

        }
        props.onhandleSubmit(newcat);
        setformData(catDefaultState)
    }



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name' >Cat Name:</label>
                {/* the last one is the name of that input element */}
                <input id='name' type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='color' >Cat color:</label>
                {/* the last one is the name of that input element */}
                <input id='color' type="text" name="color" value={formData.color} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='personality' >Cat personality:</label>
                {/* the last one is the name of that input element */}
                <input id='personality' type="text" name="personality" value={formData.personality} onChange={handleChange} />
            </div>

            <div>
                <input type="submit" />
            </div>

        </form>
    )
}

export default NewCatForm