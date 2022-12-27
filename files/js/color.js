class color{
    constructor(){
        this.color1=document.getElementById("color1");
        this.color2=document.getElementById("color2");
        this.color3=document.getElementById("color3");
        this.color4=document.getElementById("color4");
        this.color1.addEventListener("click",()=>{
           this.body_color("colorB1");

        });

        this.color2.addEventListener("click",()=>{
            this.body_color("colorB2");
 
         });

         this.color3.addEventListener("click",()=>{
            this.body_color("colorB3");
 
         });

         this.color4.addEventListener("click",()=>{
            this.body_color("colorB4");
 
         });

         if(localStorage.getItem("ba_gr")==null){
             document.body.style.background="black"
         }

         this.body_color(localStorage.getItem("ba_gr"));
 

    }

    body_color(color){
        if(color=="colorB1" ){
            document.body.style.background="rgb(4 212 241 / 86%)";
        }else if (color=="colorB2"){
            document.body.style.background="#fff63b"
        }else if (color=="colorB3"){
            document.body.style.background="#080808"

        }else if (color=="colorB4"){
            document.body.style.background="#035439cc"
        }

        localStorage.setItem("ba_gr", color)
    }
}


onload =new color();

class Volume_r{
    constructor(){
        this.audiosrc=document.getElementById("audiosrc") ;
        

        var valume1=document.getElementById("volume");
        this.audiosrc.volume= 50/100;
        
        valume1.addEventListener("change",()=>{
         this.audiosrc.volume = valume1.value / 100 ;
        } );
    }

}
onload = new Volume_r();









class valume_p{
    constructor(){
        this.audiosrc=document.getElementById("audiosrc") ;

        var speed1=document.getElementById("Speed");
        speed1.addEventListener("change",()=>{
            this.audiosrc.playbackRate=speed1.value/100;
        });
       
    }

}



onload = new valume_p();


class player{
    constructor(){
       this.main=document.getElementById("main")
        
  
    if(screen.width<500){
        main.style.width=screen.width + "px"
    }


    }
};

onload = new player();

