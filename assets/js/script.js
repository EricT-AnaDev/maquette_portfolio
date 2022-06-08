import {diaporama} from "./modules/diaporama.js";
import {rangeAnim} from "./modules/rangeAnim.js";
diaporama();
rangeAnim();













// travail perso
/* const imgElements = document.querySelectorAll(".photos img");
console.dir(imgElements);
const frameImg = document.createElement("div");
const imgFull = [];

frameImg.id = "frameImg";
frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.backdropFilter = "blur(5px)";
frameImg.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
frameImg.style.display = "none";
frameImg.style.justifyContent = "center";
frameImg.style.alignItems = "center";
frameImg.style.position = "fixed";
frameImg.style.zIndex = "2";
document.body.prepend(frameImg);

let i = 0;
while (i < imgElements.length) {
    let n = i;
    imgElements[i].addEventListener(
        "click", 
    function(){
        console.log("click");
        frameImg.style.display = "flex";
        imgFull[n] = document.createElement("img");
        imgFull[n].src = imgElements[n].src;
        imgFull[n].style.width ="70%";
        frameImg.append(imgFull[n]);
    });
    i++;
}

frameImg.addEventListener("click", function(event){
    if (!frameImg.querySelector("img").contains(event.target)) {
        frameImg.style.display = "none";
        frameImg.innerHTML ="";
    }
}) */
// correction diaporama js
/* console.log("js ok");
// déclarations de variables
const photos = document.querySelector(".photos");
const tabPhotos = [
    "./assets/img/p1.jpg",
    "./assets/img/p2.jpg",
    "./assets/img/p3.jpg",
    "./assets/img/p4.jpg",
    "./assets/img/p5.jpg",
    "./assets/img/p6.jpg",
    "./assets/img/p7.jpg",
    "./assets/img/p8.jpg"

];
const imgFull = [];
const frameImg = document.createElement("div");
frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.backdropFilter = "blur(18px)";
frameImg.style.backgroundColor = "rgba(0,0,0,0.7)";
frameImg.style.display = "none";
frameImg.style.justifyContent = "center";
frameImg.style.alignItems = "center";
frameImg.style.position = "fixed";
document.body.prepend(frameImg);
photos.style.display = "flex";
photos.style.flexWrap = "wrap";
photos.style.justifyContent = "space-between";

//document.write(tabPhotos[2]);
let index = 0;
while (index<tabPhotos.length) {
    // créer mes ElementHTML
    let divImg = document.createElement("div");
    divImg.classList.add("divImg");
    divImg.style.width = "23%";
    divImg.style.marginBottom = "2%";
    photos.append(divImg);
    let imgPhotos = document.createElement("img");
    imgPhotos.alt = "description photo p"+(index+1);
    imgPhotos.src = tabPhotos[index];
    imgPhotos.style.width = "100%";
    divImg.append(imgPhotos);
    // detection click
    let n = index;
    console.dir(imgPhotos);
    console.log(typeof(imgPhotos));   
    imgPhotos.addEventListener(
        "click",
        () => {
            frameImg.style.display = "flex";
            console.log(n)
            imgFull[n] = document.createElement("img");
            imgFull[n].width = 700;
            imgFull[n].height = 500;
            imgFull[n].src = tabPhotos[n];
            frameImg.append(imgFull[n]);
        }
    )
    //incrémentation de l'index
    index++; 
}
frameImg.addEventListener("click", function(event){
    if (!frameImg.querySelector("img").contains(event.target)) {
        frameImg.style.display = "none";
        frameImg.innerHTML ="";
    }
}) */
// correction progressBar
/* // ranges progressifs
const bRange = document.getElementsByClassName("bRange");
console.dir(bRange[0]);
const progress = [90,85,75];
window.addEventListener("scroll",()=>{
    for (let index = 0; index < bRange.length; index++) {
        if(bRange[index].scrollIntoView){
            bRange[index].style.width = progress[index]+"%";
        }
        
    }
})
Ajouter transition dans le CSS */