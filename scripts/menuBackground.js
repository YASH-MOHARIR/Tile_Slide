 class BackgroundTile {
     constructor(x, y, type) {
         this.x = x;
         this.y = y;
         this.type = type;
         this.speed = 1; // Base speed for all tiles
         this.element = this.createTileElement();
         this.setPosition();
         this.startMovement();
     }
 
     createTileElement() {
         const tile = document.createElement('div');
         tile.className = `tile ${this.type} background-tile`;
         tile.style.opacity = '0.1';
         tile.style.pointerEvents = 'none';
         return tile;
     }
 
     setPosition() {
         this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
     }
 
     move() {
         // Move based on tile type
         switch(this.type) {
             case 'arrow_up':
                 this.y -= this.speed;
                 if (this.y < -100) {
                     this.y = window.innerHeight;
                 }
                 break;
             case 'arrow_down':
                 this.y += this.speed;
                 if (this.y > window.innerHeight) {
                     this.y = -100;
                 }
                 break;
             case 'arrow_left':
                 this.x -= this.speed;
                 if (this.x < -100) {
                     this.x = window.innerWidth;
                 }
                 break;
             case 'arrow_right':
                 this.x += this.speed;
                 if (this.x > window.innerWidth) {
                     this.x = -100;
                 }
                 break;
             case 'block':
                 // Blocks can slowly drift in a random direction
                 this.x += Math.sin(Date.now() / 1000) * 0.2;
                 this.y += Math.cos(Date.now() / 1000) * 0.2;
                 // Wrap around screen
                 if (this.x < -100) this.x = window.innerWidth;
                 if (this.x > window.innerWidth) this.x = -100;
                 if (this.y < -100) this.y = window.innerHeight;
                 if (this.y > window.innerHeight) this.y = -100;
                 break;
         }
 
         this.setPosition();
     }
 
     startMovement() {
         const animate = () => {
             this.move();
             requestAnimationFrame(animate);
         };
         animate();
     }
 }
 
 export function createAnimatedBackground() {
     const backgroundContainer = document.createElement('div');
     backgroundContainer.className = 'background-container';
     backgroundContainer.style.cssText = `
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         z-index: -1;
         overflow: hidden;
     `;
 
     document.body.prepend(backgroundContainer);
 
     const tileTypes = ['arrow_up', 'arrow_down', 'arrow_left', 'arrow_right', 'block'];
     const numberOfTiles = 12; // Reduced number of tiles for clearer visualization
 
     for (let i = 0; i < numberOfTiles; i++) {
         const randomX = Math.random() * window.innerWidth;
         const randomY = Math.random() * window.innerHeight;
         const randomType = tileTypes[Math.floor(Math.random() * tileTypes.length)];
         
         const tile = new BackgroundTile(randomX, randomY, randomType);
         backgroundContainer.appendChild(tile.element);
     }
 }
  
 export function removeMenuBackground() {
    const backgroundContainer = document.querySelector('.background-container');
    if (backgroundContainer) {
        // Add fade out animation
        backgroundContainer.style.transition = 'opacity 0.5s ease-out';
        backgroundContainer.style.opacity = '0';
        
        // Remove the element after animation completes
        setTimeout(() => {
            backgroundContainer.remove();
        }, 500);
    }
}
 
