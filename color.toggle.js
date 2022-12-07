const btonToggle = document.querySelector (".btonToggle");
const hamburger = document.querySelector (".image-hamburger");
const colorList = document.getElementById ("color-list");

function hideColorList(){
    colorList.style.visibility = "hidden";
}

hideColorList();

hamburger.addEventListener("click", () => {
if (colorList.style.visibility == "hidden"){
    colorList.style.visibility = "visible"
}else{
    hideColorList();
}
})

function colorChange(event){
 if(event.target.classList.value === "home"){
   document.body.style.backgroundColor = "grey"
   hideColorList();
 }
 if(event.target.classList.value === "red"){
    document.body.style.backgroundColor = "red"
    hideColorList();
  }
  if(event.target.classList.value === "orange"){
    document.body.style.backgroundColor = "orange"
    hideColorList();
  }
  if(event.target.classList.value === "purple"){
    document.body.style.backgroundColor = "purple"
    hideColorList();
  }
  if(event.target.classList.value === "green"){
    document.body.style.backgroundColor = "green"
    hideColorList();
  }
}



