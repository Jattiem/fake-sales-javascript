fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data =>{
    console.log(data);
    renderProducts(data)

})

function renderProducts(products){
    let productContainer = document.querySelector('#products-container');
    //Clear Containr
    productContainer.innerHTML = '';
    //Loop over products and write them to the page
    products.forEach(product => {
        productContainer.innerHTML += `
        <div class= "product">
        <img src = "${product.image}" class="product-image">
        <div class= "product-content">
        <h4 class="product-title">${product.title}</h4>
        <p class = "product-desc">${product.description}</p>
        <p class="product-price">R${product.price}</p>
        </div>
        </div>`
    });

}