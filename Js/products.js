function addItemCard(item) {
    const itemHTML = `<div class="col-sm-3 my-5 pt-5">
  <div class="card description">
    <a href="#"
      ><img
        src="${item.imageUrl}"
        class="card-img-top"
        alt=""
    /></a>
    <div class="card-body img-container">
      <h5 class="card-title item-description">${item.name}</h5>
      <h6 class="card-title item-price">$${item.price}</h6>
      <div class="card-body mb-5">
        <a href="#" class="btn btn-primary add-to-cart">Add to Cart</a>
      </div>
    </div>
  </div>
  </div>`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
  }

  const loadItemsFromDB = async() =>{
    let response = await fetch("http://localhost:8080/item/all")
    let items = response.json()
    .then(res => {
      for (var i = 0, size = res.length; i < size; i++) {
        
        addItemCard(res[i]);
      }
    })
    }
    
    loadItemsFromDB();