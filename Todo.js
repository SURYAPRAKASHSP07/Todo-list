const input = document.getElementById("Input-field");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(input.value == ""){
        alert("You Must Write Something...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    savaData();
};

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        savaData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        savaData();
    }
},false);

function savaData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showData(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showData();



