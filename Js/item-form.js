let name = document.getElementById("newItemName")
let price = document.getElementById("newPriceItem")
let description = document.getElementById("newItemDescription")
let imageUrl = document.getElementById("newItemImageUrl")

class ItemController {
    constructor(name, price, description, imageUrl) {
      this.name = name;
      this.price = price;
      this.description = description;
      this.imageUrl = imageUrl;
    }
    }

    

function postNewItem(){
    let item = new ItemController(name.value, price.value, description.value, imageUrl.value)
    // console.log(item);
    fetch("http://localhost:8080/item/addItem", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    }
    )
    alert(`${item.name} has been added to database`)
}