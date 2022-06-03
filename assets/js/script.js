const imgElements = document.querySelectorAll(".photos img");
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
})