const API_URL = "https://dogapi.dog/api/v2";

// Part 1 & 2: Fetch all breeds with error handling
async function fetchBreeds() {
  try {
    const response = await fetch(`${API_URL}/breeds`);
    if (!response.ok) throw new Error("Failed to fetch breeds");

    const data = await response.json();
    displayBreeds(data.data);

  } catch (error) {
    console.error("Error fetching breeds:", error);
  }
}

// Display breed list and add click events
function displayBreeds(breeds) {
  const list = document.getElementById("breedList");
  list.innerHTML = "";

  breeds.forEach(breed => {
    const li = document.createElement("li");
    li.textContent = breed.attributes.name;

    li.addEventListener("click", () => {
      fetchBreedDetails(breed.id);
    });

    list.appendChild(li);
  });
}

// Part 3: Fetch breed details
async function fetchBreedDetails(id) {
  try {
    const response = await fetch(`${API_URL}/breeds/${id}`);
    if (!response.ok) throw new Error("Failed to fetch breed details");

    const data = await response.json();
    displayBreedDetails(data.data);

  } catch (error) {
    console.error(error);
  }
}

// Display breed details
function displayBreedDetails(breed) {
  const details = document.getElementById("breedDetails");
  details.innerHTML = `
    <h3>${breed.attributes.name}</h3>
    <p>${breed.attributes.description || "No description available."}</p>
  `;
}

// Part 5: Fetch dog facts
async function fetchDogFacts() {
  try {
    const response = await fetch(`${API_URL}/facts`);
    if (!response.ok) throw new Error("Failed to fetch facts");

    const data = await response.json();
    const list = document.getElementById("factsList");
    list.innerHTML = "";

    data.data.forEach(fact => {
      const li = document.createElement("li");
      li.textContent = fact.attributes.body;
      list.appendChild(li);
    });

  } catch (error) {
    console.error(error);
  }
}

// Initialize app
fetchBreeds();
fetchDogFacts();
