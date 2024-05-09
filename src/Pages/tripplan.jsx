import React, { useState } from 'react';

function TripPlanner() {
  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState('');

  const handleAddDestination = () => {
    if (newDestination.trim() !== '') {
      setDestinations([...destinations, newDestination]);
      setNewDestination('');
    }
  };

  const handleRemoveDestination = (index) => {
    const updatedDestinations = [...destinations];
    updatedDestinations.splice(index, 1);
    setDestinations(updatedDestinations);
  };

  return (
    <div>
      <h1>Plan Perjalanan Anda di Jawa Tengah</h1>
      <div>
        <input
          type="text"
          value={newDestination}
          onChange={(e) => setNewDestination(e.target.value)}
          placeholder="Tambah Destinasi"
        />
        <button onClick={handleAddDestination}>Tambah</button>
      </div>
      <ul>
        {destinations.map((destination, index) => (
          <li key={index}>
            {destination}
            <button onClick={() => handleRemoveDestination(index)}>Hapus</button>
          </li>
        ))}
      </ul>
      <button onClick={() => alert("Rencana perjalanan Anda: " + destinations.join(', '))}>
        Selesai dan Simpan
      </button>
    </div>
  );
}

export default TripPlanner;
