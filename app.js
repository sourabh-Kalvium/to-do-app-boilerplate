let input = document.getElementById("input")

let ad = document.getElementById("button")

let ul =document.getElementById("todolist")

ad.onclick = addItems

let list =[]


function render(){
 let todolist =list.map((ele,index)=>{
     return`
     <li>${ele} <span onclick="deleteitem(${index})" class ="delete">delete</span> | <span onclick="edititem(${index})"  class="edit"> edit</span></li>
     `
   })

   ul.innerHTML=todolist.join("")
}

function addItems(){
   if(input.value){
      list.push(input.value)
      render()
   }
   else{
    alert("please add the todo")
   }
}

function deleteitem(i){
     list.splice(i,1)
     render()
}


function edititem(i){
    let edited = prompt("enter the todo");
    list.splice(i,1,edited)
    render()
}

