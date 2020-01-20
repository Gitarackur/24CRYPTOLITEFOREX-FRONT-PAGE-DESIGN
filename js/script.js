let left= document.querySelector(".left_arr");
let right= document.querySelector(".right_arr");

let slides= document.querySelectorAll(".slides");
let dots= document.querySelectorAll(".dots");

console.log(slides);

let count=-1;

function Slidee(){
   
    slides.forEach(cur=>{
        cur.style.display="none";
    });

    dots.forEach(cur=>{
        cur.style.backgroundColor="white";
    });


    count++;
    if(count > slides.length-1){
        count=0;
    }

    slides[count].style.display="block";
    dots[count].style.backgroundColor="#89991F";

}

function TIMEOWT(){
    setTimeout(Carousel, 5000);
}



// Slideshow/carousel with timeout

function Carousel(){
    Slidee();
    TIMEOWT();
}
Carousel();



// slideshow with button

function Next(){
    Slidee();  
}

right.addEventListener("click", function(){
    Next();
    right.style.backgroundColor= "#89991F";
    right.style.color= "white";
} );


function Prev(){
    slides.forEach(cur=>{
        cur.style.display="none";
    });

    dots.forEach(cur=>{
        cur.style.backgroundColor="white";
    });

    count--;
    if(count < 0){
        count = slides.length-1;
    }
    slides[count].style.display="block";
    dots[count].style.backgroundColor="#89991F";

}

left.addEventListener("click", function(){
    Prev();
    left.style.backgroundColor= "#89991F";
    left.style.color= "white";
} );







// dropdown

var x= document.querySelector("#Desktop_Main_Header .ToggleBar .Hamburger_Toggle_b2n");
var y= document.querySelector("#Desktop_Main_Header .Links_and_Search .cancel");
var z= document.querySelector("#Desktop_Main_Header .Links_and_Search");




x.addEventListener("click",()=>{
    // Dropdown();
    x.classList.add("close");
    z.classList.add("opened");
   
});

y.addEventListener("click",()=>{
    // Drpdwn2();
    z.classList.remove("opened");
    x.classList.remove("close")
});
