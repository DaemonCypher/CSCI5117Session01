function addGuest() {
    var name = document.getElementById("name").value;
    var ul = document.getElementById("guest-list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
}