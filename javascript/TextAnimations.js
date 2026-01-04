document.addEventListener('DOMContentLoaded', function(){
    var i =0;
    var text= "Si lo puedes imaginar, lo puedes programar!"; //el texto
    var speed = 50; //esto es la duración del efecto en milisegundos

    function typewrite(){
        if(i< text.length){
            document.getElementById("headerText").innerHTML += text.charAt(i);
            i++;
            setTimeout(typewrite, speed);
        }
    }
    typewrite();
})
