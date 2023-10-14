
const priceRange = document.getElementById('price-range');
const priceLabel = document.getElementById('price-label');

priceRange.addEventListener('input', updatePriceLabel);

function updatePriceLabel() {
    const selectedPrice = priceRange.value;
    priceLabel.textContent = `$0 - $${selectedPrice}`;
    filterProducts(); 
}

updatePriceLabel();
