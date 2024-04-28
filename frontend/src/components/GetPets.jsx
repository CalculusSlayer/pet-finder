import React, { useState, useEffect } from 'react';

function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Function to fetch pet data
    const fetchPets = async () => {
      const response = await fetch('http://127.0.0.1:8000/pets');
      const text = await response.text();
      const rows = text.split('\n');
      
      // Parse CSV text
      const data = rows.slice(1).map(row => {
        const columns = row.split(',');
        return {
          name: columns[0],
          height: columns[1],
          breed: columns[2],
          color: columns[3],
          lastSeen: columns[4],
          latitude: columns[5],
          longitude: columns[6],
        };
      });
      
      setPets(data);
    };

    fetchPets();
  }, []);

  return (
    <div>
      <h1>Lost Pets</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Breed</th>
            <th>Color</th>
            <th>Last Seen</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, index) => (
            <tr key={index}>
              <td>{pet.name}</td>
              <td>{pet.height}</td>
              <td>{pet.breed}</td>
              <td>{pet.color}</td>
              <td>{pet.lastSeen}</td>
              <td>{pet.latitude}</td>
              <td>{pet.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PetList;
