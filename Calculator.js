const btns = document.querySelectorAll('button');
const Screen = document.getElementById('Screen');
for(let button of btns){
    button.addEventListener('click',(e)=>{
        const btntxt = e.target.innerText;
        if(btntxt==='C'){
            Screen.value = ''
        }else if(btntxt==='='){
            try {
            Screen.value = eval(Screen.value);
                
            } catch (error) {
                Screen.value = "Invalid Operation!"
                
            }

        }else if(btntxt==='X'){
            Screen.value+='*';
        }
        else{
        Screen.value += btntxt;
        }
    })
}