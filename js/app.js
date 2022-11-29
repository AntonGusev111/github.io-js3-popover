import Popover from "./popover.js";
function main(){
    let flag = 0;

    let popoverValues = {
        title: 'Popover title',
        body: "And here's some amazing content. It's very engaging. Rignt?"
    }


    const btn = document.querySelector('.btn');
    const popov = new Popover(btn,popoverValues)

    btn.addEventListener('click', ()=>{
        if (flag == 0){
        popov.createPopower();
        flag +=1;
        } else{
            popov.removePopower();
            flag -=1;
        }
    });
}

main();
