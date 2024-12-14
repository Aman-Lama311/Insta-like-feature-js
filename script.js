let click = document.querySelector(".container");
let love = document.querySelector("i");

click.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = "0.8";
    
    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)";
        love.style.opacity = "0";
    },2000);
});