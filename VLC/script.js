const speedUp = document.querySelector("#speedup");
const speedDown = document.querySelector("#speeddown");
const volUp = document.querySelector("#volup");
const volDown = document.querySelector("#voldown");
const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");

const speedupHandler = function (){
    const videoEle = document.querySelector(".main .video");
    if (videoEle !== null) {
        videoEle.defaultPlaybackRate = videoEle.defaultPlaybackRate+0.1;
    }
}

const handleInput = () => {
    videoInput.click();
}

const acceptInputHandler = (obj) => {
    const selectedVideo = obj.target.files[0];
    // video --> BASE64
    const link = URL.createObjectURL(selectedVideo);
    const videoEle = document.createElement("video");
    videoEle.src = link;
    videoEle.setAttribute("class","video");
    videoEle.controls = "true";
    videoPlayer.appendChild(videoEle);
}

speedUp.addEventListener("click",speedupHandler);
videoBtn.addEventListener("click" , handleInput);
videoInput.addEventListener("change" , acceptInputHandler);