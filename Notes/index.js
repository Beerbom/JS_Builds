const notesContainer = document.querySelector(".notesContainer");
const btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputBox");


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");

}
showNotes();
btn.addEventListener("click",()=>{
    let input= document.createElement("p");
    let img = document.createElement("img");
    input.className="inputBox";
    input.setAttribute("contenteditable","true");
    img.src = "images/del.png"
    notesContainer.appendChild(input).appendChild(img);

})
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

document.addEventListener("keydown", event =>{
        if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

