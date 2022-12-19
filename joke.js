let selected = document.getElementById("joke");
let next_button=document.querySelector(".next");
let laugh=document.querySelector(".load");
let emoji=document.querySelector('.emoji');
let header_content=document.getElementById('header_cont');
let url = "https://v2.jokeapi.dev/joke/Programming?type=single";
next_button.addEventListener("click",fetching);
function fetching(){
  next_button.innerHTML="Next";
  laugh.innerHTML="😂🤣😂";
  fetch(url)
  .then((response) => response.json())
  .then((d) => {
    let x = d.joke;
    // JSON.stringify(x);
    // console.log(x);
    selected.innerHTML = `${x}`;
  })
  .catch();
  header_content.innerHTML="JOKES:-";
  // emoji.innerHTML="";
}

laugh.addEventListener('click',play);

function play(){
  let audio = new Audio('./laughing.mp3');
  audio.play();
  // emoji.innerHTML='<img src="./haha-laugh.gif">'
}
