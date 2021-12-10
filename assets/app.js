let secret = Math.random();
    secret = secret * 100; 
    secret = Math.floor(secret);    
    secret = secret + 1;




function play(){

    for( let i = 10; i > 1; i--){
        numberPlace.innerHTML = (`${i}`);

        if(i < 1){
            messagePlace.innerHTML= (`Game over: Secret: ${secret}`);
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
              
         
        
    }    
}    
    
 console.log(secret);