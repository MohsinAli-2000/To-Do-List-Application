let inputBox = document.getElementById("inputBox");
let listContainer = document.getElementById("list-container");
let addTask = ()=>{
    if (inputBox.value == ""){
        inputBox.classList.add("error");
        setTimeout(() => {
            inputBox.classList.remove("error");
        }, 1000);
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
        saveData();
    }   
}

listContainer.addEventListener("click" , (e)=>{
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
    
} , false)
function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();
