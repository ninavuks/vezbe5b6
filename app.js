
//console.log(obrisiDugmad);

//1. tip - IZVRSNA FUNKCIJA :))

function menjanjeBoje(boja) {
    let obrisiDugmad = document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
            dugme.style.backgroundColor=boja;
    }
}
//menjanjeBoje("green");

//2. tip - ARROW FUNKCIJA :)

let menjanjeBoje2=(boja)=>{
    let obrisiDugmad=document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
    }
}

// menjanjeBoje2("blue");

let menjanjeBoje3=(boja)=>Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=> dugme.style.backgroundColor=boja);
menjanjeBoje3("purple");

//3.tip - callback funkcija :>
let obrisiDugmad = document.getElementsByClassName("obrisi");

 for (const dugme of obrisiDugmad) {
     dugme.addEventListener("click", function (e){
         console.log(this);
        console.log(this.parentNode);
        let elementZaBris = this.parentNode;

        document.getElementById("lista").removeChild(elementZaBris);
         //elementZaBris.remove();
     })
 }

// function obrisiRed(){
//     this.parentNode.remove();
// }
// for (const dugme of obrisiDugmad) {
//     dugme.addEventListener(dugme, obrisiRed);
// }

function dodajDestinaciju(event){
    event.preventDefault();
    let inputPolje = document.querySelector("#dodaj-destinaciju input");

    let nazivNoveDest=inputPolje.value;
    if(nazivNoveDest){
        let ul = document.getElementById("lista");
        let noviListItem = document.createElement("li");

        noviListItem.innerHTML = `<span class="naziv">${nazivNoveDest}</span>
        <span class="obrisi">obriši</span>`;
        ul.appendChild(noviListItem);

        inputPolje.value="";
    }
}
function pozivKolbekfje(){
    let forma = document.forms["dodaj-destinaciju"];
    forma.addEventListener("submit", dodajDestinaciju);
}
document.addEventListener("DOMContentLoaded", pozivKolbekfje);
