document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("product-container");

    // Replace with your actual GitHub Pages JSON URL
    const jsonUrl = "https://13shourya.github.io/json-data/data.json";

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");

                productDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/150'">
                <h2>${item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>description: ${item.description}</p>
            `;
            

                container.appendChild(productDiv);
            });
        })
        .catch(error => console.error("Error fetching JSON:", error));
});
