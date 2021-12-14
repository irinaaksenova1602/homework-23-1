let secret = Math.random();
    secret = secret * 100; 
    secret = Math.floor(secret);    
    secret = secret + 1;

let i = 10;
let isFale = false;


function play(){
        
        if(i == 0){
            messagePlace.innerHTML= (`Game over: Secret: ${secret}`);
            isFale = true;
            return;
        } 
        
            let option = +numberInput.value;
    
         
            if(secret == option){
            messagePlace.innerHTML = 'you win';
            resultPlace.innerHTML = ( `Ваш вариант ${option} выиграл`);
            i = 0;
            return;
             
            }else if(secret > option){
            resultPlace.innerHTML = ( `Ваш вариант ${option} меньше моего`);
            }else {
            resultPlace.innerHTML = (`Ваш вариант ${option} больше моего`);
            }
            i--;
            numberPlace.innerHTML = (`${i}`); 
}    
    
 console.log(secret);