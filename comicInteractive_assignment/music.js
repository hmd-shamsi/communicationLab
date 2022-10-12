let next_button = document.querySelector('.button')
let music = document.querySelector('.space')
let counter = 1;
next_button.addEventListener('click',()=>{
    music.src=`space${counter}.mp3`
    counter++;
    // if (counter==5){
    //     counter="";
    // }
    
})

// let prev_button = document.querySelector('.button_1')
// prev_button.addEventListener('click',()=>{
//     counter--;
//     music.src=`space${counter}.mp3`
    
//     if (counter==0){
//         counter="";
//     }
    
// })