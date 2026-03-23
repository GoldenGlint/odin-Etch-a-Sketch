let container=document.querySelector(".container");
let mode = "fill";

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

for(let i=0; i<16; i++){
    let row=document.createElement("div");
    
    let ident="row-"+ i;
    row.id=ident;
    row.classList.add('row');

    for(let l=0; l<16; l++){
        let div=document.createElement("div");
        div.classList.add("square");
        div.style.backgroundColor="white";
        div.addEventListener("mouseenter", () => {
            if(mode=="fill"){
                div.style.backgroundColor="black";
            }
            else if(mode=="erase"){
                div.style.backgroundColor="white";
            }
            else if(mode =="rainbow"){
                div.style.backgroundColor=randomColor();
            }
        })

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
  else if (el.classList.contains("clear")){
    document.querySelectorAll(".square").forEach((div) => {
        div.style.backgroundColor="white";
    })
  }
  else if (el.classList.contains("erase")){
        mode="erase";
        
  }
  else if (el.classList.contains("fill")){
        mode="fill";
        
  }
  else if (el.classList.contains("rainbow")){
        mode="rainbow";
        
  }

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
        div.addEventListener("mouseenter", () => {
            if(mode=="fill"){
                div.style.backgroundColor="black";
            }
            else if(mode=="erase"){
                div.style.backgroundColor="white";
            }
        })
        row.appendChild(div);
    }
    container.appendChild(row);
}

};

