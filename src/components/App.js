// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch a random dog image when the component mounts
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // the image URL is in data.message
        setLoading(false);         // finished loading
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false);         // error, but stop loading
      });
  }, []); // empty dependency array to run once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {dogImage && (
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: "100%", height: "auto" }} />
      )}
    </div>
  );
}

export default App;
