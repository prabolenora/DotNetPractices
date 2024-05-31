const products = [
    {
        id: 1,
        name: "Product 1",
        price: 29.99,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 2,
        name: "Product 2",
        price: 39.99,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 3,
        name: "Product 3",
        price: 19.99,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 4,
        name: "Product 4",
        price: 49.99,
        image: "https://via.placeholder.com/200"
    }
];

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productDiv.appendChild(productImage);

        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price.toFixed(2)}`;
        productDiv.appendChild(productPrice);

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', () => addToCart(product));
        productDiv.appendChild(addToCartButton);

        productList.appendChild(productDiv);
    });
}

function addToCart(product) {
    alert(`Added ${product.name} to cart!`);
}

displayProducts(products);
