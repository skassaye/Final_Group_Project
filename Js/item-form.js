
const boutiqueController = new BoutiqueController(0);
const newItemForm = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newItemName = document.querySelector('#newItemName');
    const newPriceItem = document.querySelector('#newPriceItem');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemImageUrl = document.querySelector('#newItemImageUrl');    

    // Get the values of the inputs
    const name = newItemName.value;
    const price=newPriceItem.value;
    const description = newItemDescription.value;
    const imageUrl = newItemImageUrl.value;

    /*
        Validation code here
    */

    // Add the item to the ItemsController
    boutiqueController.addItem(name, price,description, imageUrl);

    // Clear the form
    newItemName.value = '';
    newPriceItem.value='';
    newItemDescription.value = '';
    newItemImageUrl.value ='';    
});