class TanksGame {
    constructor ( target, p1Name, p2Name, groundType ) {
        this.DOM = document.querySelector(target);
        // this.map = [];
        this.player1Name = p1Name;
        this.player2Name = p2Name;
        this.groundType = groundType || 'grass';

        this.init();
    }

    init() {
        console.log('inicijuojame zaidima...');
        this.DOM.classList.add('game');
        this.DOM.classList.add(this.groundType);
    }

    viesaiMatomasMetodas = () => {
        return console.log('Hello :)');
    }
}

export default TanksGame;