let cartItemsObject;
onLoad()

function onLoad(){
    loadCartItemsObjects()
    displayCartItems()
}
function loadCartItemsObjects(){
    console.log(cartItems);
    cartItemsObject = cartItems.map(shoeID =>{
        for (let i = 0; i < shoesArray.length; i++) {
            if(shoeID==shoesArray[i].id){
                return shoesArray[i]
            }
        }
    })
    console.log(cartItemsObject);

}
function displayCartItems(){
    let containerEl = document.querySelector(".multipleCardContainInCart")

    let cardContent=''
    cartItemsObject.forEach(cartItems=>{
        cardContent+= generateShoeHtml(cartItems)
    })

    containerEl.innerHTML = cardContent
}
function generateShoeHtml(shoe) {
    return ` <div class="card">
                    <img src="${shoe.images}" alt="">
                    <div class="card-body">
                        <h2 class="card-title">${shoe.brand}  ${shoe.model}</h2>
                        <h4 class="card-subtitle">Color: ${shoe.color}</h4>
                        <p class="card-text"><strong>Sizes:</strong>${shoe.size[0]}, ${shoe.size[1]}, ${shoe.size[2]}, ${shoe.size[3]}</p>


                        <p class="price">₹${shoe.price} </p>

                    </div>
                    <p class="removeFromeCartBtn">x</p>
                </div>`
}