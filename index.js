"use strict";
console.log('hello');
var SmartphonState;
(function (SmartphonState) {
    SmartphonState["new"] = "nowy";
    SmartphonState["used"] = "u\u017Cywany";
})(SmartphonState || (SmartphonState = {}));
var SmartphonBrand;
(function (SmartphonBrand) {
    SmartphonBrand["samsung"] = "samsung";
    SmartphonBrand["apple"] = "apple";
    SmartphonBrand["xiaomi"] = "xiaomi";
    SmartphonBrand["oneplus"] = "oneplus";
    SmartphonBrand["other"] = "inne";
})(SmartphonBrand || (SmartphonBrand = {}));
var SmartphonColors;
(function (SmartphonColors) {
    SmartphonColors["black"] = "czarny";
    SmartphonColors["white"] = "bia\u0142y";
    SmartphonColors["blue"] = "niebieski";
    SmartphonColors["green"] = "zielony";
    SmartphonColors["red"] = "czerwony";
})(SmartphonColors || (SmartphonColors = {}));
let smartphones = [
    {
        brand: SmartphonBrand.samsung,
        name: "Samsung galaxy S24 Ultra",
        price: 5000,
        size: '6,2"',
        memory: 256,
        color: SmartphonColors.black,
        state: SmartphonState.new,
        photo: "img/s24ultra.jpg"
    },
    {
        brand: SmartphonBrand.samsung,
        name: "Samsung galaxy S24",
        price: 4500,
        size: '6,0"',
        memory: 128,
        color: SmartphonColors.white,
        state: SmartphonState.new,
        photo: "img/s24.jpg",
    },
    {
        brand: SmartphonBrand.samsung,
        name: "Samsung galaxy S23 Ultra",
        price: 4000,
        size: '6,2"',
        memory: 128,
        color: SmartphonColors.black,
        state: SmartphonState.new,
        photo: "img/s23ultra.webp",
    },
    {
        brand: SmartphonBrand.apple,
        name: "Iphone 12",
        price: 2800,
        size: '5,8"',
        memory: 64,
        color: SmartphonColors.red,
        state: SmartphonState.used,
        photo: "img/iphone12.png",
    },
    {
        brand: SmartphonBrand.xiaomi,
        name: "Xiaomi 14",
        price: 4000,
        size: '6,2"',
        memory: 256,
        color: SmartphonColors.green,
        state: SmartphonState.new,
        photo: "img/Xiaomi14.webp",
    },
];
const priceRanges = ["0 - 1000 zł", "1001 - 2000 zł", "2001 - 3000 zł", "Powyżej 3000 zł"];
const memoryOptions = ["64 GB", "128 GB", "256 GB"];
// Funkcja wypełniająca istniejące listy checkboxami
function fillLists() {
    // Dodanie checkboxów dla marek
    const brandList = document.querySelector(".brand");
    if (brandList) {
        Object.values(SmartphonBrand).forEach(brand => {
            const listItem = document.createElement("li");
            listItem.classList.add("brand__item");
            listItem.innerHTML = `<input type="checkbox" class="filter-checkbox"> <span>${brand}</span>`;
            brandList.appendChild(listItem);
        });
    }
    // Dodanie checkboxów dla zakresów cen
    const priceList = document.querySelector(".price__list");
    if (priceList) {
        priceRanges.forEach((priceRange) => {
            const listItem = document.createElement("li");
            listItem.classList.add("price__list-item");
            listItem.innerHTML = `<input type="checkbox" class="filter-checkbox"> <span>${priceRange} zł</span>`;
            priceList.appendChild(listItem);
        });
    }
    // Dodanie checkboxów dla kolorów
    const colorList = document.querySelector(".color__list");
    if (colorList) {
        Object.values(SmartphonColors).forEach(color => {
            const listItem = document.createElement("li");
            listItem.classList.add("color__list-item");
            listItem.innerHTML = `<input type="checkbox" class="filter-checkbox"> <span>${color}</span>`;
            colorList.appendChild(listItem);
        });
    }
    // Dodanie checkboxów dla stanu
    const stateList = document.querySelector(".state__list");
    if (stateList) {
        Object.values(SmartphonState).forEach(state => {
            const listItem = document.createElement("li");
            listItem.classList.add("state__list-item");
            listItem.innerHTML = `<input type="checkbox" class="filter-checkbox"> <span>${state}</span>`;
            stateList.appendChild(listItem);
        });
    }
    const memoryList = document.querySelector(".memory__list");
    if (memoryList) {
        memoryOptions.forEach(memory => {
            const listItem = document.createElement("li");
            listItem.classList.add("memory__list-item");
            listItem.innerHTML = `<input type="checkbox" class="filter-checkbox"> <span>${memory}</span>`;
            memoryList.appendChild(listItem);
        });
    }
}
function fillSmartphones() {
    // Pobieramy kontener, w którym będą wyświetlane smartfony
    const smartphonesSection = document.querySelector(".smartphones");
    // Iterujemy przez tablicę smartfonów i tworzymy dla nich odpowiednie elementy HTML
    if (smartphonesSection !== null) {
        smartphones.forEach(smartphone => {
            // Tworzymy elementy HTML dla każdego smartfona
            const smartphoneDiv = document.createElement("div");
            smartphoneDiv.classList.add("smartphone");
            const img = document.createElement("img");
            img.classList.add("smartphone__img");
            img.src = smartphone.photo;
            img.alt = smartphone.name;
            const detailsDiv = document.createElement("div");
            detailsDiv.classList.add("smartphone__details");
            const nameH2 = document.createElement("h2");
            nameH2.textContent = smartphone.name;
            const priceSpan = document.createElement("span");
            priceSpan.classList.add("price");
            priceSpan.textContent = `${smartphone.price} zł`;
            const attributesP = document.createElement("p");
            attributesP.classList.add("attributes");
            attributesP.textContent = `Kolor: ${smartphone.color} Przekątna ekranu: ${smartphone.size} Wbudowana pamięć: ${smartphone.memory}GB`;
            // Dodajemy elementy do kontenera smartfona
            detailsDiv.appendChild(nameH2);
            detailsDiv.appendChild(priceSpan);
            detailsDiv.appendChild(attributesP);
            smartphoneDiv.appendChild(img);
            smartphoneDiv.appendChild(detailsDiv);
            // Dodajemy kontener smartfona do sekcji smartfonów
            smartphonesSection.appendChild(smartphoneDiv);
        });
    }
}
function filterSmartphones() {
    const searchText = document.querySelector('.browser').value.toLowerCase();
    const regex = new RegExp(searchText, 'i');
    console.log('Ceny telefonów:', smartphones.map(smartphone => smartphone.price));
    // Pobieramy zaznaczone checkboxy dla marek
    const selectedBrands = Array.from(document.querySelectorAll(".brand__item input:checked")).map(checkbox => {
        const nextSibling = checkbox.nextElementSibling;
        return nextSibling ? nextSibling.textContent : null;
    }).filter(value => value !== null);
    // Pobieramy zaznaczone checkboxy dla zakresów cenowych
    const selectedPriceRanges = Array.from(document.querySelectorAll(".price__list-item input:checked")).map(checkbox => {
        var _a;
        const range = (_a = checkbox.nextElementSibling) === null || _a === void 0 ? void 0 : _a.textContent;
        console.log('Range:', range);
        if (range && typeof range === 'string') {
            if (range.includes('Powyżej 3000')) {
                const minPrice = parseInt(range.split(' ')[2]) || 3000;
                return {
                    minPrice,
                    maxPrice: Infinity
                };
            }
            else {
                const [minPriceStr, maxPriceStr] = range.split(' - ');
                if (minPriceStr && maxPriceStr) {
                    const minPrice = parseInt(minPriceStr);
                    const maxPrice = parseInt(maxPriceStr);
                    return {
                        minPrice,
                        maxPrice
                    };
                }
            }
        }
        return null;
    }).filter(value => value !== null);
    console.log('Selected price ranges:', selectedPriceRanges);
    // Pobieramy zaznaczone checkboxy dla kolorów
    const selectedColors = Array.from(document.querySelectorAll(".color__list-item input:checked")).map(checkbox => {
        const nextSibling = checkbox.nextElementSibling;
        return nextSibling ? nextSibling.textContent : null;
    }).filter(value => value !== null);
    // Pobieramy zaznaczone checkboxy dla stanu
    const selectedStates = Array.from(document.querySelectorAll(".state__list-item input:checked")).map(checkbox => {
        const nextSibling = checkbox.nextElementSibling;
        return nextSibling ? nextSibling.textContent : null;
    }).filter(value => value !== null);
    // Pobieramy zaznaczone checkboxy dla pamięci
    const selectedMemoryOptions = Array.from(document.querySelectorAll(".memory__list-item input:checked")).map(checkbox => {
        const nextSibling = checkbox.nextElementSibling;
        return nextSibling ? nextSibling.textContent : null;
    }).filter(value => value !== null);
    // Filtrujemy tablicę smartfonów na podstawie zaznaczonych wartości
    const filteredSmartphones = smartphones.filter(smartphone => (selectedBrands.length === 0 || selectedBrands.includes(smartphone.brand)) &&
        (selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
            return smartphone.price >= range.minPrice && smartphone.price <= range.maxPrice;
        })) &&
        (selectedColors.length === 0 || selectedColors.includes(smartphone.color)) &&
        (selectedStates.length === 0 || selectedStates.includes(smartphone.state)) &&
        (selectedMemoryOptions.length === 0 || selectedMemoryOptions.includes(`${smartphone.memory} GB`)) &&
        (regex.test(smartphone.name.toLowerCase())) // Używamy wyrażenia regularnego do sprawdzenia, czy nazwa smartfona pasuje do wyszukiwanego tekstu
    );
    console.log('Filtered smartphones:', filteredSmartphones);
    // Usuwamy wszystkie wyświetlane smartfony
    const smartphonesSection = document.querySelector(".smartphones");
    if (smartphonesSection !== null) {
        smartphonesSection.innerHTML = "";
    }
    // Wyświetlamy tylko wyfiltrowane smartfony
    filteredSmartphones.forEach(smartphone => {
        const smartphoneDiv = document.createElement("div");
        smartphoneDiv.classList.add("smartphone");
        const img = document.createElement("img");
        img.classList.add("smartphone__img");
        img.src = smartphone.photo;
        img.alt = smartphone.name;
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("smartphone__details");
        const nameH2 = document.createElement("h2");
        nameH2.textContent = smartphone.name;
        const priceSpan = document.createElement("span");
        priceSpan.classList.add("price");
        priceSpan.textContent = `${smartphone.price} zł`;
        const attributesP = document.createElement("p");
        attributesP.classList.add("attributes");
        attributesP.textContent = `Kolor: ${smartphone.color} Przekątna ekranu: ${smartphone.size} Wbudowana pamięć: ${smartphone.memory}GB`;
        detailsDiv.appendChild(nameH2);
        detailsDiv.appendChild(priceSpan);
        detailsDiv.appendChild(attributesP);
        smartphoneDiv.appendChild(img);
        smartphoneDiv.appendChild(detailsDiv);
        if (smartphonesSection) {
            smartphonesSection.appendChild(smartphoneDiv);
        }
    });
}
// Add event listener for checkbox changes
document.addEventListener("DOMContentLoaded", function () {
    fillLists(); // Populate lists with checkboxes
    fillSmartphones(); // Populate the smartphones section
    // Listen for changes to any checkbox
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', filterSmartphones);
    });
    const searchInput = document.querySelector('.browser');
    if (searchInput) {
        searchInput.addEventListener('input', filterSmartphones);
    }
});
