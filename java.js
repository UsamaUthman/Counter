let count = 0;

// select value and button 

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(item){
    item.addEventListener('click' , function(e){
        const style = e.currentTarget.classList;
        if(style.contains("decrease")) {
            count--;
        }else if(style.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        }else if(count < 0){
            value.style.color = 'red';
        } else{
            value.style.color = '#222';
        }
        value.textContent = count;
    })
})
