import { levels } from "./levels.js";
import { TileType } from "./tileTypes.js";
import { SoundHandler, sounds } from "./soundHandler.js";

// Configure background music to loop
// sounds.backgroundMusic.loop = true;
// let isMuted = localStorage.getItem("isMuted") === "true" || false;
let isMuted = SoundHandler.isMuted;
let musicInitialized = false;

// Sound control functions

// Function to handle first user interaction
function handleFirstInteraction() {
  if (!musicInitialized) {
    musicInitialized = true;
    if (!isMuted) {
      SoundHandler.playBackgroundMusic();
    }
  }
}

// Game state management
let gameStarted = false;

// Initialize menu system DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize sound state
  SoundHandler.initializeSounds();

  // Add first interaction handler to the document
  const handleInteraction = () => {
    handleFirstInteraction();
    // Remove the event listeners after first interaction
    document.removeEventListener("click", handleInteraction);
    document.removeEventListener("keydown", handleInteraction);
    document.removeEventListener("touchstart", handleInteraction);
  };

  // Add multiple event listeners for first interaction
  document.addEventListener("click", handleInteraction);
  document.addEventListener("keydown", handleInteraction);
  document.addEventListener("touchstart", handleInteraction);

  // Sound toggle functionality
  document.querySelectorAll(".sound-toggle").forEach((button) => {
    button.onclick = (e) => {
      e.stopPropagation();
      SoundHandler.toggleSound();
      handleFirstInteraction(); // Ensure music can play after toggle
    };
  });

  // Add click sound to all pushable buttons except sound toggles
  document.querySelectorAll(".pushable:not(.sound-toggle)").forEach((button) => {
    button.addEventListener("click", () => {
      SoundHandler.playButtonSound();
      handleFirstInteraction(); // Ensure music can play after any button click
    });
  });

  const mainMenu = document.getElementById("main-menu");
  const gameBoard = document.getElementById("game-board");
  const hud = document.getElementById("hud");

  // Play button
  document.getElementById("play-btn").onclick = () => {
    mainMenu.style.display = "none";
    gameBoard.style.display = "block";
    hud.style.display = "block";
    startGame();
  };

  // How to Play button
  const howToPlayBtn = document.getElementById("how-to-play-btn");
  const howToPlayModal = document.getElementById("how-to-play-modal");

  howToPlayBtn.onclick = () => {
    howToPlayModal.classList.add("show");
  };

  // Leaderboard button
  const leaderboardBtn = document.getElementById("leaderboard-btn");
  const leaderboardModal = document.getElementById("leaderboard-modal");
  leaderboardBtn.onclick = () => {
    updateLeaderboard();
    leaderboardModal.classList.add("show");
  };

  // Close buttons
  const closeInstructionsBtn = document.getElementById("close-instructions-btn");
  closeInstructionsBtn.onclick = () => {
    howToPlayModal.classList.remove("show");
  };

  const closeLeaderboardBtn = document.getElementById("close-leaderboard-btn");
  closeLeaderboardBtn.onclick = () => {
    leaderboardModal.classList.remove("show");
  };

  // Back to menu functionality
  document.getElementById("back-to-menu-btn").onclick = () => returnToMenu();

  // Add click sound to all buttons
  document.querySelectorAll(".pushable").forEach((button) => {
    button.addEventListener("click", SoundHandler.playButtonSound);
  });
});

function startGame() {
  const gameLayoutContainer = document.querySelector(".game-layout");
  const menuContainer = document.querySelector(".menu-container");
  const gameboardWrapper = document.querySelector(".gameboard-wrapper");
  const hud = document.getElementById("hud");
  // const time_move_left = document.getElementById("time_move_left");

  // Add slide-up class to menu
  menuContainer.classList.add("slide-up");

  gameLayoutContainer.style.display = "block";
  // After menu starts sliding up, show game elements
  setTimeout(() => {
    menuContainer.style.display = "none";
    gameboardWrapper.style.display = "block";
    hud.style.display = "flex";

    // Trigger animations
    requestAnimationFrame(() => {
      gameboardWrapper.classList.add("slide-in");
      hud.classList.add("slide-in");
    });

    // Initialize game
    gameStarted = true;
    currentLevelIndex = 0;
    totalScore = 0;
    loadLevel(currentLevelIndex);
  }, 500); // Match this with the menu transition duration
}

