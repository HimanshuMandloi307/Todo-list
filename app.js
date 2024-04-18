let btn  = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let btndelete = document.createElement("button");
    btndelete.innerText = "delete";
    btndelete.classList.add("delete");

    item.appendChild(btndelete);
    ul.appendChild(item);
    input.value = "";
});

ul.addEventListener("click",function(event){
   if(event.target.nodeName == "BUTTON"){
    let listitem = event.target.parentElement;
    listitem.remove();
    console.log("deleted");
   }
});
