var video = document.querySelector("#videoElement"); 

function Startvideo(){
    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
        video.srcObject = stream;
        })
        .catch(function (err0r) {
        console.log("Something went wrong!");
        });
    }

}

function Stopvideo(){
    navigator.mediaDevices.getUserMedia.finish();
}

