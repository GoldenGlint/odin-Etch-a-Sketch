let container=document.querySelector(".container");

for(let i=0; i<16; i++){
    let row=document.createElement("div");
    
    let ident="row-"+ i;
    row.id=ident;
    row.classList.add('row');

    for(let l=0; l<16; l++){
        let div=document.createElement("div");
        div.classList.add("square");
        div.style.backgroundColor="white";
        row.appendChild(div);
    }
    container.appendChild(row);
}

let dimension=document.querySelector(".dimension")
dimension.addEventListener("click", (item) => {
  const el = item.target;

  if (el.classList.contains("size")){
    let num = Math.min(100, prompt("Give the size of one side: ", 16));
    redrawDiv(num);
  }
  else if (el.classList.contains("clear")) console.log("clear");
  else if (el.classList.contains("erase")) console.log("erase");

});

function redrawDiv(num){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    for(let i=0; i<num; i++){
    let row=document.createElement("div");
    
    let ident="row-"+ i;
    row.id=ident;
    row.classList.add('row');

    for(let l=0; l<num; l++){
        let div=document.createElement("div");
        div.classList.add("square");
        div.style.backgroundColor="white";
        row.appendChild(div);
    }
    container.appendChild(row);
}

};