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