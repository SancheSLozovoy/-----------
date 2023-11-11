

var count = 0;

function onClickButton(el){
    count++;
    el.innerHTML = "Вы нажади на кнопку " + count + " раз"
    el.style.background = "red";
    el.style.color = "white";
    el.style.cssText = "border-radius: 150px; background-color: gray; color: white;";
}