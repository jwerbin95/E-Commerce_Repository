class Product {
	constructor(price, productName, picture) {
		this.price=price
		this.productName=productName
		this.picture=picture
	}
}

let productList1 = [
	new Product(24.95, "Boot One", "./images/boots1.jpg"),
	new Product(24.95, "Boot Two", "./images/boots2.jpeg"),
	new Product(24.95, "Boot Three", "./images/boots3.jpg")
]
let productList2 = [
	new Product(24.95, "Pants One", "./images/pants1.jpeg"),
	new Product(24.95, "Pants Two", "./images/pants2.jpg"),
	new Product(24.95, "Pants Three", "./images/pants3.jpeg")
]
let productList3 = [
	new Product(24.95, "Shirt One", "./images/shirts1.jpg"),
	new Product(24.95, "Shirt Two", "./images/shirts2.jpg"),
	new Product(24.95, "Shirt Three", "./images/shirts3.jpeg")
]
let productList4 = [
	new Product(24.95, "Sock One", "./images/sock1.jpg"),
	new Product(24.95, "Sock Two", "./images/sock2.jpg"),
	new Product(24.95, "Sock Three", "./images/sock3.jpg")
]
let productList5 = [
	new Product(24.95, "Jacket One", "./images/jacket1.jpg"),
	new Product(24.95, "Jacket Two", "./images/jacket2.jpg"),
	new Product(24.95, "Jacket Three", "./images/jacket3.jpeg")
]
let productList6 = [
	new Product(24.95, "Hat One", "./images/hats1.jpg"),
	new Product(24.95, "Hat Two", "./images/hats2.jpg"),
	new Product(24.95, "Hat Three", "./images/hats3.jpg")
]

function changeCard(cardNumber, newCard) {
	$(`.productImage${cardNumber}`).empty()
	$(`.price${cardNumber}`).empty()
	$(`.pName${cardNumber}`).empty()
	$(`.productImage${cardNumber}`).append(`<img src="${newCard.picture}" class="product">`)
	$(`.price${cardNumber}`).append("$"+newCard.price)
	$(`.pName${cardNumber}`).append(newCard.productName)
}
let currentCard1 = 1
let currentCard2 = 1
let currentCard3 = 1
let currentCard4 = 1
let currentCard5 = 1
let currentCard6 = 1
changeCard(1, productList1[currentCard1-1])
changeCard(2, productList2[currentCard2-1]) 
changeCard(3, productList3[currentCard3-1])
changeCard(4, productList4[currentCard4-1])
changeCard(5, productList5[currentCard5-1])
changeCard(6, productList6[currentCard6-1])
$(`.arrowR1`).click(function(){
	if(currentCard1<3) {
		currentCard1+=1
		changeCard(1, productList1[currentCard1-1])
	}
	else {
		currentCard1=1
		changeCard(1, productList1[currentCard1-1])
	}
})
$(`.arrowL1`).click(function(){
	if(currentCard1>1) {
		currentCard1-=1
		changeCard(1, productList1[currentCard1-1])
	}
	else {
		currentCard1=3
		changeCard(1, productList1[currentCard1-1])
	}
})
$(`.arrowR2`).click(function(){
	if(currentCard2<3) {
		currentCard2+=1
		changeCard(2, productList2[currentCard2-1])
	}
	else {
		currentCard2=1
		changeCard(2, productList2[currentCard2-1])
	}
})
$(`.arrowL2`).click(function(){
	if(currentCard2>1) {
		currentCard2-=1
		changeCard(2, productList2[currentCard2-1])
	}
	else {
		currentCard2=3
		changeCard(2, productList2[currentCard2-1])
	}
})
$(`.arrowR3`).click(function(){
	if(currentCard3<3) {
		currentCard3+=1
		changeCard(3, productList3[currentCard3-1])
	}
	else {
		currentCard3=1
		changeCard(3, productList3[currentCard3-1])
	}
})
$(`.arrowL3`).click(function(){
	if(currentCard3>1) {
		currentCard3-=1
		changeCard(3, productList3[currentCard3-1])
	}
	else {
		currentCard3=3
		changeCard(3, productList3[currentCard3-1])
	}
})
$(`.arrowR4`).click(function(){
	if(currentCard4<3) {
		currentCard4+=1
		changeCard(4, productList4[currentCard4-1])
	}
	else {
		currentCard4=1
		changeCard(4, productList4[currentCard4-1])
	}
})
$(`.arrowL4`).click(function(){
	if(currentCard4>1) {
		currentCard4-=1
		changeCard(4, productList4[currentCard4-1])
	}
	else {
		currentCard4=3
		changeCard(4, productList4[currentCard4-1])
	}
})
$(`.arrowR5`).click(function(){
	if(currentCard5<3) {
		currentCard5+=1
		changeCard(5, productList5[currentCard5-1])
	}
	else {
		currentCard5=1
		changeCard(5, productList5[currentCard5-1])
	}
})
$(`.arrowL5`).click(function(){
	if(currentCard5>1) {
		currentCard5-=1
		changeCard(5, productList5[currentCard5-1])
	}
	else {
		currentCard5=3
		changeCard(5, productList5[currentCard5-1])
	}
})
$(`.arrowR6`).click(function(){
	if(currentCard6<3) {
		currentCard6+=1
		changeCard(6, productList6[currentCard6-1])
	}
	else {
		currentCard6=1
		changeCard(6, productList6[currentCard6-1])
	}
})
$(`.arrowL6`).click(function(){
	if(currentCard6>1) {
		currentCard6-=1
		changeCard(6, productList6[currentCard6-1])
	}
	else {
		currentCard6=3
		changeCard(6, productList6[currentCard6-1])
	}
})
let total = 0
$(`.cartButton1`).click(function() {
	$(".cartStorage").prepend(`<p class="dropdown-item">${productList1[currentCard1-1].productName}  $${productList1[currentCard1-1].price}</p>`)
	total+=productList1[currentCard1-1].price
	refreshTotal()
})
$(`.cartButton2`).click(function() {
	$(".cartStorage").prepend(`<p class="dropdown-item">${productList2[currentCard2-1].productName}  $${productList2[currentCard2-1].price}</p>`)
	total+=productList2[currentCard2-1].price
	refreshTotal()
})
$(`.cartButton3`).click(function() {
	$(".cartStorage").prepend(`<p class="dropdown-item">${productList3[currentCard3-1].productName}  $${productList3[currentCard3-1].price}</p>`)
	total+=productList3[currentCard3-1].price
	refreshTotal()
})
$(`.cartButton4`).click(function() {
	$(".cartStorage").prepend(`<p class="dropdown-item">${productList4[currentCard4-1].productName}  $${productList4[currentCard4-1].price}</p>`)
	total+=productList4[currentCard4-1].price
	refreshTotal()
})
$(`.cartButton5`).click(function() {
	$(".cartStorage").prepend(`<p class="dropdown-item">${productList5[currentCard5-1].productName}  $${productList5[currentCard5-1].price}</p>`)
	total+=productList5[currentCard5-1].price
	refreshTotal()
})
$(`.cartButton6`).click(function() {
	$(".cartStorage").prepend(`<p class="dropdown-item">${productList6[currentCard6-1].productName}  $${productList6[currentCard6-1].price}</p>`)
	total+=productList6[currentCard6-1].price
	refreshTotal()
})
function refreshTotal() {
	$(".total").empty()
	$(".total").text(`Total: $`+total)
}





