//function to add the tasks to ul parent element
function addItem() {
    let item = document.getElementById("input").value;  //getting the value from the input
    let ul = document.getElementById("list");  //getting the ul element
    let li = document.createElement('li');  //create the li element
    // let hr = document.createElement("hr");
    li.appendChild(document.createTextNode(item));  //appending the item to the list
    ul.appendChild(li)  //appending the li to ul
    // ul.appendChild(hr);
    document.getElementById("input").value = "";
    li.onclick = removeItem;
}
//a function to run on key up
document.body.onkeyup = function(e) {
    if(e.keyCode == 13) {
        addItem();
    }
}

//A function that removes the item on click
function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}