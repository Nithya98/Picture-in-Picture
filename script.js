const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to vieo element then play
async function selectMediaStream(){
    try {
       const mediaStream = await navigator.mediaDevices.getDisplayMedia(); //mdn - using the screen capture API
       videoElement.srcObject = mediaStream;
       videoElement.onloadedmetadata=()=>{
           videoElement.play();
       }
    } catch (error) {
        console.log("whoops... error here: ", error);
    }
} 
button.addEventListener('click', async ()=>{
    //disable buttons
    button.disabled=true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //REset buttons
    button.disabled=false;
})

//on load
selectMediaStream();