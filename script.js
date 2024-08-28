
document.addEventListener("DOMContentLoaded", function() {
    const wordContainer = document.getElementById("wordContainer");
    const word = wordContainer.innerText;
    wordContainer.innerHTML = "";

    word.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = letter;
        wordContainer.appendChild(span);

        setTimeout(() => {
            span.classList.add("visible");
        }, index * 190);
    });
});
// jjjjjjjjjjjjjjjjjjj
window.addEventListener('load', function() {
    document.querySelector('.resum').classList.add('visible');
    this.document.querySelector('.sim').classList.add('visible');
});
window.onload = function() {
    var audio = document.getElementById("welcome-sound");
    audio.play().catch(function(error) {
        console.log("Autoplay prevented:", error);
    });
}


function abrir(){
    document.getElementById("suV").style.display="block";//permite visualisar 
  }
   function off(){
      document.getElementById("suV").style.display="none";//cierra el contenido
  }
  
  function ab(){
    document.getElementById("sg").style.display="block";
  }
  function cer(){
    document.getElementById("sg").style.display="none";
  }
