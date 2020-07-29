x=123
function click(){
    
}
n=3

for(i=3;i>0;i--){
    y=1
    if(x==y){
    console.log("right");
    break;
    }else{
        if(i>1){
    console.log("you have",i,"try left")
    break;
        }else{
            console.log("you are out of tries") 
        }
    
    }
       
}