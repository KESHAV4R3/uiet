let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 600)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');

                }, (idx + 1) * 50)
            })
        },2000);
        setTimeout(()=>{
            intro.style.top='-100vh';
        },2300)
    })
})


// const btn=document.getElementsByClassName('talk')
// const content=document.getElementsByClassName('content')

// function speak(text){
//     const text_speak = new SpeechSynthesisUtterance(text);

//     text_speak.rate = 1;
//     text_speak.volume = 1;
//     text_speak.pitch = 1;

//     window.speechSynthesis.speak(text_speak);
// }
// window.addEventListener('load',()=>){
//     speak("Welcome sir !!!")
// }
