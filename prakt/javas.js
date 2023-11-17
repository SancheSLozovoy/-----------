let btn, yellowPaarasha;


btn = document.querySelector("#btn");
yellowPaarasha = document.querySelector(".yellow-rectangle");

btn.onclick = hide;


function hide(){
    yellowPaarasha.hidden = true;
}