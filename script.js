const API_URL = "https://dogapi.dog/api/v2";

// Fetch all breeds
fetch(`${API_URL}/breeds`)
  .then(response => response.json())
  .then(data => {
    console.log("Breeds:", data.data);
  });
