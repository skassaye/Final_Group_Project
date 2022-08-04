class BoutiqueController {
  constructor(currentId = 0) {
    this.items = [];
    this.currentId = currentId;
  }

  // Create the addItem method
  addItem(name, price, description, picture) {
    const item = {
      // Increment the currentId property
      id: this.currentId++,
      name: name,
      price: price,
      description: description,
      picture: picture,
    };

    // Push the item to the items property
    this.items.push(item);
    localStorage.setItem("items", JSON.stringify(this.items));
  }


loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items");
        if (storageItems) {
            const items = JSON.parse(storageItems)
            for (var i = 0; i < items.length; i++) {
                const item = items[i];
                this.items.push(item);
            }
        }
}
};