const nav_part3 = document.querySelector(".nav-part3")
const menu = document.querySelector(".menu")
const cards_container = document.querySelector("#cards_container")

menu.addEventListener("click",()=>{
    nav_part3.classList.toggle('displayNavItems')
})

let cardContent =''
shoesArray.forEach(shoe=>{
    cardContent +=`<div class="card">
                <img src="${shoe.images}" alt="${shoe.model}">
                <div class="card-body">
                    <h2 class="card-title">${shoe.brand}  ${shoe.model} </h2>
                    <h4 class="card-subtitle">Color: ${shoe.color}</h4>
                    <p class="card-text"><strong>Sizes:</strong> ${shoe.size[0]}, ${shoe.size[1]}, ${shoe.size[2]}, ${shoe.size[3]}</p>
                    <p class="price">₹${shoe.price}</p>
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
                    <ion-icon name="add-circle-outline"></ion-icon>
                </div>
            </div>`
})

cards_container.innerHTML= cardContent