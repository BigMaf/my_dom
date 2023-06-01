 // Functions to handle quantity adjustments and likes
    
 function incrementQuantity(itemId) {
    var quantityElement = document.getElementById("quantity" + itemId);
    var currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
    updateTotalPrice();
  }
  
  function decrementQuantity(itemId) {
    var quantityElement = document.getElementById("quantity" + itemId);
    var currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 1) {
      quantityElement.innerText = currentQuantity - 1;
      updateTotalPrice();
    }
  }
  
  function toggleLike(itemId) {
    var heartElement = document.querySelector(".item:nth-child(" + itemId + ") .heart");
    heartElement.classList.toggle("active");
  }
  
  function updateTotalPrice() {
    var items = document.getElementsByClassName("item");
    var totalPrice = 0;
    for (var i = 0; i < items.length; i++) {
      var quantity = parseInt(items[i].querySelector(".actions span").innerText);
      var price = parseFloat(items[i].querySelector(".price").innerText.slice(1));
      totalPrice += quantity * price;
    }
    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
  }