const boutiqueController = new BoutiqueController(0);
function addItemCard(item){

const itemHTML =`<div class="col-sm-3 my-5 pt-5">
<div class="card description">
  <a href="#"
    ><img
      src="${item.picture}"
      class="card-img-top"
      alt=""
  /></a>
  <div class="card-body img-container">
    <h5 class="card-title item-description">${item.name}</h5>
    <h6 class="card-title item-price">${item.price}</h6>
    <div class="card-body mb-5">
      <a href="#" class="btn btn-primary add-to-cart">Add to Cart</a>
    </div>
  </div>
</div>
</div>`
const itemsContainer = document.getElementById("list-items");
itemsContainer.innerHTML += itemHTML;
}

addItemCard({'name':'Green Sparkle Dress',
    'price': '$98.00',
    'description':'',
    'picture':'./Resources/images/greendress.jpg',  
    });

addItemCard({'name':'Patterned Cardigan',
    'price': '$85.00',
    'description':'',
    'picture':'./Resources/images/cardigan.jpg',  
    });
addItemCard({'name':'Golden Dress',
    'price': '$108.00',
    'description':'',
    'picture':'./Resources/images/golddress.jpg',  
    });
addItemCard({'name':'Magenta Statement Dress',
    'price': '$120.00',
    'description':'',
    'picture':'./Resources/images/magentadress.jpg',  
    });  
addItemCard({'name':'Sheer Pink Dress',
    'price': '$100.00',
    'description':'',
    'picture':'./Resources/images/pinksheerdress.jpg',  
    });
addItemCard({'name':'Purple Shoulder Dress',
    'price': '$110.00',
    'description':'',
    'picture':'./Resources/images/purpledress.jpg',  
    });
addItemCard({'name':'Red Floral Dress',
    'price': '$102.00',
    'description':'',
    'picture':'./Resources/images/redfloral.jpg',  
    });    
addItemCard({'name':'Sheer Pattern Dress',
    'price': '$106.00',
    'description':'',
    'picture':'./Resources/images/sheerdress.jpg',  
    });
addItemCard({'name':'Red Silhouette Dress',
    'price': '$120.00',
    'description':'',
    'picture':'./Resources/images/redsideflow.jpg',  
    });   
addItemCard({'name':'Flowy Dress Shirt',
    'price': '$102.00',
    'description':'',
    'picture':'./Resources/images/Linendress.jpg',  
    });   
addItemCard({'name':'White Fur Coat',
    'price': '$150.00',
    'description':'',
    'picture':'./Resources/images/whitefurcoat.jpg',  
    });   
addItemCard({'name':'Red Mini Dress',
    'price': '$98.00',
    'description':'',
    'picture':'./Resources/images/redminidress.jpg',  
    });




