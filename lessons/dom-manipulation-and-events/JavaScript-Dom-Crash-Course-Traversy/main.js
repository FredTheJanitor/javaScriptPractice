var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit Event

form.addEventListener("submit", addItem);
// delete Event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

// addItem Function
function addItem(e){
    e.preventDefault();
    // get input value
    var newItem = document.getElementById('item').value;

    // create a new li
    var li = document.createElement('li');
    // add classes to li
    li.className='list-group-item';
    console.log(li);
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create the delete button element

    var deleteBtn = document.createElement('button');

    // add classes to delete button
    deleteBtn.className="btn btn-danger bten-s float-right delete";
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);

    // append li to list
    itemList.appendChild(li);
}

// remove item function

function removeItem(e){
    if (e.target.classList.contains('delete')) {
        if(confirm('u sure bro')){
           var li = e.target.parentElement;
           itemList.removeChild(li); 
        }
    }
}

// filter items function
function filterItems(e){
    // convert to lower case
    var text = e.target.value.toLowerCase();
    // grab the 'li's within the itemlist
    var items = itemList.getElementsByTagName('li');
    console.log(items);
    Array.from(items).forEach((item)=>{
        var itemName = item.firstChild.textContent;
        // this is the old school way of writing includes() i guess lol
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display='none';
        }
})
}