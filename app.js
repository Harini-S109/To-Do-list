const inputBox = document.getElementById("input");
const list = document.getElementById("menu");

function addfn(){
    if(inputBox.value === ''){
        alert("You must enter something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        inputBox.value = '';

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})


function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showList(){
    list.innerHTML = localStorage.getItem("data");
}

showList();