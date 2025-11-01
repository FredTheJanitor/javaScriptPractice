var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form Submit Event

form.addEventListener("submit", addItem);
// delete Event
itemList.addEventListener('click', removeItem)

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