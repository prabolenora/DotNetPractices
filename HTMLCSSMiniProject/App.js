const products = [
    {
        id: 1,
        name: "MSI Core i7 Laptop",
        price: 29.99,
        image: "assets/LAPM4314.jpg"
    },
    {
        id: 2,
        name: "MotherBoard 12Th Gen",
        price: 39.99,
        image: "assets/MBDA4290.jpg"
    },
    {
        id: 3,
        name: "JBL HeadSet",
        price: 19.99,
        image: "assets/LRAA1481.jfif"
    },
    {
        id: 4,
        name: "DDR 5 Ram",
        price: 49.99,
        image: "assets/HPHJ0934.jpg"
    },
    {
        id: 3,
        name: "MotherBoard 12Th Gen",
        price: 19.99,
        image: "assets/LRAA1481.jfif"
    },
    {
        id: 4,
        name: "DDR 5 Ram",
        price: 49.99,
        image: "assets/HPHJ0934.jpg"
    },
    {
        id: 3,
        name: "Logitech JoyStick",
        price: 19.99,
        image: "assets/LRAA1481.jfif"
    },
    {
        id: 4,
        name: "Epson InkTank Printer",
        price: 49.99,
        image: "assets/HPHJ0934.jpg"
    }
];

function displayProducts(products) {   
    const name1=document.getElementById('productName1');
    name1.textContent = products[1].name;
    const name2=document.getElementById('productName2');
    name2.textContent = products[2].name;
    const name3=document.getElementById('productName3');
    name3.textContent = products[3].name;
    const name4=document.getElementById('productName4');
    name4.textContent = products[4].name;
    const name5=document.getElementById('productName5');
    name5.textContent = products[5].name;
    const name6=document.getElementById('productName6');
    name6.textContent = products[6].name;

    const price1=document.getElementById('price1');
    price1.textContent = products[1].price;
    const price2=document.getElementById('price2');
    price2.textContent = products[2].price;
    const price3=document.getElementById('price3');
    price3.textContent = products[3].price;
    const price4=document.getElementById('price4');
    price4.textContent = products[4].price;
    const price5=document.getElementById('price5');
    price5.textContent = products[5].price;
    const price6=document.getElementById('price6');
    price6.textContent = products[6].price;
    products.forEach(product => {
        // const name=document.getElementById('productName1');
        // name.textContent = product.name;
        // const productDiv = document.createElement('div');
        // productDiv.classList.add('product');

        // const productImage = document.createElement('img');
        // productImage.src = product.image;
        // productDiv.appendChild(productImage);

        // const productName = document.createElement('h2');
        // productName.textContent = product.name;
        // productDiv.appendChild(productName);

        // const productPrice = document.createElement('p');
        // productPrice.textContent = `$${product.price.toFixed(2)}`;
        // productDiv.appendChild(productPrice);

        // const addToCartButton = document.createElement('button');
        // addToCartButton.textContent = 'Add to Cart';
        // addToCartButton.addEventListener('click', () => addToCart(product));
        // productDiv.appendChild(addToCartButton);

        // productList.appendChild(productDiv);
    });
}

function addToCart(product) {
    alert(`Added ${product.name} to cart!`);
}

displayProducts(products);
