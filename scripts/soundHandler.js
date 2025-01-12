// soundHandler.js

// Sound assets
export const sounds = {
  backgroundMusic: new Audio("./resources/sounds/bg-music.mp3"),
  levelComplete: new Audio("./resources/sounds/level-complete.mp3"),
  gameComplete: new Audio("./resources/sounds/game-complete.mp3"),
  buttonClick: new Audio("./resources/sounds/btn-click.mp3"),
  gameOver: new Audio("./resources/sounds/game-over.mp3"),
  tileSlide: new Audio("./resources/sounds/tile-slide.mp3"),
  tileVanish: new Audio("./resources/sounds/target-reached-1.mp3"),
};

// Sound state
let isMuted = true;

// Configure background music
sounds.backgroundMusic.loop = true;

// Sound control class
class SoundHandler {
  static initializeSounds() {
    this.updateSoundIcons(isMuted ? "fa-volume-mute" : "fa-volume-up");
    this.playBackgroundMusic();
    this.showLoadingMessage();
  }

  static showLoadingMessage() {
    const loadingMessage = document.createElement("div");
    loadingMessage.className = "audio-message";
    loadingMessage.innerHTML = `
            <div class="message-content">
                <i class="fas fa-music"></i>
                <span>Click on the music button to enable music control</span>
            </div>
        `;
    document.body.appendChild(loadingMessage);

    // Remove message after delay
    setTimeout(() => {
      loadingMessage.style.opacity = "0";
      setTimeout(() => {
        loadingMessage.remove();
      }, 3000);
    }, 4000);
  }

  static playBackgroundMusic() {
    console.log("playing bg music");
    sounds.backgroundMusic.play().catch((error) => {
      console.log("Audio play failed:", error);
    });
  }

  static stopBackgroundMusic() {
    sounds.backgroundMusic.pause();
    sounds.backgroundMusic.currentTime = 0;
  }

  static playButtonSound() {
    sounds.buttonClick.currentTime = 0;
    sounds.buttonClick.play().catch((error) => {
      console.log("Button sound failed:", error);
    });
  }

  static playLevelCompleteSound() {
    sounds.levelComplete.currentTime = 0;
    sounds.levelComplete.play().catch((error) => {
      console.log("Level complete sound failed:", error);
    });
  }

  static playGameOverSound() {
    this.stopBackgroundMusic();
    sounds.gameOver.play();
  }

  static playTileSlideSound() {
    sounds.tileSlide.currentTime = 0;
    sounds.tileSlide.play().catch((error) => {
      console.log("Tile slide sound failed:", error);
    });
  }

  static updateSoundIcons(iconClass) {
    document.querySelectorAll(".sound-toggle i").forEach((icon) => {
      icon.className = `fas ${iconClass}`;
    });
  }

  static toggleSound() {
    isMuted = !isMuted; 
    if (isMuted) {
      this.updateSoundIcons("fa-volume-mute");
      this.stopBackgroundMusic(); 
    } else {
      console.log("playing");
      this.updateSoundIcons("fa-volume-up");
 
        this.playBackgroundMusic();
  
    }
  }

  static isMuted() {
    return isMuted;
  }

 
}

export { SoundHandler };
