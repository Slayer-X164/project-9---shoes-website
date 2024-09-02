const nav_part3 = document.querySelector(".nav-part3")
const menu = document.querySelector(".menu")
const cards_container = document.querySelector("#cards_container")
const menu2 = document.querySelector("#menu2")
const cart = document.querySelector(".cart")
let cartItems;

onLoad()

function onLoad(){
    let cartItemsString = localStorage.getItem("cartItems")
    cartItems = cartItemsString ? JSON.parse(cartItemsString) : []
    displayItemsOnHomePage()
    displaySideBar()
    hideSideBar()
}

function addToCart(shoe) {
    cartItems.push(shoe)
    console.log(cartItems);
    localStorage.setItem("cartItems",JSON.stringify(cartItems))

}

function displayItemsOnHomePage() {
    if(!cards_container){
        return;
    }
    let cardContent =''
    shoesArray.forEach(shoe=>{
        cardContent +=`<div class="card">
                    <img src="${shoe.images}" alt="${shoe.model}">
                    <div class="card-body">
                        <h2 class="card-title">${shoe.brand}  ${shoe.model} </h2>
                        <h4 class="card-subtitle">Color: ${shoe.color}</h4>
                        <p class="card-text"><strong>Sizes:</strong> ${shoe.size[0]}, ${shoe.size[1]}, ${shoe.size[2]}, ${shoe.size[3]}</p>

                        <p class="card-text in-stock">${shoe.inStock} </p>
                        <div class="rating">
                            Rating: (${shoe.rating})
                        </div>
                        <div class="reviews">
                            ${shoe.reviewsCount} Reviews
                        </div>
                        <div class="categories">
                            <span>${shoe.categories[0]}</span>
                        </div>
                        <p class="price">₹${shoe.price}</p>
                        <ion-icon name="add-circle-outline" onclick='addToCart(${shoe.id})'></ion-icon>
                    </div>
                </div>`
    })

    cards_container.innerHTML= cardContent
}

function displaySideBar(){
    menu.addEventListener("click",()=>{
        nav_part3.style.display = "flex"
        // menu.style.display = "none"
    })
}

function hideSideBar(){
    menu2.addEventListener("click",()=>{
        nav_part3.style.display = "none"
    })
}
