// class BoutiqueController {
//     constructor(name, price, description){
//         this.name = name;
//         this.price =price;
//         this.description =description;
//         this.item=[]
//     }
// };



// class Item extends BoutiqueController{
//     constructor(dresses){
//         super(name)
//         super(price)
//         super(description)
//         this.dresses = dresses
//     }
// }
// console.log(BoutiqueController)
class BoutiqueController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    // Create the addItem method
    addItem(name,price, description,picture) {
        const item = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            price: price,
            description: description,
            picture: picture
        };

        // Push the item to the items property
        this.items.push(item); 
}
}