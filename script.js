document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menuNav = document.querySelector(".menu_nav");
    const searchContainer = document.querySelector(".search-container");
    const searchBar = document.getElementById("search");

    hamburger?.addEventListener("click", function () {
        hamburger.classList.toggle("open");

        if (menuNav?.classList.contains("active")) {
            menuNav.classList.remove("active");
            menuNav.style.display = "none";
        } else {
            menuNav.style.display = "flex";
            menuNav?.classList.add("active");
            menuNav.style.zIndex = "1000";
            menuNav.style.position = "absolute"; 
        }
    });
});

const apiUrl = 'https://potterhead-api.vercel.app/api/spells'; // URL da API de feitiços
const cardsContainer = document.getElementById('cards-container');

const backgroundImages = [
    "./img/cards/fundo_card_1.jpg",
    "./img/cards/fundo_card_2.jpg",
    "./img/cards/fundo_card_3.jpg",
    "./img/cards/fundo_card_4.jpg",
    "./img/cards/fundo_card_5.jpg",
    "./img/cards/fundo_card_6.jpg",
    "./img/cards/fundo_card_7.jpg",
    "./img/cards/fundo_card_8.jpg",
    "./img/cards/fundo_card_9.jpg",
    "./img/cards/fundo_card_10.jpg",
    "./img/cards/fundo_card_11.jpg",
    "./img/cards/fundo_card_12.jpg",
    "./img/cards/fundo_card_13.jpg",
    "./img/cards/fundo_card_14.jpg",
    "./img/cards/fundo_card_15.jpg",
    "./img/cards/fundo_card_16.jpg",
    "./img/cards/fundo_card_17.jpg",
    "./img/cards/fundo_card_18.jpg",
    "./img/cards/fundo_card_19.jpg",
    "./img/cards/fundo_card_20.jpg",
    "./img/cards/fundo_card_21.jpg",
    "./img/cards/fundo_card_22.jpg",
    "./img/cards/fundo_card_23.jpg",
    "./img/cards/fundo_card_24.jpg",
    "./img/cards/fundo_card_25.jpg"
];

let usedImages = [];

function getUniqueRandomImage() {
    if (usedImages.length === backgroundImages.length) {
        usedImages = [];
    }

    let randomIndex;
    let randomImage;

    do {
        randomIndex = Math.floor(Math.random() * backgroundImages.length);
        randomImage = backgroundImages[randomIndex];
    } while (usedImages.includes(randomImage));

    usedImages.push(randomImage);
    return randomImage;
}

async function fetchSpells() {
    try {
        const response = await fetch(apiUrl);
        const spells = await response.json();

        cardsContainer.innerHTML = ''; 

        spells.forEach(spell => {
            const card = document.createElement('div');
            card.classList.add('card');

            const randomImage = getUniqueRandomImage();
            card.style.backgroundImage = `url(${randomImage})`;

            card.style.transition = 'background-image 6s ease, transform 1s ease-in-out';

            card.innerHTML = `
                <h3>${spell.name}</h3>
                <p><strong>Descrição:</strong> ${spell.description}</p>
            `;
            cardsContainer.appendChild(card);
        });

        changeCardBackground();
    } catch (error) {
        console.error('Erro ao buscar os feitiços:', error);
    }
}

function changeCardBackground() {
    setInterval(() => {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const randomImage = getUniqueRandomImage();
            card.style.backgroundImage = `url(${randomImage})`;
        });
    }, 9000);
}

function searchSpell() {
    const query = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = name.includes(query) ? 'block' : 'none';
    });
}

fetchSpells(); 
