document.addEventListener("DOMContentLoaded", () => {
    const factElement = document.getElementById("fact");
    const fetchButton = document.getElementById("fetch-button");

    // Function to fetch cat fact using fetch API
    const fetchFacts = () => {
        fetch("https://catfact.ninja/fact")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data.fact);
                factElement.textContent = data.fact;
            })
            .catch((error) => {
                alert("Something went wrong");
                console.error(error);
            });
    };

    fetchFacts();

    // Fetch a new fact on button click
    fetchButton.addEventListener("click", fetchFacts);
});