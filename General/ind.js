//EventListener || GetDocumentBy ID

const ele = document.getElementById("ele")
ele.addEventListener("click", ()=>{
    ele.innerHTML="Rick";
})
const del = document.getElementById("del")
del.addEventListener("click", ()=>{
    del.innerHTML="Astley";
})
const head = document.getElementById("head")
head.addEventListener("click", ()=>{
    head.innerHTML="Game";
})

//Append Child
const q = document.createElement("p")
const r = document.createTextNode("Never Gonna Let You Down")
q.appendChild(r)

const body = document.getElementById("p1")
body.appendChild(q)
del.addEventListener("click", ()=>{
    r.remove();
})

ele.addEventListener("click", ()=>{
    r.replaceChild(q,head);
})

const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}


const loc = document.getElementById("loc")
loc.addEventListener("click",()=>{
    getLocation()
})
