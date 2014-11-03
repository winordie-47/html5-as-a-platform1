window.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    video = document.getElementById("video"),
    videoObj = { "video" : true },
    errBack = function(error) {
      console.log("Video capture error: ", error.code);
    };

  document.getElementById("snap").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
  });

  if(navigator.getUserMedia) {
    navigator.getUserMedia(videoObj, function(stream) {
      video.src = stream;
      video.play();
    }, errBack);
  } else if(navigator.webkitGetUserMedia) {
    navigator.webkitGetUserMedia(videoObj, function(stream){
      video.src = window.webkitURL.createObjectURL(stream);
      video.play();
    }, errBack);
  }
  else if(navigator.mozGetUserMedia) {
    navigator.mozGetUserMedia(videoObj, function(stream){
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errBack);
  }

}, false);

window.onload = function(){
  fname.value = localStorage.getItem(fname.id);
  lname.value = localStorage.getItem(lname.id);
  email.value = localStorage.getItem(email.id);
  phone.value = localStorage.getItem(phone.id);
};

var fname = document.getElementById("firstname");
var lname = document.getElementById("lastname");
var email = document.getElementById("email");
var phone = document.getElementById("phone");

fname.onblur = function(){
  storeData(this.id, this.value);
};
lname.onblur = function(){
  storeData(this.id, this.value);
};
email.onblur = function(){
  storeData(this.id, this.value);
};
phone.onblur = function(){
  storeData(this.id, this.value);
};

function storeData(name, value){
  localStorage.setItem(name, value);
};


