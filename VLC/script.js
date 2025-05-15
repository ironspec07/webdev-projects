//Video Input & Play
const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");

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

videoBtn.addEventListener("click" , handleInput);
videoInput.addEventListener("change" , acceptInputHandler);

//Volume && Speed manipulation
const speedUp = document.querySelector("#speedup");
const speedDown = document.querySelector("#speeddown");
const volUp = document.querySelector("#volup");
const volDown = document.querySelector("#voldown");
const mute = document.querySelector("#mute");
const toast = document.querySelector("#toast");

const speedupHandler = function (){
    const videoEle = document.querySelector(".main .video");
    if (videoEle !== null) {
        videoEle.playbackRate += 0.25;
        if (videoEle.playbackRate > 2) {
            videoEle.playbackRate = 2;
            return;
        }
        // console.log(videoEle.playbackRate);
        toast.textContent = "Speed: "+videoEle.playbackRate;
        toast.style.display = "block";
        setTimeout(()=>{
            toast.style.display = "none";
        },2000);
    }
}
const speeddownHandler = function (){
    const videoEle = document.querySelector(".main .video");
    if (videoEle !== null) {
        videoEle.playbackRate -= 0.25;
        // console.log(videoEle.playbackRate);
        toast.textContent = "Speed: "+videoEle.playbackRate;
        toast.style.display = "block";
        setTimeout(()=>{
            toast.style.display = "none";
        },2000);
    }
}
const volupHandler = function (){
    const videoEle = document.querySelector(".main .video");
    if (videoEle !== null) {
        if (videoEle.volume >= 0.99) {
            console.log("max volume");
            return;
            
        }
        videoEle.volume += 0.1;
        // console.log(videoEle.volume);
        const volume = Math.floor((videoEle.volume/1.0)*100);
        toast.textContent = "Volume: "+ volume+"%";
        toast.style.display = "block";
        setTimeout(()=>{
            toast.style.display = "none";
        },4000);
    }
}
const voldownHandler = function (){
    const videoEle = document.querySelector(".main .video");
    if (videoEle !== null) {
        if (videoEle.volume <= 0.1) {
            console.log("min volume");
            return;
            
        }
        videoEle.volume -= 0.1;
        // console.log(videoEle.volume);
        const volume = Math.floor((videoEle.volume/1.0)*100);
        toast.textContent = "Volume: "+ volume+"%";
        toast.style.display = "block";
        setTimeout(()=>{
            toast.style.display = "none";
        },4000);
    }
}
const muteHandler = () => {
    const videoEle = document.querySelector(".main .video");
    if (videoEle !== null) {
        videoEle.volume = 0;
        // console.log(videoEle.volume);
        toast.textContent = "Mute";
        toast.style.display = "block";
        setTimeout(()=>{
            toast.style.display = "none";
        },4000);
    }
}
speedUp.addEventListener("click",speedupHandler);
speedDown.addEventListener("click",speeddownHandler);
volUp.addEventListener("click",volupHandler);
volDown.addEventListener("click",voldownHandler);
mute.addEventListener("click",muteHandler);