document.getElementById('login-button').addEventListener('click', () => {
  loginWithDiscord();
});

const products = [
  { id: 1, name: "Web Hosting", price: 50, description: "1 Yıl Web Hosting Paketi" },
  { id: 2, name: "VPS Hosting", price: 100, description: "VPS Hosting Paketi" },
  { id: 3, name: "Domain Name", price: 10, description: "Domain Satışı" },
];

function displayProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>${product.price} TL</strong></p>
      <button onclick="addToCart(${product.id})">Sepete Ekle</button>
    `;
    productList.appendChild(productElement);
  });
}

function addToCart(productId) {
  alert(`Ürün ${productId} sepete eklendi!`);
}

function loginWithDiscord() {
  window.location.href = 'https://discord.com/oauth2/authorize?client_id=YOUR_DISCORD_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify';
}

displayProducts();
