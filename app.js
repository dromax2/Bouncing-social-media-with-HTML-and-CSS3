window.onload=function(){
const btn1 = document.querySelector('talk');
const content = document.querySelector('contect');


const speechRecognition = 
window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.constart = function() {
    console.log('voice is activated, you can  to microphone ');
   
};

recognition.onresult = function(event) {
    console.log(event);    
};

document.getElementById("btn1").addEventListener('click', () => {
recognition.start();
}); 
};