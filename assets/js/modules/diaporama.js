const diaporama = () => {

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

let index = 0;
while (index<tabPhotos.length) {
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

    index++; 
}
frameImg.addEventListener("click", function(event){
    if (!frameImg.querySelector("img").contains(event.target)) {
        frameImg.style.display = "none";
        frameImg.innerHTML ="";
    }
})}
export {diaporama};