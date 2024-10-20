import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    squareFeet: '',
    bedrooms: '',
    bathrooms: '',
  });
  const [predictedRent, setPredictedRent] = useState(null);

  // Mocked linear regression prediction function
  const predictRent = (sqft, beds, baths) => {
    // Example formula: Rent = 500 + 0.8 * sqft + 300 * bedrooms + 150 * bathrooms
    const baseRent = 500;
    const rent = baseRent + 0.8 * sqft + 300 * beds + 150 * baths;
    return rent.toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rent = predictRent(
      parseFloat(formData.squareFeet),
      parseInt(formData.bedrooms),
      parseInt(formData.bathrooms)
    );
    setPredictedRent(rent);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Rent Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Square Feet:
            <input
              type="number"
              name="squareFeet"
              value={formData.squareFeet}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Bedrooms:
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Bathrooms:
            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">Predict Rent</button>
      </form>
      
      {predictedRent && (
        <div>
          <h2>Predicted Rent: ${predictedRent}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
