/*Add products to products section*/
const productsSection = document.getElementById("productData");
productsSection.innerHTML += productData
  .map((product) => {
    return `
    <div class="product-section product-section3 col-lg-3 col-12"
    data-product="${product.id}"
    data-prod-id="${product.id}"
    data-product-category="Garden"
    data-product-title="${product.name}"
    data-product-alias=""
    data-product-description="${product.description}"
    data-product-price="${product.price.toFixed(2)}"
    data-product-shipping="${product.shipping.toFixed(2)}"
    data-product-billmodel="1"
    data-product-multiprice="no"
    data-product-id="${product.id}"
    data-product-size-option="no"
    data-product-image-link="./images/products/${product.image}">
    <div class="product-block">
        <img class="prod_img3" src="/images/products/${product.image}">
        <div class="product-details">
            <!-- p class="prod_category3 primary-text-color"> <span> One Time Sale </span> </p -->
            <h5 class="product-title product-name3">${product.name}</h5>
            <div class="price-cell">
                <p class="prod_price3">
                    <span> $${product.price} </span>
                </p>
                <a href="${product.href}" class="btn_shop btn_shop3" >
                    <button class="btn shop-btn-color"><i class="bi bi-plus"></i>Discover</button>
                </a>
            </div>
        </div>
    </div>
</div>
    `;
  })
  .join("");
