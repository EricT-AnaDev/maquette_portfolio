const rangeAnim = () => {
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
}
export {rangeAnim};