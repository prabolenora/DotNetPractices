const products = [
    {
        id: 1,
        name: "MSI Core i7 Laptop",
        price: 29.99,
        image: "assets/LAPM4314.jpg",
        selected:0
    },
    {
        id: 2,
        name: "MotherBoard 12Th Gen",
        price: 39.99,
        image: "assets/MBDA4290.jpg",
        selected:0
    },
    {
        id: 3,
        name: "JBL HeadSet",
        price: 19.99,
        image: "assets/LRAA1481.jfif",
        selected:0
    },
    {
        id: 4,
        name: "DDR 5 Ram",
        price: 49.99,
        image: "assets/HPHJ0934.jpg"
    },
    {
        id: 5,
        name: "MotherBoard 12Th Gen",
        price: 19.99,
        image: "assets/LRAA1481.jfif",
        selected:0
    },
    {
        id: 6,
        name: "DDR 5 Ram",
        price: 49.99,
        image: "assets/HPHJ0934.jpg",
        selected:0
    }
];

function displayProducts(products) {   
    const name1=document.getElementById('productName1');
    name1.textContent = products[0].name;
    const name2=document.getElementById('productName2');
    name2.textContent = products[1].name;
    const name3=document.getElementById('productName3');
    name3.textContent = products[2].name;
    const name4=document.getElementById('productName4');
    name4.textContent = products[3].name;
    const name5=document.getElementById('productName5');
    name5.textContent = products[4].name;
    const name6=document.getElementById('productName6');
    name6.textContent = products[5].name;

    const price1=document.getElementById('price1');
    price1.textContent = products[0].price;
    const price2=document.getElementById('price2');
    price2.textContent = products[1].price;
    const price3=document.getElementById('price3');
    price3.textContent = products[2].price;
    const price4=document.getElementById('price4');
    price4.textContent = products[3].price;
    const price5=document.getElementById('price5');
    price5.textContent = products[4].price;
    const price6=document.getElementById('price6');
    price6.textContent = products[5].price;

    const btn1=document.getElementById('btnRemove1');
    btn1.hidden=true;
    const btn2=document.getElementById('btnRemove2');
    btn2.hidden=true;
    const btn3=document.getElementById('btnRemove3');
    btn3.hidden=true;
    const btn4=document.getElementById('btnRemove4');
    btn4.hidden=true;
    const btn5=document.getElementById('btnRemove5');
    btn5.hidden=true;
    const btn6=document.getElementById('btnRemove6');
    btn6.hidden=true;
    

}

function addToCart(product) {
    products[product-1].selected=1;
    document.getElementById('lblName'+product).textContent = 'Product name : '+products[product-1].name;
    document.getElementById('lblCost'+product).textContent = 'Product price : '+products[product-1].price;
    const btn1=document.getElementById('btnRemove'+product);
    btn1.hidden=false;
}

function RemoveProduct(product) {
    products[product-1].selected=0;
    document.getElementById('lblName'+product).textContent = '';
    document.getElementById('lblCost'+product).textContent = '';
    const btn1=document.getElementById('btnRemove'+product);
    btn1.hidden=true;
}

displayProducts(products);
