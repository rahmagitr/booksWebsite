var body = document.querySelector("body")
var mode = document.querySelector("header .list ul li button")
var picture = document.querySelector("main .photo")
var pic = ['./assets/pics/green.jpg','./assets/pics/green2jpg.jpg','./assets/pics/pic4.jpg',];
var j=0
mode.addEventListener('click',function(){
        body.classList.toggle('dark');
        if(j==0){
            mode.innerHTML="dark"
            j=1
        }
        else{
            mode.innerHTML="light"
            j=0
        }
    }
)
var i = 0
function changePic(){
    picture.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${pic[i]})`;
    i=i+1;
    if(i>2){
        i=0;
    }
}
setInterval(changePic,3000)
var menu = document.querySelector("header .menu")
var list = document.querySelector("header .list ul")
menu.addEventListener('click',
    function(){
        list.classList.toggle('show')
    }
)