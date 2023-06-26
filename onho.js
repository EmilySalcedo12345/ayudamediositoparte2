let audio = document.getElementById("ohno");
console.log(text.textContent); 
let isplaying = falce;
evento_btn.addEventListener("click",()=>{
    console.log(isplaying)
    if(isplaying)
    {
        ohno.play;
    isplaying = true;
    evento_btn.innerHTML="pause"; 
    image.style.animationPlayState="running";
        }
    else
    {
        audio.pause();
        isplaying = false;
        evento_btn.innerHTML="play";
        image.style.animationPlaystate="paused";
            }
})