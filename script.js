let score=0;
        let life=3;
  
        const msg=document.querySelector('.msg');
        const guess =document.querySelector('.hidden');
        const btn= document.querySelector('.btn');
        const lives=document.querySelector('.life')
        let newword="";
        let rand=" ";
        const marks=document.querySelector('.mark')
        const msg1=document.querySelector('.msg1')
        const bnt2=document.querySelector('.bnt2')
        const arr=['python', 'android', 'australia','java','javascript','kotlin','hungary','newzealand','microsoft']
        let play=false;

        // actutal word

const create=()=>{
    const i=Math.floor((Math.random() * arr.length));
    return arr[i];

}
// scrambled word

const scramble=(arr)=>{
for(var i=arr.length-1; i>=0; i--){
    // console.log(arr[i]);
    let temp=arr[i];
    let j=Math.floor((Math.random() * (i+1)));
    // console.log(arr[j]);
    arr[i]=arr[j];
    arr[j]=temp;


}
return arr;
}
function show(){
bnt2.innerHTML=`<button class="btn" onclick="location.reload()"> Play Again </button>`
}


     btn.addEventListener('click', function(){
         if(!play){ 
             play=true;
             btn.innerHTML="Submit";
             guess.style.display="block";
             neword = create();
             rand=scramble(neword.split(""));
            //  console.log(rand.join(""));
            msg.innerHTML=rand.join("");
            lives.innerHTML= `<p>LIVES:${life} `
            marks.innerHTML=` SCORE:${score}`;
         }
         else{
             let wordbyuser=guess.value;
             if(wordbyuser==neword){
                //  console.log("corredct")
                 play=false;
                 msg.innerHTML=`Yes, It is ${neword}`;
                 btn.innerHTML="NEXT";
                 guess.value=""
                 guess.style.display="none"
                 score++;
                 msg1.innerHTML=""
                 console.log(score);
                 lives.innerHTML= `LIVES:${life} `
                    marks.innerHTML=`SCORE:${score}`;
                 
             }else{
                 life--;

                 if(life>0){
                    msg1.innerHTML="TRY AGAIN";
                     msg.innerHTML=rand.join("");

                      guess.value=""
                    //   lives.innerHTML=``
                    lives.innerHTML= `LIVES:${life} `
                    marks.innerHTML=`SCORE:${score}`;

                 }
                 else{

                     msg1.innerHTML="GAME OVER";
                     msg.innerHTML=`Your Score:${score}`;
                    guess.style.display="none"
                    msg.style.display="flex";
                    btn.style.display="none"
                    lives.innerHTML=""
                    marks.innerHTML="";
    
                    show();
                 }

             }

         }
     })