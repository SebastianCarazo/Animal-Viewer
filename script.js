// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Sample data for dogs
    const dogs = [
        {
            name: "Labrador Retriever",
            scientificName: "Canis lupus familiaris",
            habitat: "Domestic",
            behavior: "Friendly and outgoing",
            diet: "Omnivorous",
            anatomy: "Medium-sized, short coat",
            mating: "Breeding occurs twice a year",
            image: "images/labrador.jpg"
        },
        {
            name: "German Shepherd",
            scientificName: "Canis lupus familiaris",
            habitat: "Domestic",
            behavior: "Intelligent and versatile",
            diet: "Omnivorous",
            anatomy: "Large-sized, double coat",
            mating: "Breeding occurs twice a year",
            image: "images/german_shepherd.jpg"
        }
        // Add more dog objects as needed
    ];

    // Popula

    // Display dog details
    const dogDetails = document.getElementById('dog-details');
    dogs.forEach(dog => {
        const section = document.createElement('section');
        section.innerHTML = `
            <h3>${dog.name}</h3>
            <p><strong>Scientific Name:</strong> ${dog.scientificName}</p>
            <p><strong>Habitat:</strong> ${dog.habitat}</p>
            <p><strong>Behavior:</strong> ${dog.behavior}</p>
            <p><strong>Diet:</strong> ${dog.diet}</p>
            <p><strong>Anatomy:</strong> ${dog.anatomy}</p>
            <p><strong>Mating:</strong> ${dog.mating}</p>
        `;
        dogDetails.appendChild(section);
    });

    // Search functionality
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('keyup', e => {
        const term = e.target.value.toLowerCase();
        const sections = dogDetails.getElementsByTagName('section');
        Array.from(sections).forEach(section => {
            const title = section.getElementsByTagName('h3')[0].innerText.toLowerCase();
            if (title.indexOf(term) !== -1) {
                section.style.display = '';
            } else {
                section.style.display = 'none';
            }
        });
    });
});
