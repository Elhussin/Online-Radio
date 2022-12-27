
class sation{
    constructor(){
        this.sation_N=document.getElementById("sation_N")
        this.audiosrc=document.getElementById("audiosrc");
        this.play_P;
        this.play1=document.getElementById("play");
        this.play1.addEventListener("click",()=>{
           this.play_pause();
        });
      
     
        // next button
        this.next=document.getElementById("next");
        this.next.addEventListener("click",()=>{
            if(this.count<this.radio.length-1){

                ++this.count;
                this.play_P=false;
            }else {
                this.count=0
                // this.play_P=true;
                
            }
     localStorage.setItem("save_sta",this.count)
          this.radio_src();
        //   this.play_pause()
        })





        // back button
        this.back=document.getElementById("back");
        this.back.addEventListener("click",()=>{
            if(this.count>0){
                --this.count;
                this.play_P=false;
            }else {
                this.count=this.radio.length-1
                // this.play_P=true;
            }
           localStorage.setItem("save_sta",this.count)
            this.radio_src()
            // this.play_pause()
            
        });

// staian link
       
        this.radio=[];
        this.radio[0]=`https://live.radiomasr.net/RADIOMASR`
        this.radio[1]=`http://178.32.62.154:8957/;stream.mp3`
        this.radio[2]=`https://ice1.securenetsystems.net/DEMOSTN?playSessionID=BFBD4522-20F6-4552-B7AF875B6804B574`
        this.radio[3]=`https://reach-audio.esteam.rocks/radio/8010/live.mp3`
        this.radio[4]=`https://n02.radiojar.com/0tpy1h0kxtzuv`
        this.radio[5]=`https://alifalifjobs.com/radio/8000/AlifAlifLive.mp3`
        this.radio[6]=`http://curiosity.shoutca.st:6035/;stream.mp3`
        this.radio[7]=`http://69.61.26.75:8000/;stream.mp3`
          
/// stain name
        this.radio_N=[];
        this.radio_N[0]=`راديو مصر`
        this.radio_N[1]=`القاهره`
        this.radio_N[2]=`نجوم FM`
        this.radio_N[3]=`FM النيل`
        this.radio_N[4]=`لقران الكريم KSA`
        this.radio_N[5]=`الف الف`
        this.radio_N[6]=`روتانا`
        this.radio_N[7]=`KSA FM `
        
        

        

        this.count=0;



        this.radio_src();
        this.play_pause();
        

    }

    radio_src(){
        if(localStorage.getItem("save_sta")!=null){
            this.count=localStorage.getItem("save_sta");
        }
        this.audiosrc.src=this.radio[this.count]
        this.sation_N.innerHTML=this.radio_N[this.count]

        
   this.play_pause();
    }


    play_pause(){
        if(this.play_P==false){
        this.play1.src="./files/img/pause.png"
        this.audiosrc.play();
        this.play_P=true;


    }else{
        this.play1.src="./files/img/play.png"
        this.audiosrc.pause();
        this.play_P=false;
       
     
        
    }


    }



}

onload =new sation();

