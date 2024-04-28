import React, { useState } from 'react';

function PetForm() {
    const [formData, setFormData] = useState({
        name: '',
        height: '',
        breed: '',
        color: '',
        lastSeen: '',
        latitude: '',
        longitude: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // URL of the FastAPI endpoint
        const url = 'http://127.0.0.1:8000/submit-pet';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log('Server Response:', result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="height">Height:</label>
                <input
                    type="text"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="breed">Breed:</label>
                <input
                    type="text"
                    id="breed"
                    name="breed"
                    value={formData.breed}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="color">Color:</label>
                <input
                    type="text"
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="lastSeen">Last Seen:</label>
                <input
                    type="date"
                    id="lastSeen"
                    name="lastSeen"
                    value={formData.lastSeen}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="latitude">Latitude:</label>
                <input
                    type="text"
                    id="latitude"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="longitude">Longitude:</label>
                <input
                    type="text"
                    id="longitude"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" style={{ backgroundColor: 'white', color: 'black' }}>Submit</button>
        </form>
    );
}

export default PetForm;
