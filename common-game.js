var audio = new Audio('./TemplateData/background_music.mp3');
var startedPlaying = false;
audio.loop = true;
function UnityProgress(unityInstance, progress) {  

  document.getElementById("footerID").style.display = "block"; 
  document.getElementById("imgID").style.display = "none"; 
  if(!startedPlaying) 
  {
    audio.play();
    console.log(audio.paused);
    startedPlaying = true;
  }
  if (!unityInstance.Module)
    return;
  if (!unityInstance.logo) {
    unityInstance.logo = document.createElement("div");
    unityInstance.logo.className = "logo " + unityInstance.Module.splashScreenStyle;
    unityInstance.container.appendChild(unityInstance.logo);
  }
  if (!unityInstance.progress) {    
    unityInstance.progress = document.createElement("div");
    unityInstance.progress.className = "progress " + unityInstance.Module.splashScreenStyle;
    unityInstance.progress.empty = document.createElement("div");
    unityInstance.progress.empty.className = "empty";
    unityInstance.progress.appendChild(unityInstance.progress.empty);
    unityInstance.progress.full = document.createElement("div");
    unityInstance.progress.full.className = "full";
    unityInstance.progress.appendChild(unityInstance.progress.full);
    unityInstance.container.appendChild(unityInstance.progress);
     
  }
  window.addEventListener("resize",function()
    {
      if(this.screen.height>this.screen.width)
      {
        if (this.document.fullscreenElement) {
          this.document.exitFullscreen();
          
          return;
      }
      }
    })

  unityInstance.progress.full.style.width = (100 * progress) + "%";
  unityInstance.progress.empty.style.width = (100 * (1 - progress)) + "%";
  if (progress == 1)
  {
    unityInstance.logo.style.display = unityInstance.progress.style.display = "none";
    audio.pause();
    audio.currentTime = 0;
    console.log(audio.paused);
  }
   
      
}