var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start()
{
    document.getElementById("text").innerHTML = " ";
    recognition.start();

}

recognition.onresult = function(event){

    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text").innerHTML = content;
    console.log(content);
      speak();
    
}

function speak()
{
    var synth = window.speechSynthesis;

    speakData = document.getElementById("text").value;

    var utterThis = new SpeechSynthesisUtterance(speakData);
    
    synth.speak(utterThis);

    Webcam.attach(camera);

     
    setTimeout(function(){
        takeSnap();
        save();
    },5000
    );
}

camera = document.getElementById("camera");

Webcam.set({
    width : 360, height : 250, image_format : "png", png_quality : 90
});

function takeSnap()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id= "selfie_img" src= " '+data_uri+' ">'; 
    } );
    
}

function save()
{
    link = document.getElementById("link");
    img = document.getElementById("selfie_img").src;
    link.href = img;
    link.click();
}