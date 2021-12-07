var Totalprice = null;
var products = ["APPLE", "HONOR", "ONEPLUS", "OPPO", "REDMI", "SAMSUNG"];
var prices = [129000, 15000, 39000, 26000, 25000, 15000];
var images = ["apple.jpg", "honor.jpg", "oneplus.jpg", "oppo.jpg", "redmi.jpg", "samsung.jpg"];

for (i = 0; i < 6; i++) {
    var data = document.createElement("div")

    data.setAttribute("class", "boxes")
    var image = document.createElement("img")
    image.setAttribute("src", images[i])
    image.setAttribute("alt", "Mobile Phones")
    image.setAttribute("width", "300px")
    image.setAttribute("height", "300px")
    image.setAttribute("id", "image1")
    data.appendChild(image)

    var product = document.createElement("div")
    product.innerText = products[i];
    product.setAttribute("id", "product")
    data.appendChild(product)

    var price = document.createElement("div")
    price.innerText = "Rs." + prices[i];
    price.setAttribute("id", "price")
    data.appendChild(price)

    var buttons = document.createElement("button")
    buttons.innerText = "Add To Cart";
    buttons.setAttribute("id", i)
    buttons.setAttribute("class", "buttons")
    buttons.addEventListener("click", function () {
        this.disabled = "true";
        var cart = document.createElement("div")
        cart.innerText = products[this.id] + " - " + "Rs." + prices[this.id];
        addtocart.appendChild(cart)
        cart.setAttribute("class", "product-Detail")
        cart.setAttribute("id", prices[this.id])
        Totalprice = Totalprice + prices[this.id];

        var buttonbox = document.createElement("div")
        cart.appendChild(buttonbox)

        var Result = document.createElement("button")
        Result.innerText = '-';
        Result.setAttribute("class", "Result")
        Result.setAttribute("id", this.id)
        Result.addEventListener("click", function () {

            document.getElementById(this.id).disabled = false;
            cart.style.display = "none";

            document.getElementById("total").innerHTML = "TOTAL : " + (Totalprice = Totalprice - prices[this.id]);
        })
        buttonbox.appendChild(Result)
        document.getElementById("total").innerHTML = "TOTAL : " + Totalprice;
    })
    data.appendChild(buttons)
    box.appendChild(data)

}