function returnToMenu() {
  const gameLayoutContainer = document.querySelector(".game-layout");
  const menuContainer = document.querySelector(".menu-container");
  const gameboardWrapper = document.querySelector(".gameboard-wrapper");
  const hud = document.getElementById("hud");

  // First, trigger slide-out animations
  gameboardWrapper.classList.remove("slide-in");
  gameboardWrapper.classList.add("slide-out");
  hud.classList.remove("slide-in");
  hud.classList.add("slide-out");

  // Wait for animations to complete before showing menu
  setTimeout(() => {
    // Hide game elements
    gameLayoutContainer.style.display = "none";
    gameboardWrapper.style.display = "none";
    hud.style.display = "none";

    // Show and animate menu
    menuContainer.style.display = "flex";
    menuContainer.classList.remove("slide-up");
    menuContainer.classList.add("menu-slide-in");

    // Reset game state
    gameStarted = false;
    stopTimer();
    currentLevelIndex = 0;
    totalScore = 0;

    // Remove animation classes after transition
    setTimeout(() => {
      gameboardWrapper.classList.remove("slide-out");
      hud.classList.remove("slide-out");
      menuContainer.classList.remove("menu-slide-in");
    }, 500);
  }, 500); // Match this with animation duration
}

///
function updateLeaderboard() {
  const leaderboardList = document.getElementById("leaderboard-list");
  // Get scores from localStorage
  const scores = JSON.parse(localStorage.getItem("tileGameScores") || "[]");

  // Sort scores in descending order
  scores.sort((a, b) => b.score - a.score);

  // Take top 10 scores
  const topScores = scores.slice(0, 10);

  if (topScores.length === 0) {
    leaderboardList.innerHTML = '<p style="text-align: center">No scores yet!</p>';
    return;
  }
  console.log("top scores", topScores);
  // Create leaderboard HTML
  leaderboardList.innerHTML = topScores
    .map(
      (score, index) => `
              <div class="score-entry ${index < 3 ? "top-" + (index + 1) : ""}">
                  <span class="rank">#${index + 1}</span>
                  <span class="player">${score.playerName}</span>
                  <span class="score">${score.score}</span>
                  <span class="level">Level ${score.levelReached}</span>
              </div>
          `
    )
    .join("");
}

// Timer Variables
let timeLeft = 5; // Starting time for first level
let baseTime = 5; // Base time that increases each level
let timeIncrement = 5; // Time increase per level
let timer; // Timer interval
let totalScore = 0;
let isTimerRunning = false;

