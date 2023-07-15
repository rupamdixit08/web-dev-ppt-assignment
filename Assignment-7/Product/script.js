const apiUrl = "https://fakestoreapi.com/products";
const productContainer = document.getElementById("productContainer");

fetch(apiUrl)
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    });
  })
  .catch(error => {
    console.error("Error fetching products:", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "An error occurred while fetching products.";
    productContainer.appendChild(errorMessage);
  });

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("productCard");

  const image = document.createElement("img");
  image.src = product.image;
  card.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = product.title;
  card.appendChild(title);

  const price = document.createElement("p");
  price.textContent = `$${product.price}`;
  card.appendChild(price);

  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";
  card.appendChild(addToCartButton);

  const buyNowButton = document.createElement("button");
  buyNowButton.textContent = "Buy Now";
  card.appendChild(buyNowButton);

  return card;
}
