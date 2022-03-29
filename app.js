console.log("Welcome");
score=0;
cross= true;
var music=new Audio("Media/main.mp3");
document.onkeydown=function(e){
    console.log("keycode is",e.keyCode);
    if(e.keyCode==32){
        music.currentTime=0;
        score=0 ;
        play=document.getElementsByClassName("gameOver")[0];
        play.style.visibility="hidden";
        Restart.innerHTML="Use Arrows to move the chicken";
        let x1=document.querySelector(".Hen");
        x1.src="Media/hen.png";
        music.play();
        music.loop=true;
        play1=document.getElementsByClassName("Human")[0];
        play1.classList.add("animateHuman")
    }
    if(e.keyCode==38){
        play=document.getElementsByClassName("Hen")[0];
        play.classList.add("animateHen");
        setTimeout(()=>{
            play.classList.remove("animateHen");
            // play.style.left="60vh";
        },700)
        // setTimeout(()=>{
        //     play.style.left="40vh";
        // },1500)
    }
    if(e.keyCode==39){
        play=document.getElementsByClassName("Hen")[0];
        playx=parseInt(window.getComputedStyle(play,null).getPropertyValue("left"));
        play.style.left=playx+112+"px";
    }
    if(e.keyCode==37){
        play=document.getElementsByClassName("Hen")[0];
        playx=parseInt(window.getComputedStyle(play,null).getPropertyValue("left"));
        play.style.left=playx-112+"px";
    }
};

setInterval(() => {
    let x1=document.querySelector(".Hen");
    let x2=document.querySelector(".Human");
    let x3=document.querySelector(".gameOver");

    Hx=parseInt(window.getComputedStyle(x1,null).getPropertyValue("left"));
    Hy=parseInt(window.getComputedStyle(x1,null).getPropertyValue("top"));
    Ux=parseInt(window.getComputedStyle(x2,null).getPropertyValue("left"));
    Uy=parseInt(window.getComputedStyle(x2,null).getPropertyValue("top"));

    offsetx=Math.abs(Hx-Ux);
    offsety=Math.abs(Hy-Uy);
    if(offsetx<113 && offsety<52){
        x3.style.visibility="visible";
        x3.innerHTML="Game Over!!";
        x3.classList.add("gameAnimation");
        Restart.innerHTML="Uff, Retry by pressing space"
        x2.classList.remove("animateHuman");
        var music1=new Audio("Media/wrong.mp3");
        music1.play();
        x1.src="Media/dead.png";
        music.pause();
        
    }
    else if(offsetx < 73 && cross){
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            Ax=parseFloat(window.getComputedStyle(x2,null).getPropertyValue("animation-duration"));            
            x2.style.animationDuration= (Ax-0.1)+"s";
        }, 500);
    }
}, 10);

function updatescore(score){
    scoreId.innerHTML="Your Score: "+score;
}