function startTimer() {
  if (!gameStarted || isTimerRunning) return;

  isTimerRunning = true;
  timeLeft = baseTime;
  updateTimerDisplay();

  timer = setInterval(() => {
    if (!gameStarted) {
      stopTimer();
      return;
    }

    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      stopTimer();
      showFinalModal("Time's Up! ⏰", totalScore, true);
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function updateTimerDisplay() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = `Time: ${timeLeft} Secs`;

  // Add warning class when time is low
  if (timeLeft <= 10) {
    timerElement.classList.add("warning");
  } else {
    timerElement.classList.remove("warning");
  }
}

function updateScoreDisplay() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Score: ${totalScore}`;
}
// Modify handleTimeUp function
function handleTimeUp() {
  stopTimer();
  showFinalModal("Time's Up! ⏰", totalScore, true);
}

function handleGameComplete() {
  SoundHandler.stopBackgroundMusic();
  SoundHandler.playLevelCompleteSound();

  // Calculate final score before stopping timer
  const finalScore = calculateScore();
  totalScore += finalScore; // Add final level score to total
  stopTimer();

  if (!isMuted) {
    SoundHandler.playBackgroundMusic();
  }
  showFinalModal("Congratulations! 🏆 You've Completed All Levels! ", totalScore, false);
}

function calculateScore() {
  return timeLeft; // Score is the remaining time
}

//  * 3. Game State: Board, Current Level, Moves Left
let currentLevelIndex = 0;
let board = []; // 6x6 array of tile types
let maxMoves = 0; // moves allowed for the current level
let movesLeft = 0; // how many moves remain

//  * 4. DOM Elements
const boardElement = document.getElementById("game-board");
const levelTitle = document.getElementById("level-title");
const levelInfo = document.getElementById("level-info");
const movesInfo = document.getElementById("moves-info");
const resetBtn = document.getElementById("reset-btn");

//  * 5. Event Listeners

resetBtn.addEventListener("click", () => {
  const tiles = document.querySelectorAll(".tile");

  // Animate all tiles simultaneously
  tiles.forEach((tile) => {
    tile.animate(
      [
        { transform: tile.style.transform }, // Start from current position
        { transform: `${tile.style.transform.split("translate")[0]} scale(0)` }, // Scale to 0 while maintaining position
      ],
      {
        duration: 300,
        easing: "ease-out",
        fill: "forwards", // Keeps the final state
      }
    );
  });

  // Wait for animation to complete before resetting
  setTimeout(() => {
    loadLevel(currentLevelIndex);

    // Animate new tiles appearing
    const newTiles = document.querySelectorAll(".tile");
    newTiles.forEach((tile) => {
      const [x, y] = [tile.dataset.col * 80, tile.dataset.row * 80];

      tile.animate(
        [{ transform: `translate(${x}px, ${y}px) scale(0)` }, { transform: `translate(${x}px, ${y}px) scale(1)` }],
        {
          duration: 300,
          easing: "ease-out",
          fill: "forwards",
        }
      );
    });
  }, 300);
});

//  * 6. Helper Functions

function isWithinBounds(r, c) {
  return r >= 0 && r < 6 && c >= 0 && c < 6;
}

function isArrowTile(tile) {
  return (
    tile === TileType.ARROW_UP ||
    tile === TileType.ARROW_DOWN ||
    tile === TileType.ARROW_LEFT ||
    tile === TileType.ARROW_RIGHT
  );
}

function isPushable(tile) {
  // Arrows and blocks are "pushable"
  return isArrowTile(tile) || tile === TileType.BLOCK;
}

function getDirection(arrowType) {
  switch (arrowType) {
    case TileType.ARROW_UP:
      return [-1, 0];
    case TileType.ARROW_DOWN:
      return [1, 0];
    case TileType.ARROW_LEFT:
      return [0, -1];
    case TileType.ARROW_RIGHT:
      return [0, 1];
    default:
      return [0, 0];
  }
}

/*************************************************************
 * 7. Rendering with Absolute Positioning & Animation
 *************************************************************
 * We'll create a <div> for each cell that is not 'blank'.
 * The top/left is computed from (row, col).
 *************************************************************/
function renderBoard() {
  boardElement.innerHTML = "";

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 6; col++) {
      const tile = board[row][col];
      if (tile === TileType.BLANK) continue;

      const tileDiv = document.createElement("div");
      tileDiv.classList.add("tile", tile);

      // Add data attributes to track position
      tileDiv.dataset.row = row;
      tileDiv.dataset.col = col;

      // Set initial position
      tileDiv.style.transform = `translate(${col * 80}px, ${row * 80}px)`;

      if (isArrowTile(tile)) {
        tileDiv.addEventListener("click", () => onArrowClick(row, col));
      }

      boardElement.appendChild(tileDiv);
    }
  }

  levelTitle.textContent = ` ${levels[currentLevelIndex].level_title}`;
  levelInfo.textContent = `Level: ${currentLevelIndex + 1}`;
  movesInfo.textContent = `Moves Left: ${movesLeft}`;
}

/*************************************************************
 * 8. Arrow Click Handler
 *    Decrement moves if the push is valid.
 *************************************************************/
function onArrowClick(row, col) {
  const arrowType = board[row][col];
  if (!isArrowTile(arrowType)) return;

  const [dRow, dCol] = getDirection(arrowType);
  const didMove = pushTiles(row, col, dRow, dCol);

  if (didMove) {
    movesLeft--;
    // Update moves display immediately
    movesInfo.textContent = `Moves Left: ${movesLeft}`;
  }

  // renderBoard() //is now called after animation in pushTiles
  checkWinOrLose();
}

/*************************************************************
 * 9. pushTiles
 *    Returns true if at least one tile was moved/removed.
 *************************************************************/

function pushTiles(startRow, startCol, dRow, dCol) {
  // Gather contiguous pushable tiles from (startRow, startCol) forward
  const chain = [];
  let r = startRow;
  let c = startCol;

  while (isWithinBounds(r, c) && isPushable(board[r][c])) {
    chain.push({ row: r, col: c });
    r += dRow;
    c += dCol;
  }

  if (chain.length === 0) return false;
  let somethingMoved = false;

  // Push from farthest to nearest
  for (let i = chain.length - 1; i >= 0; i--) {
    const { row, col } = chain[i];
    const tileType = board[row][col];
    const newRow = row + dRow;
    const newCol = col + dCol;

    if (isWithinBounds(newRow, newCol)) {
      const tileElement = document.querySelector(`.tile[data-row="${row}"][data-col="${col}"]`);

      if (board[newRow][newCol] === TileType.HOLE) {
        if (tileElement) {
          // First animate to hole position
          const slideAnimation = tileElement.animate(
            [
              { transform: `translate(${col * 80}px, ${row * 80}px)` },
              { transform: `translate(${newCol * 80}px, ${newRow * 80}px)` },
            ],
            {
              duration: 300,
              easing: "ease-out",
              fill: "forwards",
            }
          );

          sounds.tileVanish.play();
          // After reaching the hole, animate light up and disappear
          slideAnimation.onfinish = () => {
            tileElement.animate(
              [
                {
                  transform: `translate(${newCol * 80}px, ${newRow * 80}px) scale(1)`,
                  filter: "brightness(1)",
                  opacity: 1,
                },
                {
                  transform: `translate(${newCol * 80}px, ${newRow * 80}px) scale(1.2)`,
                  filter: "brightness(2)",
                  opacity: 0.8,
                },
                {
                  transform: `translate(${newCol * 80}px, ${newRow * 80}px) scale(0.8)`,
                  filter: "brightness(3)",
                  opacity: 0,
                },
              ],
              {
                duration: 400,
                easing: "ease-in",
                fill: "forwards",
              }
            ).onfinish = () => {
              tileElement.remove();
            };
          };
        }
        board[row][col] = TileType.BLANK;
        somethingMoved = true;
      } else if (board[newRow][newCol] === TileType.BLANK) {
        // Regular slide animation for normal moves
        if (tileElement) {
          sounds.tileSlide.play();
          tileElement.animate(
            [
              { transform: `translate(${col * 80}px, ${row * 80}px)` },
              { transform: `translate(${newCol * 80}px, ${newRow * 80}px)` },
            ],
            {
              duration: 200,
              easing: "ease-out",
              fill: "forwards",
            }
          );

          // Update data attributes
          tileElement.dataset.row = newRow;
          tileElement.dataset.col = newCol;
        }
        board[newRow][newCol] = tileType;
        board[row][col] = TileType.BLANK;
        somethingMoved = true;
      }
    }
  }

  // Wait for all animations to complete
  setTimeout(() => {
    renderBoard();
  }, 700); // Increased to account for both slide and disappear animations

  return somethingMoved;
}

//  * 10. Check Win/Lose Condition

function checkWinOrLose() {
  // Check if all pushable tiles are gone => WIN
  let anyPushableRemaining = false;
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 6; col++) {
      if (isPushable(board[row][col])) {
        anyPushableRemaining = true;
        break;
      }
    }
    if (anyPushableRemaining) break;
  }

  if (!anyPushableRemaining) {
    // WIN => Next level or finish
    stopTimer();

    setTimeout(() => {
      if (currentLevelIndex < levels.length - 1) {
        // Calculate and add score
        const levelScore = calculateScore();
        totalScore += levelScore;
        sounds.levelComplete.play();
        // Update score display
        updateScoreDisplay();
        const modal = document.getElementById("level-complete-modal");
        // Show modal
        setTimeout(() => {
          showLevelComplete();
        }, 1000);
        modal.classList.add("show");
      } else {
        //all levels cleared
        handleGameComplete();
      }
    }, 300);
    return;
  }

  // Check if movesLeft <= 0 => LOSE
  if (movesLeft <= 0) {
    // The user might still have just used their last move. If they didn’t win, it’s a fail.
    showFinalModal("You ran out of moves! 😢 ", totalScore, true);
  }
}

function showLevelComplete() {
  // Show regular level complete modal
  const modal = document.getElementById("level-complete-modal");
  document.getElementById("total-score").textContent = totalScore;
  modal.classList.add("show");
}
// Add score saving functionality
function saveScore(score, levelReached, playerName) {
  // Get existing scores
  const scores = JSON.parse(localStorage.getItem("tileGameScores") || "[]");

  // Add new score
  scores.push({
    playerName,
    score,
    levelReached,
    timestamp: new Date().toISOString(),
  });

  // Save back to localStorage
  localStorage.setItem("tileGameScores", JSON.stringify(scores));
}

// Update showFinalModal function
function showFinalModal(title, score, isGameOver) {
  gameStarted = false;
  stopTimer();

  const modal = document.getElementById("time-up-modal");
  const modalTitle = modal.querySelector("h2");
  const finalScoreSpan = document.getElementById("final-score");
  const tryAgainBtn = document.getElementById("try-again-btn");
  const finalMenuBtn = document.getElementById("final-menu-btn");

  modalTitle.textContent = title;
  finalScoreSpan.textContent = score;

  // Play level complete sound but don't stop background music
  isGameOver ? SoundHandler.playGameOverSound() : sounds.gameComplete.play();

  tryAgainBtn.onclick = () => {
    modal.classList.remove("show");
    SoundHandler.playBackgroundMusic();
    startGame();
  };

  finalMenuBtn.onclick = () => {
    const playerName = document.getElementById("playerNameInput").value.trim();
    if (playerName) {
      // Save the score with player name
      saveScore(score, currentLevelIndex + 1, playerName);
      returnToMenu();
      modal.style.display = "none";
    } else {
      alert("Please enter your name!");
    }
    modal.classList.remove("show");
    SoundHandler.playBackgroundMusic();
    returnToMenu();
  };

  // modal.style.display = "block";
  modal.classList.add("show");
}

 

document.getElementById("next-level-btn").addEventListener("click", () => {
  const modal = document.getElementById("level-complete-modal");

  // Hide modal with animation
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.classList.remove("show");
    modal.style.opacity = "";

    // Load next level
    currentLevelIndex++;
    if (currentLevelIndex < levels.length) {
      loadLevel(currentLevelIndex);
    } else {
      // Handle game completion
      showFinalModal("Congratulations!", totalScore, false);
    }
  }, 300);
});

//  * 11. Level Loading / Reset
function loadLevel(levelIndex) {
  stopTimer(); // Stop any existing timer

  const levelData = levels[levelIndex];
  board = levelData.board.map((row) => row.slice());
  maxMoves = levelData.maxMoves;
  movesLeft = maxMoves;

  // Increase base time for each level after first
  if (levelIndex > 0) {
    baseTime += timeIncrement;
  }

  renderBoard();
  startTimer();
}

//  * 12. Initialize the First Level
loadLevel(currentLevelIndex);

//

const creditsBtn = document.getElementById("credits-btn");
const creditsModal = document.getElementById("credits-modal");
const closeCreditsBtn = document.getElementById("close-credits-btn");

// Open credits modal
creditsBtn.addEventListener("click", () => {
  creditsModal.classList.add("show");
});

// Close credits modal
closeCreditsBtn.addEventListener("click", () => {
  creditsModal.classList.remove("show");
});

// Close modal if clicking outside
creditsModal.addEventListener("click", (e) => {
  if (e.target === creditsModal) {
    creditsModal.classList.remove("show");
  }
});
