class Player {
    constructor ( index, name, tankColor, position, screenSize ) {
        this.index = index;
        this.name = name;
        this.tankColor = tankColor || 'red';
        this.tankSize = { width: 60, height: 60 }
        this.position = this.setInitialPosition( position, screenSize );
        this.direction = 'up';
        this.keyboard;

        this.init();
    }

    init() {
        this.setBarrelDirection();
        this.setKeybind();
    }

    setInitialPosition( position, screenSize ) {
        const positions = {
            topCenter: {
                top: 0,
                left: 50
            },
            bottomCenter: {
                top: 100,
                left: 50
            },
            leftCenter: {
                top: 50,
                left: 0
            },
            rightCenter: {
                top: 50,
                left: 100
            },
        }
        this.position = positions[position];
    }

    setBarrelDirection() {
        const directions = {
            topCenter: 'down',
            bottomCenter: 'up',
            leftCenter: 'right',
            rightCenter: 'left'
        }
        this.direction = directions[this.position];
    }

    setKeybind() {
        const sets = [
            { up: 'w', down: 's', right: 'd', left: 'a', fire: 'space' },
            { up: 'arrow-up', down: 'arrow-down', right: 'arrow-right', left: 'arrow-left', fire: 'enter' }
        ];

        this.keyboard = sets[this.index];
    }

    renderTank = ( DOM ) => {
        const tank = `<img src="./img/tanks/tank_${this.tankColor}.png">`;
        DOM.innerHTML += tank;
    }
}

export default Player;