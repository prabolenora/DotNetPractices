const products = [
    {
        id: 1,
        name: "MSI Core i7 Laptop",
        price: 29.99,
        image: "assets/LAPM4314.jpg",
        selected: 0
    },
    {
        id: 2,
        name: "MotherBoard 12Th Gen",
        price: 39.99,
        image: "assets/MBDA4290.jpg",
        selected: 0
    },
    {
        id: 3,
        name: "JBL HeadSet",
        price: 19.99,
        image: "assets/HPHJ0934.jpg",
        selected: 0
    },
    {
        id: 4,
        name: "DDR 5 Ram",
        price: 49.99,
        image: "assets/LRAA1481.jfif"
    },
    {
        id: 5,
        name: "Joystick",
        price: 19.99,
        image: "assets/JOYL0050.jpg",
        selected: 0
    },
    {
        id: 6,
        name: "Printer",
        price: 49.99,
        image: "assets/PREP3127.jpg",
        selected: 0
    }
];

window.onload = function exampleFunction(){
    
    document.getElementById("divMainContent").style.display = 'block';
    document.getElementById("divFilteredContent").style.display = 'none';
    displayProducts(products);
    }

function displayProducts(products) {
    const name1 = document.getElementById('productName1');
    name1.textContent = products[0].name;
    const name2 = document.getElementById('productName2');
    name2.textContent = products[1].name;
    const name3 = document.getElementById('productName3');
    name3.textContent = products[2].name;
    const name4 = document.getElementById('productName4');
    name4.textContent = products[3].name;
    const name5 = document.getElementById('productName5');
    name5.textContent = products[4].name;
    const name6 = document.getElementById('productName6');
    name6.textContent = products[5].name;

    const price1 = document.getElementById('price1');
    price1.textContent = products[0].price;
    const price2 = document.getElementById('price2');
    price2.textContent = products[1].price;
    const price3 = document.getElementById('price3');
    price3.textContent = products[2].price;
    const price4 = document.getElementById('price4');
    price4.textContent = products[3].price;
    const price5 = document.getElementById('price5');
    price5.textContent = products[4].price;
    const price6 = document.getElementById('price6');
    price6.textContent = products[5].price;

    const btn1 = document.getElementById('btnRemove1');
    btn1.hidden = true;
    const btn2 = document.getElementById('btnRemove2');
    btn2.hidden = true;
    const btn3 = document.getElementById('btnRemove3');
    btn3.hidden = true;
    const btn4 = document.getElementById('btnRemove4');
    btn4.hidden = true;
    const btn5 = document.getElementById('btnRemove5');
    btn5.hidden = true;
    const btn6 = document.getElementById('btnRemove6');
    btn6.hidden = true;
}

function addToCart(product) {
    products[product - 1].selected = 1;

    var output = document.getElementById("divCart");
    output.innerHTML += `<div class="card" id="cartProduct${product}"><div class="row" >
                            <div class="col-4">
                                <label>Product name : ${products[product - 1].name} </label> 
                            </div> 
                            <div class="col-4">
                                <label>Product price :${products[product - 1].price} </label> 
                            </div>
                            <div class="col-4">
                                <button class="btn btn-danger" id="btnRemove${product}" onclick="RemoveProduct(${product})">Remove</button>
                            </div>
                        </div></div>`;

}

function RemoveProduct(product) {
    products[product - 1].selected = 0;
    document.getElementById('cartProduct' + product).remove();
}

function searchProduct(producName){
    
    const productDetails = products.find(product => product.name === producName);
    document.getElementById("divFilteredContent").style.display = 'inline';
    var output = document.getElementById("divFilteredContent");
    console.log(productDetails);
    if(productDetails){
        output.innerHTML=`<div class="row">
            <div class="col-4">
                <div class="card" style="width: 20rem;">
                    <img id="imgFIlter" src="${productDetails.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 id="productNameFIlter">${productDetails.name}</h4>
                        <p id="priceFIlter">${productDetails.price}</p>
                        <input id="hfIdFIlter" type="hidden" value="${productDetails.id}">
                        <button onclick="addToCart(document.getElementById('hfIdFIlter').value)">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>`
    }else if(producName == null || producName ==""){
        output.innerHTML=``;
    }else{
        output.innerHTML=`<div class="row">
        <div class="col-4">
            <div class="card" style="width: 20rem;">                
                <div class="card-body">
                    <p id="priceFIlter"> Product not found</p>
                    
                </div>
            </div>
        </div>
    </div>`
    }

}

function filterSelection(criterion) {
    var output = document.getElementById("divCart");
    
    let filteredProducts;
    if (criterion.includes('-')) {
        const [min, max] = criterion.split('-').map(Number);
        filteredProducts = products.filter(product => product.price >= min && product.price <= max);
    } else {
        filteredProducts = products.filter(product => product.name === criterion);
    }
    console.log(filteredProducts);
    displayFilterProducts(filteredProducts);
}

function displayFilterProducts(products) {
    const name1 = document.getElementById('productNameFIlter');
    name1.textContent = products[0].name;
    const price1 = document.getElementById('priceFIlter');
    price1.textContent = products[0].price;
    const id1 = document.getElementById('hfIdFIlter');
    id1.textContent = products[0].id;
    const img1 = document.getElementById('imgFIlter');
    img1.textContent = products[0].image;
    document.getElementById("divMainContent").style.display = 'none';
    document.getElementById("divFilteredContent").style.display = 'block';
}