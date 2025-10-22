const plants = [
  { name: "Fiddle Leaf Fig", price: "د.إ 129", img: "images/1.jpg" },
  { name: "Snake Plant", price: "د.إ 89", img: "images/2.jpeg" },
  { name: "Peace Lily", price: "د.إ 69", img: "images/3.jpg" },
  { name: "Areca Palm", price: "د.إ 119", img: "images/4.jpg" },
];

const terrariums = [
  { name: "Mini Glass Terrarium", price: "د.إ 149", img: "images/5.jpeg" },
  { name: "Moss Globe", price: "د.إ 99", img: "images/6.jpeg" },
  { name: "Zen Terrarium", price: "د.إ 129", img: "images/7.jpg" },
  { name: "Geometric Terrarium", price: "د.إ 179", img: "images/8.jpeg" },
];

function loadProducts(sectionId, items) {
  const container = document.getElementById(sectionId);
  items.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p class="price">${p.price}</p>
      <button class="btn">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

loadProducts("plants", plants);
loadProducts("terrariums", terrariums);

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function() {
  const query = this.value.toLowerCase();
  document.querySelectorAll(".product-card").forEach(card => {
    const productName = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = productName.includes(query) ? "block" : "none";
  });
});
