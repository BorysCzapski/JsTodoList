let input = document.getElementById('input');
populateTodoList()


function populateTodoList() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const ul = document.getElementById("ul");
    ul.innerHTML = ""; // Clear existing list
    
    savedTasks.forEach(task => {
        if (task.display) {
            const li = document.createElement("li");
            li.textContent = task.text;
            
            if (task.checked) {
                li.classList.add("checked");
            }
            
            
            ul.appendChild(li);
        }
    });
}


//adding element

function addElement(){
    var li = document.createElement("li")
    var ul = document.getElementById("ul")
    let val = input.value;
    var text = document.createTextNode(val);
    if (val === ""){
        alert("Input is empty!");
    }
    else{
        li.appendChild(text);
        
    
    
    input.value = "";
    var span = document.createElement("span");
    span.classList.add("close");
    var txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    li.appendChild(span);
    ul.appendChild(li);
    updateLocalStorage();
    //also closes
    var closes = document.getElementsByClassName("close");
    var j;
    for (j=0; j < closes.length;j++){
       closes[j].onclick = function(){
           let div = this.parentElement;
           div.style.display = "none";
           updateLocalStorage();
       }
    }
}}

//add x to those before

var lis = document.getElementsByTagName("li")
 var i;
 for(i=0; i < lis.length; i++ )   {
    var span = document.createElement("span");
    span.classList.add("close");
    var txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    lis[i].appendChild(span)
 }


 //close elements add function to display
 var closes = document.getElementsByClassName("close");
 var j;
 for (j=0; j < closes.length;j++){
    closes[j].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
        updateLocalStorage();
    }
 }

 //checked

 var list = document.querySelector("ul");
 list.addEventListener("click", function(parameter) {
    if (parameter.target.tagName === "LI") {
        parameter.target.classList.toggle("checked");
        updateLocalStorage();
    }
}, false);

 function updateLocalStorage() {
    const tasks = Array.from(document.querySelectorAll("ul li")).map(li => {
        return {
            text: li.textContent,
            checked: li.classList.contains("checked"),
            display: li.style.display != "none"
        };
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}