class Player {
    constructor ( index, name, tankColor, position, screenSize ) {
        this.index = index;
        this.name = name;
        this.life = 3;                                  // 3 gyvybes
        this.tankColor = tankColor || 'red';
        this.tankSize = { width: 46, height: 46 }
        this.position;
        this.speed = 0;
        this.maxForwardSpeed = 100;                     // 100px/s - max greitis i prieki
        this.maxBackwardSpeed = 50;                     // 50px/s - max greitis atbulomis
        this.forwardAccelaration = 20;                  // 20px/s - pagreitis i prieki
        this.backwardAccelaration = 30;                 // 20px/s - pagreitis atbulomis
        this.breakingSpeed = 10;                        // 10px/s - stabdymo pagreitis
        this.frictionSpeed = 5;                         // 5px/s - stabdymo pagreitis (trintis), jei nevaldai tanko
        this.direction = 0;                             // 0deg - tanko pasisukimo kryptis
        this.directionSpeed = 10;                       // 10deg/s - tanko posukio greitis
        this.fireRate = 3;                              // 1 bullet per 3 seconds
        this.keyboard;
        
        this.init( position, screenSize );
    }

    init( position, screenSize ) {
        this.setInitialPosition( position, screenSize );
        this.setInitialDirection( position );
        this.setKeybind();
    }

    setInitialPosition( position, screenSize ) {
        const positions = {
            topCenter: {
                top: 0,
                left: (screenSize.width - this.tankSize.width) / 2
            },
            bottomCenter: {
                top: screenSize.height - this.tankSize.height,
                left:  (screenSize.width - this.tankSize.width) / 2
            },
            leftCenter: {
                top: (screenSize.height - this.tankSize.height) / 2,
                left: 0
            },
            rightCenter: {
                top: (screenSize.height - this.tankSize.height) / 2,
                left: screenSize.width - this.tankSize.width
            },
        }
        this.position = positions[position];
    }

    setInitialDirection( position ) {
        const positions = {
            topCenter: 0,
            bottomCenter: 180,
            leftCenter: 270,
            rightCenter: 90
        }
        this.direction = positions[position];
    }

    setKeybind() {
        const sets = [
            { up: 'w', down: 's', right: 'd', left: 'a', fire: 'space' },
            { up: 'arrow-up', down: 'arrow-down', right: 'arrow-right', left: 'arrow-left', fire: 'enter' }
        ];

        this.keyboard = sets[this.index];
    }

    renderTank = ( DOM ) => {
        console.log(this.position);
        
        const tank = `<img class="tank" src="./img/tanks/tank_${this.tankColor}.png"
                        style="width: ${this.tankSize.width}px;
                            height: ${this.tankSize.height}px;
                            top: ${this.position.top}px;
                            left: ${this.position.left}px;
                            transform: rotate(${this.direction}deg);">`;
        DOM.innerHTML += tank;
    }
}

export default Player;